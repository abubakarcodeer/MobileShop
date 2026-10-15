"use client";

import Link from "next/link";
import { ArrowRight, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { useSettings } from "../../context/SettingsContext";
import { IMAGES } from "../../data/images";

const PERKS = [
  { icon: Truck, title: "Free Shipping", text: "On all orders" },
  { icon: ShieldCheck, title: "Secure Payment", text: "100% safe" },
  { icon: RotateCcw, title: "7 Days Return", text: "Hassle free" },
];

// The first word of the last line is set in blue, as in "Mobile Experience".
function Headline({ text }) {
  const lines = String(text).split("\n").filter(Boolean);
  if (lines.length < 2) return text;
  const [lead, ...rest] = lines.pop().split(" ");
  return (
    <>
      {lines.map((line) => (
        <span key={line} className="block">{line}</span>
      ))}
      <span className="block">
        <span className="bg-gradient-to-r from-[#3D8BFF] to-[#6FB1FF] bg-clip-text text-transparent">{lead}</span>
        {rest.length ? ` ${rest.join(" ")}` : ""}
      </span>
    </>
  );
}

// The first sentence of the subtitle is highlighted, as in "Top brands. Best prices."
function Subtitle({ text }) {
  const [first, ...rest] = String(text).split("\n");
  return (
    <>
      <span className="block text-white">{first}</span>
      {rest.join(" ")}
    </>
  );
}

// Hero artwork from the design; its edges fade into the hero background so no seam shows.
function HeroPhoto({ image }) {
  return (
    <div className="relative mx-auto aspect-[1408/1136] w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[580px]">
      <div className="absolute inset-[15%] rounded-full bg-brand/40 blur-3xl" />
      <img
        src={image.src}
        alt={image.alt}
        fetchPriority="high"
        className="relative h-full w-full object-contain [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_24%,black_80%,transparent),linear-gradient(to_bottom,transparent,black_18%,black_86%,transparent)]"
      />
    </div>
  );
}

export default function Hero() {
  const { heroEyebrow, heroTitle, heroSubtitle, heroImage } = useSettings();

  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_75%_55%,#0d4cf0_0%,#0a2d9a_35%,transparent_70%),linear-gradient(120deg,#020a24_0%,#041544_45%,#06227a_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(60%_60%_at_70%_50%,black,transparent)]" />

      <div className="container grid items-center gap-6 pb-10 pt-12 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:pb-14 lg:pt-14">
        <div className="max-w-[560px] animate-fadeUp">
          <p className="eyebrow text-[#6FA8FF]">{heroEyebrow}</p>
          <h1 className="mt-4 text-[38px] font-extrabold leading-[1.08] sm:text-[50px] lg:text-[58px]">
            <Headline text={heroTitle} />
          </h1>
          <p className="mt-5 max-w-[440px] text-[15px] leading-relaxed text-white/75 lg:text-base">
            <Subtitle text={heroSubtitle} />
          </p>
          <Link href="/shop" className="btn-accent mt-8 rounded-full px-7 py-3.5">
            Shop Now <ArrowRight size={16} />
          </Link>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
            {PERKS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/5">
                  <Icon size={18} strokeWidth={1.7} />
                </span>
                <p className="text-[11.5px] leading-tight text-white/65">
                  <span className="block text-[12.5px] font-semibold text-white">{title}</span>
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {heroImage ? (
          <img src={heroImage} alt="" className="mx-auto max-h-[480px] w-full rounded-3xl object-cover" />
        ) : (
          <HeroPhoto image={IMAGES.hero} />
        )}
      </div>
    </section>
  );
}
