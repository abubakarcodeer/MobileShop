// Brand marks from Simple Icons (CC0 icon set; the marks remain trademarks of their owners).
// `height` is the display height in px that makes the logos look the same size next to each other,
// `color` is the brand's own colour, revealed on hover. For production, save copies under /public/brands.
const icon = (slug) => `https://cdn.simpleicons.org/${slug}`;

export const BRAND_LOGOS = {
  Apple: { src: icon("apple"), height: 32, color: "#000000" },
  Samsung: { src: icon("samsung"), height: 70, color: "#1428A0" },
  Google: { src: icon("google"), height: 26, color: "#4285F4" },
  OnePlus: { src: icon("oneplus"), height: 28, color: "#F5010C" },
  Xiaomi: { src: icon("xiaomi"), height: 28, color: "#FF6900" },
  Oppo: { src: icon("oppo"), height: 62, color: "#2D683D" },
  Sony: { src: icon("sony"), height: 58, color: "#000000" },
};
