import Link from "next/link";
import { STORE_NAME } from "../../lib/config";

// Phone outline from the MobileShop logo, drawn as SVG so it stays crisp at any size.
export function LogoMark({ className = "", title }) {
  return (
    <svg viewBox="0 0 24 36" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} fill="none">
      {title && <title>{title}</title>}
      <rect x="2" y="2" width="20" height="32" rx="4.5" stroke="currentColor" strokeWidth="2.6" />
      <path d="M9.5 6.2h5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="12" cy="29" r="1.5" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ light = false, size = "md" }) {
  const lg = size === "lg";
  // "Mobile" in ink, "Shop.com" in blue: split the name at its second capital.
  const [first, second = ""] = STORE_NAME.split(/(?=[A-Z][a-z]+$)/);
  return (
    <Link href="/" aria-label={`${STORE_NAME} home`} className="group flex items-center gap-2 leading-none">
      <LogoMark className={`shrink-0 ${light ? "text-white" : "text-brand"}${lg ? "h-10 w-7" : "h-8 w-6 md:h-9 md:w-[26px]"}`} />
      <span className={`font-logo font-extrabold tracking-[-0.03em] ${light ? "text-white" : "text-ink"} ${lg ? "text-[26px]" : "text-[20px] md:text-[23px]"}`}>
        {first}
        <span className={`ml-1 font-semibold tracking-[-0.01em] ${light ? "text-white/80" : "text-brand"} ${lg ? "text-[17px]" : "text-[14px] md:text-[15px]"}`}>
          {second}.com
        </span>
      </span>
    </Link>
  );
}
