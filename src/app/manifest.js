import { STORE_NAME } from "../lib/config";

export default function manifest() {
  return {
    name: STORE_NAME,
    short_name: STORE_NAME,
    description: "Latest smartphones, tablets, laptops and accessories at the best prices.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#1463FF",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
