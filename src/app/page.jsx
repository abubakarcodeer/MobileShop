import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import { BestSellers, LatestArrivals } from "../components/home/ProductRows";
import TopBrands from "../components/home/TopBrands";
import { PromoPair, SpotlightBanner, TrustedBanner } from "../components/home/Banners";
import Testimonials from "../components/home/Testimonials";
import LatestNews from "../components/home/LatestNews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <SpotlightBanner />
      <BestSellers />
      <PromoPair />
      <TopBrands />
      <LatestArrivals />
      <TrustedBanner />
      <Testimonials />
      <LatestNews />
    </>
  );
}
