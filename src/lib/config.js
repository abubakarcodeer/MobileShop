export const STORE_NAME = "MobileShop";
export const STORE_DOMAIN = "MobileShop.com";
export const STORE_TAGLINE = "Your trusted store for the latest devices and accessories.";

// Canonical origin, used for canonicals, the sitemap and structured data.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mobileshop.com";

// Fallbacks for settings/store; admins override these from /admin/settings.
export const DEFAULT_SETTINGS = {
  announcement: "",
  freeShippingThreshold: 200,
  flatShipping: 15,
  heroEyebrow: "Latest smartphones & accessories",
  heroTitle: "Upgrade Your\nMobile Experience",
  heroSubtitle: "Top brands. Best prices. Unmatched quality.\nYour next smartphone is just a click away.",
  heroImage: "",
  instagramUrl: "",
  facebookUrl: "",
  twitterUrl: "",
  tiktokUrl: "",
  youtubeUrl: "",
  contactEmail: "support@mobileshop.com",
  contactPhone: "+1 (888) 123-4567",
  contactAddress: "New York, NY 10001\nUnited States",
  whatsappNumber: "",
  deliveryTime: "2–4 working days",
};

export const CATEGORIES = [
  { slug: "smartphones", name: "Smartphones" },
  { slug: "tablets", name: "Tablets" },
  { slug: "laptops", name: "Laptops" },
  { slug: "smartwatches", name: "Smartwatches" },
  { slug: "accessories", name: "Accessories" },
  { slug: "gaming", name: "Gaming" },
];

// Curated collections a product can belong to, on top of its category.
export const COLLECTIONS = [
  { slug: "flagship", name: "Flagship", tagline: "The best of the best" },
  { slug: "midrange", name: "Mid-Range", tagline: "Power without the price" },
  { slug: "budget", name: "Budget", tagline: "Smart value picks" },
];

export const BRANDS = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Oppo", "Sony"];

// Storage / variant presets offered in the product form.
export const STORAGE_OPTIONS = ["64GB", "128GB", "256GB", "512GB", "1TB"];
export const MEMORY_OPTIONS = ["4GB", "6GB", "8GB", "12GB", "16GB", "24GB", "32GB"];

export const slugify = (text = "") =>
  String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const categoryName = (slug) => CATEGORIES.find((c) => c.slug === slug)?.name || slug;

// Spec line under a product title: the variant text if set, else "12GB - 256GB" (RAM and storage)
// or "256GB - Natural Titanium" (storage and colour).
export const productMeta = (product) => {
  if (product.variant) return product.variant;
  const storage = product.sizes?.[0];
  const second = product.memory || product.colors?.[0]?.name;
  return (product.memory ? [product.memory, storage] : [storage, second]).filter(Boolean).join(" - ");
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  {
    href: "/shop",
    label: "Shop",
    children: [
      { href: "/shop", label: "All Products" },
      ...CATEGORIES.map((c) => ({ href: `/shop/category/${c.slug}`, label: c.name })),
    ],
  },
  { href: "/brands", label: "Brands" },
  { href: "/shop/category/accessories", label: "Accessories" },
  { href: "/shop/category/sale", label: "Deals" },
  { href: "/news", label: "News" },
  { href: "/help", label: "About" },
];

// Change these two to sell in another currency; every price on the site goes through formatPrice.
export const CURRENCY = "USD";
export const CURRENCY_SYMBOL = "$";

export const LOW_STOCK_THRESHOLD = 5;

// Two decimals, as on the price tags: $1,199.00
export const formatPrice = (amount) =>
  `${CURRENCY_SYMBOL}${(Number(amount) || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
