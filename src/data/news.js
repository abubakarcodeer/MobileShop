import { PHOTOS, unsplash } from "./images";

// Sample articles for "Latest News & Tips". Body paragraphs use the same "- " bullet syntax as product descriptions.
export const NEWS = [
  {
    slug: "how-to-choose-the-right-smartphone",
    tag: "Tips",
    title: "How to Choose the Right Smartphone for Your Needs",
    date: "2026-10-12",
    image: unsplash(PHOTOS.iphoneDesk, 900),
    excerpt: "Screen size, camera, battery or budget? Here is how to work out what matters most before you buy.",
    body: `Buying a new phone is easier when you know what you will use it for most. Start with these questions.

- Camera first? Look at the main sensor size and whether there is a telephoto lens, not just the megapixels.
- Battery worries? Aim for 4,500mAh or more on Android, or a "Pro Max" / "Plus" size iPhone.
- Long-term value? Check how many years of software updates the brand promises. Samsung, Google and Apple now offer 6–7 years.
- Small hands? Phones around 6.1–6.3 inches are the most comfortable to use one-handed.

Still unsure? Message our team on WhatsApp and we will help you compare two or three models side by side.`,
  },
  {
    slug: "top-upcoming-smartphones",
    tag: "Tech News",
    title: "Top Upcoming Smartphones to Watch This Season",
    date: "2026-10-08",
    image: unsplash(PHOTOS.galaxyUltra, 900),
    excerpt: "From new foldables to camera-first flagships, these are the launches we are most excited about.",
    body: `It is a busy launch season. Here are the phones we expect to land in store over the next few months.

- New foldables with thinner hinges and bigger cover screens.
- Camera-first flagships with larger 1-inch type sensors.
- Mid-range phones getting flagship features like 120Hz OLED screens and 100W charging.

Sign up to our newsletter at the bottom of the page to hear first when pre-orders open.`,
  },
  {
    slug: "must-have-accessories-for-your-phone",
    tag: "Guide",
    title: "Must-Have Accessories for Your Phone",
    date: "2026-10-05",
    image: unsplash(PHOTOS.accessoryBoxes, 900),
    excerpt: "The case, charger and earbuds that make the biggest difference to everyday use.",
    body: `A few well-chosen accessories protect your phone and make it nicer to use every day.

- A fast charger: most new phones do not include one in the box. Match the wattage your phone supports.
- A good case and screen protector: the cheapest insurance you will ever buy.
- Wireless earbuds with noise cancellation for commuting and calls.
- A power bank for long days and travel.

Browse our Accessories category for options that work with every major brand.`,
  },
];

export const findArticle = (slug) => NEWS.find((n) => n.slug === slug);

export const formatNewsDate = (iso) => new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
