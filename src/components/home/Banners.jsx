"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../../data/images";
import { useProducts } from "../../context/ProductContext";
import { formatPrice } from "../../lib/config";

function AppleMark({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.72-1.35-.14-2.65.8-3.33.8-.7 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.62 1.1 8.79.74 1.06 1.61 2.25 2.75 2.2 1.1-.04 1.52-.71 2.86-.71 1.33 0 1.71.71 2.87.69 1.19-.02 1.94-1.07 2.66-2.14.85-1.23 1.19-2.43 1.21-2.49-.03-.01-2.31-.89-2.33-3.54ZM14.2 6.13c.6-.74 1.01-1.75.9-2.77-.87.04-1.94.59-2.56 1.32-.56.64-1.05 1.69-.92 2.68.97.08 1.97-.49 2.58-1.23Z" />
    </svg>
  );
}

// Big light-blue spotlight for the newest flagship phone in the catalogue.
export function SpotlightBanner() {
  const { products } = useProducts();
  const phones = products.filter((p) => p.category === "smartphones");
  const spotlight = phones.filter((p) => p.isNew).sort((a, b) => b.price - a.price)[0] || phones[0];
  if (!spotlight) return null;

  return (
    <section className="container pt-12 md:pt-16">
      <div className="relative isolate grid overflow-hidden rounded-3xl bg-gradient-to-br from-[#E4EEFF] via-[#D6E5FF] to-[#BFD6FF] md:min-h-[320px] md:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col justify-center p-8 md:p-12">
          {spotlight.brand === "Apple" && <AppleMark className="h-8 w-8 text-ink" />}
          <h2 className="mt-3 text-[32px] font-extrabold leading-tight md:text-[42px]">{spotlight.title}</h2>
          <p className="mt-2 text-[15px] text-muted">Bigger. Brighter. Bolder.</p>
          <p className="mt-5 text-2xl font-bold">{formatPrice(spotlight.price)}</p>
          <Link href={`/product/${spotlight.id}`} className="btn-accent mt-6 self-start rounded-full px-6">
            Shop Now <ArrowRight size={15} />
          </Link>
        </div>
        <div className="relative min-h-[240px]">
          <img src={IMAGES.spotlight} alt={spotlight.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover [mask-image:linear-gradient(to_bottom,transparent,black_35%)] md:[mask-image:linear-gradient(to_right,transparent,black_40%)]" />
        </div>
      </div>
    </section>
  );
}

function AccessoriesBanner() {
  return (
    <div className="relative isolate flex min-h-[250px] flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B2C9A] via-[#2A43D6] to-[#6A4BE8] p-8 text-white md:p-10">
      <div className="absolute -right-10 -top-16 -z-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <h2 className="text-[26px] font-bold leading-tight md:text-[30px]">Premium Accessories</h2>
      <p className="mt-2 text-[14px] text-white/80">Better protection. More convenience.</p>
      <Link href="/shop/category/accessories" className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-mist">
        Shop Now <ArrowRight size={15} />
      </Link>
      <div className="pointer-events-none absolute bottom-6 right-6 hidden gap-3 sm:flex">
        {IMAGES.accessories.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            loading="lazy"
            className={`h-20 w-20 rounded-2xl object-cover shadow-xl ring-4 ring-white/15 md:h-24 md:w-24 xl:h-28 xl:w-28 ${i === 1 ? "-translate-y-6" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

function DealsBanner() {
  return (
    <div className="relative isolate flex min-h-[250px] flex-col justify-center overflow-hidden rounded-3xl bg-navy p-8 text-white md:p-10">
      <img src={IMAGES.deals} alt="" loading="lazy" className="absolute inset-y-0 right-0 -z-20 h-full w-[60%] object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy from-[42%] via-navy/80 via-[60%] to-navy/10" />
      <div className="absolute right-4 top-4 grid h-[68px] w-[68px] place-items-center sm:right-5 sm:top-5 sm:h-[86px] sm:w-[86px] rounded-full bg-brand text-center leading-none shadow-glow">
        <span>
          <span className="block text-[9px] font-semibold uppercase">Up to</span>
          <span className="block text-[20px] font-extrabold sm:text-[26px]">50%</span>
          <span className="block text-[10px] font-bold uppercase">Off</span>
        </span>
      </div>
      <h2 className="max-w-[210px] text-[26px] font-bold leading-tight sm:max-w-[260px] md:text-[30px]">Save More with Our Deals</h2>
      <p className="mt-2 max-w-[260px] text-[13.5px] leading-relaxed text-white/75">Get the best offers on your favourite smartphones and accessories.</p>
      <Link href="/shop/category/sale" className="btn-accent mt-6 self-start rounded-full px-6">
        View Deals <ArrowRight size={15} />
      </Link>
    </div>
  );
}

export function PromoPair() {
  return (
    <section className="container grid gap-5 pt-12 md:pt-16 lg:grid-cols-2">
      <AccessoriesBanner />
      <DealsBanner />
    </section>
  );
}

export function TrustedBanner() {
  return (
    <section className="container pt-12 md:pt-16">
      <div className="relative isolate grid overflow-hidden rounded-3xl bg-navy text-white md:min-h-[300px] md:grid-cols-2">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_90%_at_80%_50%,#0d4cf0_0%,transparent_70%)] opacity-70" />
        <div className="flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-[28px] font-bold leading-tight md:text-[36px]">
            Your Trusted
            <br />
            Mobile Store
          </h2>
          <p className="mt-4 max-w-[380px] text-[14px] leading-relaxed text-white/75">
            We bring you the latest smartphones, accessories and more, with genuine products, the best prices and reliable service.
          </p>
          <Link href="/help#about" className="btn-accent mt-7 self-start rounded-full px-6">
            Learn More <ArrowRight size={15} />
          </Link>
        </div>
        <div className="relative min-h-[240px]">
          <img src={IMAGES.trusted} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover [mask-image:linear-gradient(to_bottom,transparent,black_35%)] md:[mask-image:linear-gradient(to_right,transparent,black_40%)]" />
        </div>
      </div>
    </section>
  );
}
