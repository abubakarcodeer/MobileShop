"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { formatPrice, productMeta } from "../../lib/config";
import { isSoldOut } from "../../lib/product";

export function Stars({ rating, size = 12 }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={`Rated ${Number(rating).toFixed(1)} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} className={i < Math.round(rating) ? "fill-star text-star" : "fill-line text-line"} />
      ))}
    </span>
  );
}

export function Rating({ rating, reviews, className = "" }) {
  if (!rating) return null;
  return (
    <p className={`flex items-center gap-1.5 text-[11px] text-muted ${className}`}>
      <Stars rating={rating} />
      <span>
        {Number(rating).toFixed(1)}
        {reviews > 0 && ` (${reviews})`}
      </span>
    </p>
  );
}

const BADGES = {
  new: { label: "New", className: "bg-brand text-white" },
  hot: { label: "Hot", className: "bg-[#FF3B47] text-white" },
  best: { label: "Best Seller", className: "bg-[#16A34A] text-white" },
};

// One badge per card: New beats Best Seller beats a sale ("Hot").
export function productBadge(product) {
  if (isSoldOut(product)) return { label: "Sold Out", className: "bg-ink text-white" };
  if (product.isNew) return BADGES.new;
  if (product.bestseller) return BADGES.best;
  if (product.compareAtPrice > product.price) return BADGES.hot;
  return null;
}

// `compact` gives the tighter card used in the Latest Arrivals row.
export default function ProductCard({ product, compact = false }) {
  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const saved = isInWishlist(product.id);
  const soldOut = isSoldOut(product);
  const onSale = product.compareAtPrice > product.price;
  const meta = productMeta(product);
  const badge = productBadge(product);

  return (
    <article className={`group relative flex h-full flex-col rounded-2xl border border-line bg-white p-3 transition duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-card ${soldOut ? "opacity-80" : ""}`}>
      <div className="relative overflow-hidden rounded-xl bg-cloud">
        <Link href={`/product/${product.id}`} className={`block ${compact ? "aspect-[4/3.6]" : "aspect-square"}`}>
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.05] ${soldOut ? "grayscale-[0.5]" : ""}`}
          />
        </Link>

        {badge && (
          <span className={`pointer-events-none absolute left-2.5 top-2.5 rounded-md px-2 py-1 text-[10px] font-bold leading-none ${badge.className}`}>{badge.label}</span>
        )}

        <button
          onClick={() => toggleWishlist(product)}
          aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
          aria-pressed={saved}
          className="absolute right-2.5 top-2.5 grid h-8 w-8 place-items-center rounded-full bg-white/95 text-ink shadow-sm transition hover:text-brand"
        >
          <Heart size={15} className={saved ? "fill-brand text-brand" : ""} />
        </button>
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-3.5">
        <Link href={`/product/${product.id}`} className="line-clamp-2 text-[14px] font-semibold leading-snug transition hover:text-brand">
          {product.title}
        </Link>
        {meta && <p className="mt-1 text-[11.5px] text-muted">{meta}</p>}
        <Rating rating={product.rating} reviews={product.reviews} className="mt-2" />
        <p className="mt-2 flex flex-wrap items-baseline gap-x-2 text-[16px] font-bold">
          {formatPrice(product.price)}
          {onSale && <span className="text-xs font-normal text-muted line-through">{formatPrice(product.compareAtPrice)}</span>}
        </p>

        <div className="mt-auto pt-3.5">
          <button onClick={() => addItem(product)} disabled={soldOut} className={`btn-dark w-full whitespace-nowrap px-2 ${compact ? "py-2" : "py-2.5"} text-xs`}>
            {!soldOut && <ShoppingCart size={14} />}
            <span className="sr-only">{product.title}: </span>
            {soldOut ? "Sold Out" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}
