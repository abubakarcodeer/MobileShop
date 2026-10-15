import { NEWS } from "../../data/news";
import { NewsCard } from "../../components/home/LatestNews";

export const metadata = {
  title: "News & Tips",
  description: "Buying guides, tech news and tips for getting the most from your smartphone, tablet and accessories.",
};

export default function NewsPage() {
  return (
    <div className="container py-10 md:py-14">
      <div className="rounded-3xl bg-gradient-to-r from-navy to-brand-ink px-6 py-10 text-center text-white md:py-12">
        <p className="eyebrow text-accent">Blog</p>
        <h1 className="mt-2 text-3xl md:text-[40px]">Latest News & Tips</h1>
      </div>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {NEWS.map((article) => (
          <li key={article.slug}>
            <NewsCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}
