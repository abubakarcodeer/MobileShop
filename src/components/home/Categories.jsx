import Link from "next/link";
import { IMAGES } from "../../data/images";
import { CATEGORIES } from "../../lib/config";
import SectionHeader from "./SectionHeader";

const TILES = CATEGORIES.map((c) => ({ label: c.name, href: `/shop/category/${c.slug}`, image: IMAGES.categories[c.slug] }));

export default function Categories() {
  return (
    <section className="container pt-12 md:pt-16">
      <SectionHeader eyebrow="Shop by category" title="Explore Our Top Categories" href="/shop" />
      <ul className="no-scrollbar -mx-5 flex snap-x scroll-px-5 gap-3 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-6 md:gap-4 md:overflow-visible md:px-0">
        {TILES.map((tile) => (
          <li key={tile.label} className="w-[38%] shrink-0 snap-start sm:w-[24%] md:w-auto">
            <Link href={tile.href} className="group block rounded-2xl bg-cloud p-3 text-center transition hover:bg-mist hover:shadow-card">
              <div className="mx-auto aspect-square overflow-hidden rounded-xl bg-white">
                <img src={tile.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <span className="mt-3 block pb-1 text-[13px] font-semibold transition group-hover:text-brand">{tile.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
