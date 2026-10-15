"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useSettings } from "../../context/SettingsContext";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../ui/SocialIcons";
import Logo from "../ui/Logo";
import NewsletterForm from "../home/Newsletter";
import { STORE_DOMAIN, STORE_TAGLINE } from "../../lib/config";

const COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "Brands", href: "/brands" },
      { label: "Accessories", href: "/shop/category/accessories" },
      { label: "Deals", href: "/shop/category/sale" },
      { label: "About Us", href: "/help#about" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping Policy", href: "/help#shipping" },
      { label: "Return Policy", href: "/help#returns" },
      { label: "Warranty", href: "/help#warranty" },
      { label: "FAQs", href: "/help#faq" },
      { label: "Track Order", href: "/account" },
    ],
  },
];

const badge = "grid h-6 w-10 place-items-center rounded text-[8px] font-extrabold leading-none";

function PaymentBadges() {
  return (
    <ul className="flex items-center gap-2" aria-label="Accepted payment methods">
      <li className={`${badge} bg-white italic tracking-tight text-[#1A1F71]`} title="Visa">VISA</li>
      <li className={`${badge} bg-white`} title="Mastercard">
        <svg viewBox="0 0 32 20" className="h-4" aria-hidden>
          <circle cx="12" cy="10" r="8" fill="#EB001B" />
          <circle cx="20" cy="10" r="8" fill="#F79E1B" fillOpacity=".9" />
        </svg>
      </li>
      <li className={`${badge} bg-white italic text-[#003087]`} title="PayPal">PayPal</li>
      <li className={`${badge} bg-white font-semibold text-black`} title="Apple Pay">Pay</li>
      <li className={`${badge} bg-[#1F72CD] text-white`} title="American Express">AMEX</li>
    </ul>
  );
}

export default function Footer() {
  const { instagramUrl, facebookUrl, twitterUrl, youtubeUrl, contactEmail, contactPhone, contactAddress } = useSettings();

  const socials = [
    { label: "Facebook", href: facebookUrl, Icon: FacebookIcon },
    { label: "Instagram", href: instagramUrl, Icon: InstagramIcon },
    { label: "Twitter", href: twitterUrl, Icon: TwitterIcon },
    { label: "YouTube", href: youtubeUrl, Icon: YoutubeIcon },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
        <div className="col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-4 max-w-[260px] text-[13px] leading-relaxed text-white/60">{STORE_TAGLINE}</p>
          <ul className="mt-5 space-y-2.5 text-xs text-white/60">
            {contactEmail && (
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 shrink-0 text-accent" />
                <a href={`mailto:${contactEmail}`} className="break-all transition hover:text-white">{contactEmail}</a>
              </li>
            )}
            {contactPhone && (
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-0.5 shrink-0 text-accent" />
                <a href={`tel:${contactPhone.replace(/[^\d+]/g, "")}`} className="transition hover:text-white">{contactPhone}</a>
              </li>
            )}
            {contactAddress && (
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
                <span className="whitespace-pre-line">{contactAddress}</span>
              </li>
            )}
          </ul>
          <div className="mt-6 flex gap-2.5">
            {socials.map(({ label, href, Icon }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-brand"
                >
                  <Icon />
                </a>
              ) : (
                // Not linked until the URL is added in /admin/settings.
                <span key={label} aria-hidden className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/70">
                  <Icon />
                </span>
              )
            )}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-sm font-semibold">{col.title}</h3>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-white/60 transition hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 lg:col-span-1">
          <h3 className="mb-2 text-sm font-semibold">Newsletter</h3>
          <p className="mb-4 text-[13px] leading-relaxed text-white/60">Get the latest updates and offers.</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          <p className="text-[12px] text-white/60">
            © {new Date().getFullYear()} {STORE_DOMAIN}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-[12px] text-white/60">
            <Link href="/privacy-policy" className="transition hover:text-accent">Privacy Policy</Link>
            <Link href="/help" className="transition hover:text-accent">Terms & Conditions</Link>
            <PaymentBadges />
          </div>
        </div>
      </div>
    </footer>
  );
}
