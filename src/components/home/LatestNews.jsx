import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { NEWS, formatNewsDate } from "../../data/news";
import SectionHeader from "./SectionHeader";

export function NewsCard({ article }) {
  return (
    <Link href={`/news/${article.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-0.5 hover:shadow-card">
      <div className="aspect-[16/10] overflow-hidden bg-cloud">
        <img src={article.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="eyebrow text-brand">{article.tag}</p>
        <h3 className="mt-2 text-[16px] font-bold leading-snug transition group-hover:text-brand">{article.title}</h3>
        <p className="mt-3 flex items-center gap-1.5 text-[12px] text-muted">
          <CalendarDays size={13} /> {formatNewsDate(article.date)}
        </p>
      </div>
    </Link>
  );
}

export default function LatestNews() {
  return (
    <section className="container py-12 md:py-16">
      <SectionHeader title="Latest News & Tips" href="/news" />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {NEWS.slice(0, 3).map((article) => (
          <li key={article.slug}>
            <NewsCard article={article} />
          </li>
        ))}
      </ul>
    </section>
  );
}
