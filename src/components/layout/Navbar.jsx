"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";
import { NAV_LINKS } from "../../lib/config";
import { useSettings } from "../../context/SettingsContext";
import SearchOverlay from "./SearchOverlay";
import Logo from "../ui/Logo";

function Badge({ count, always = false }) {
  if (!count && !always) return null;
  return (
    <span className="absolute -right-0.5 -top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-brand px-1 text-[10px] font-semibold leading-none text-white ring-2 ring-white">
      {count > 99 ? "99+" : count}
    </span>
  );
}

const isActive = (href, pathname) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

const iconBtn = "relative grid h-10 w-10 place-items-center rounded-full text-ink transition hover:bg-mist hover:text-brand";

function DesktopNav({ pathname }) {
  return (
    <nav className="hidden flex-1 justify-center lg:flex" aria-label="Main">
      <ul className="flex items-center gap-1 text-[14px] font-medium">
        {NAV_LINKS.map((link) => {
          const active = isActive(link.href, pathname);
          return (
            <li key={link.label} className="group relative">
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex items-center gap-1 px-3.5 py-2 transition after:absolute after:inset-x-3.5 after:-bottom-[3px] after:h-[2px] after:rounded-full after:transition ${
                  active ? "text-brand after:bg-brand" : "text-ink/80 after:bg-transparent hover:text-brand"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown size={14} className="transition group-hover:rotate-180" />}
              </Link>
              {link.children && (
                <div className="invisible absolute left-0 top-full z-30 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="w-56 rounded-xl border border-line bg-white p-2 text-ink shadow-card">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block rounded-lg px-3 py-2 text-[13px] transition hover:bg-mist hover:text-brand">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { currentUser } = useAuth();
  const { announcement } = useSettings();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const accountHref = currentUser ? "/account" : "/login";

  return (
    <>
      {announcement && (
        <div className="bg-navy px-4 py-2 text-center text-[11px] font-medium leading-snug tracking-[0.04em] text-white md:text-xs">{announcement}</div>
      )}

      <header className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-shadow ${scrolled ? "border-transparent shadow-[0_8px_28px_-16px_rgba(20,99,255,0.45)]" : "border-line"}`}>
        <div className="container flex h-[66px] items-center gap-3 md:h-[76px] md:gap-6">
          <button className={`${iconBtn} -ml-2 lg:hidden`} onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}>
            <Menu size={22} />
          </button>

          <Logo />

          <DesktopNav pathname={pathname} />

          <div className="ml-auto flex items-center md:gap-1 lg:ml-0">
            <button onClick={() => setSearchOpen(true)} aria-label="Search" className={iconBtn}>
              <Search size={20} />
            </button>
            <Link href="/wishlist" aria-label="Wishlist" className={`${iconBtn} hidden sm:grid`}>
              <Heart size={20} />
              <Badge count={wishlistCount} />
            </Link>
            <Link href={accountHref} aria-label="Account" className={`${iconBtn} hidden sm:grid`}>
              <User size={20} />
            </Link>
            <button onClick={() => setIsCartOpen(true)} aria-label={`Open cart, ${itemCount} items`} className={iconBtn}>
              <ShoppingCart size={20} />
              <Badge count={itemCount} always />
            </button>
          </div>
        </div>

        <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden" onClick={() => setMenuOpen(false)}>
          <aside
            className="flex h-full w-[86%] max-w-[360px] animate-slideInLeft flex-col bg-white"
            onClick={(e) => {
              e.stopPropagation();
              if (e.target.closest("a")) setMenuOpen(false);
            }}
            aria-label="Menu"
          >
            <div className="flex items-center justify-between bg-gradient-to-r from-navy to-brand-ink px-5 py-4">
              <Logo light />
              <button className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 pt-2" aria-label="Mobile">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href, pathname);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`flex items-center justify-between border-b border-line py-4 text-lg font-medium transition ${active ? "text-brand" : "hover:text-brand"}`}
                  >
                    {link.label}
                    {active && <span className="h-2 w-2 rounded-full bg-brand" />}
                  </Link>
                );
              })}
            </nav>
            <div className="grid grid-cols-2 gap-3 border-t border-line p-5 text-sm font-semibold">
              <Link href={accountHref} className="btn-outline gap-2 px-3">
                <User size={16} /> {currentUser ? "Account" : "Sign In"}
              </Link>
              <Link href="/wishlist" className="btn-outline gap-2 px-3">
                <Heart size={16} /> Wishlist{wishlistCount ? ` (${wishlistCount})` : ""}
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
