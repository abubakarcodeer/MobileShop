import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { NEWS, findArticle, formatNewsDate } from "../../../data/news";
import { RichText } from "../../../components/product/ProductDetails";

export async function generateMetadata(props) {
  const { slug } = await props.params;
  const article = findArticle(slug);
  if (!article) return { title: "Article Not Found" };
  return { title: article.title, description: article.excerpt, openGraph: { images: [article.image] } };
}

export async function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export default async function ArticlePage(props) {
  const { slug } = await props.params;
  const article = findArticle(slug);
  if (!article) notFound();

  return (
    <article className="container max-w-3xl py-10 md:py-14">
      <Link href="/news" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-deep">
        <ArrowLeft size={15} /> All articles
      </Link>
      <p className="eyebrow mt-6 text-brand">{article.tag}</p>
      <h1 className="mt-2 text-3xl leading-tight md:text-[40px]">{article.title}</h1>
      <p className="mt-3 flex items-center gap-1.5 text-sm text-muted">
        <CalendarDays size={14} /> {formatNewsDate(article.date)}
      </p>
      <img src={article.image} alt="" className="mt-8 aspect-[16/9] w-full rounded-3xl object-cover" />
      <RichText text={article.body} className="mt-8 text-[16px]" />
    </article>
  );
}
