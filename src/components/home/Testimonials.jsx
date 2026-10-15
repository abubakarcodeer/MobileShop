"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Heart, Quote } from "lucide-react";
import { IMAGES } from "../../data/images";
import { Stars } from "../product/ProductCard";
import SectionHeader from "./SectionHeader";

// Sample reviews: replace with real customer feedback before launch.
const REVIEWS = [
  {
    name: "James Carter",
    place: "New York, USA",
    avatar: IMAGES.avatars.james,
    text: "Amazing service! Got my iPhone on time and at the best price. Highly recommended!",
  },
  {
    name: "Sarah Khan",
    place: "London, UK",
    avatar: IMAGES.avatars.sarah,
    text: "The quality is excellent and the customer support is super helpful. Will definitely shop again!",
  },
  {
    name: "David Wilson",
    place: "Toronto, Canada",
    avatar: IMAGES.avatars.david,
    text: "Very smooth buying experience. Fast shipping and original products. Love it!",
  },
  {
    name: "Ahmed Raza",
    place: "Dubai, UAE",
    avatar: "",
    text: "Ordered a Galaxy S24 Ultra and AirPods together. Both arrived sealed with warranty cards. Great store.",
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);
  const scroll = (dir) => {
    const el = trackRef.current;
    const card = el?.firstElementChild;
    if (card) el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
  };

  return (
    <section className="container pt-12 md:pt-16">
      <SectionHeader eyebrow="Customer reviews" title="What Our Customers Say" subtitle="Real people. Real experiences.">
        <div className="flex gap-2">
          {[
            { dir: -1, Icon: ChevronLeft, label: "Previous reviews" },
            { dir: 1, Icon: ChevronRight, label: "Next reviews" },
          ].map(({ dir, Icon, label }) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-line transition hover:border-brand hover:bg-brand hover:text-white"
            >
              <Icon size={17} />
            </button>
          ))}
        </div>
      </SectionHeader>

      <ul ref={trackRef} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
        {REVIEWS.map((r) => (
          <li key={r.name} className="relative flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-line bg-white p-5 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]">
            <Heart size={16} className="absolute right-5 top-5 text-muted/60" aria-hidden />
            <div className="flex items-center gap-3">
              {r.avatar ? (
                <img src={r.avatar} alt="" loading="lazy" className="h-11 w-11 rounded-full object-cover" />
              ) : (
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-sm font-semibold text-white">{r.name.charAt(0)}</span>
              )}
              <p className="text-[14px] font-semibold leading-tight">
                {r.name}
                <span className="block text-[11.5px] font-normal text-muted">{r.place}</span>
              </p>
            </div>
            <div className="mt-4">
              <Stars rating={5} size={14} />
            </div>
            <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-ink/75">
              <Quote size={14} className="mr-1 inline -translate-y-0.5 text-brand" aria-hidden />
              {r.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
