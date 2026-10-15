import Link from "next/link";
import { BRANDS, slugify } from "../../lib/config";
import BrandLogo from "../ui/BrandLogo";
import SectionHeader from "./SectionHeader";

export default function TopBrands() {
  return (
    <section id="brands" className="container scroll-mt-28 pt-12 md:pt-16">
      <SectionHeader title="Shop by Brand" subtitle="Choose from the top brands you love." href="/brands" />
      <ul className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:grid-cols-7">
        {BRANDS.map((brand) => (
          <li key={brand}>
            <Link
              href={`/shop/brand/${slugify(brand)}`}
              aria-label={`${brand} products`}
              className="group flex h-[92px] flex-col sm:h-[112px] items-center justify-center gap-2 overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card"
            >
              <span className="flex h-12 items-center justify-center">
                <BrandLogo brand={brand} hoverColor />
              </span>
              <span className="text-[11px] font-medium text-muted transition group-hover:text-ink sm:text-[12px]">{brand}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
