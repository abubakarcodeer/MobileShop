// Placeholder photography from Unsplash (free license). Swap for your own product shots.
const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const square = (id, w = 700) => `${u(id, w)}&h=${w}`;

// Unsplash photo ids, named by what they show.
export const PHOTOS = {
  iphoneDark: "photo-1592750475338-74b7b21085ab",
  iphoneWhite: "photo-1574944985070-8f3ebc6b79d2",
  iphoneFront: "photo-1585060544812-6b45742d762f",
  iphoneGreen: "photo-1616348436168-de43ad0db179",
  iphoneCream: "photo-1591337676887-a217a6970a8a",
  iphoneYellow: "photo-1574755393849-623942496936",
  iphonePair: "photo-1604671368394-2240d0b1bb6c",
  iphoneBox: "photo-1695048133142-1a20484d2569",
  iphoneDesk: "photo-1592899677977-9c10ca588bbd",
  galaxyUltra: "photo-1678911820864-e2c567c655d7",
  galaxyBlack: "photo-1610792516307-ea5acd9c3b00",
  galaxyS21: "photo-1610945415295-d9bbf067e59c",
  androidRed: "photo-1567581935884-3349723552ca",
  androidOrange: "photo-1585399000684-d2f72660f092",
  androidDark: "photo-1601784551446-20c9e07cdbdb",
  androidHome: "photo-1598327105666-5b89351aff97",
  xiaomiHand: "photo-1609091839311-d5365f9ff1c5",
  phoneFlatlay: "photo-1512054502232-10a0a035d672",
  ipadPair: "photo-1585790050230-5dd28404ccb9",
  ipadPencil: "photo-1544244015-0df4b3ffc6b0",
  tabletHand: "photo-1561154464-82e9adf32764",
  macbookDesk: "photo-1541807084-5c52b6b3adef",
  macbookGlow: "photo-1525547719571-a2d4ac8945e2",
  laptopGray: "photo-1588872657578-7efd1f1555ed",
  appleWatch: "photo-1546868871-7041f2a55e12",
  appleWatchApps: "photo-1579586337278-3befd40fd17a",
  smartwatchBlack: "photo-1617043786394-f977fa12eddf",
  airpodsPro: "photo-1572569511254-d8f925fe2cbb",
  earbuds: "photo-1590658268037-6bf12165a8df",
  headphones: "photo-1546435770-a3e426bf472b",
  accessoryBoxes: "photo-1491933382434-500287f9b54b",
  dualsense: "photo-1615655406736-b37c4fabf923",
  xboxController: "photo-1600080972464-8e5f35f63d08",
  controllerNeon: "photo-1612287230202-1ff1d85d1bdf",
  ps5: "photo-1606144042614-b2417e99c4e3",
};

export const IMAGES = {
  // Phones on the glowing stand: 1408x1136 render in public/hero, matching the design.
  hero: { src: "/hero/hero-premium.webp", alt: "Latest smartphones on a glowing stand" },
  auth: u(PHOTOS.iphonePair, 1200),
  categories: {
    smartphones: square(PHOTOS.iphoneWhite, 400),
    tablets: square(PHOTOS.ipadPair, 400),
    laptops: square(PHOTOS.macbookDesk, 400),
    smartwatches: square(PHOTOS.appleWatch, 400),
    accessories: square(PHOTOS.airpodsPro, 400),
    gaming: square(PHOTOS.xboxController, 400),
  },
  spotlight: u(PHOTOS.iphonePair, 1000),
  deals: u(PHOTOS.iphoneDark, 900),
  trusted: u(PHOTOS.androidDark, 900),
  accessories: [square(PHOTOS.airpodsPro, 360), square(PHOTOS.earbuds, 360), square(PHOTOS.appleWatchApps, 360)],
  avatars: {
    james: square("photo-1500648767791-00dcc994a43e", 120),
    sarah: square("photo-1494790108377-be9c29b29330", 120),
    david: square("photo-1472099645785-5658abf4ff4e", 120),
  },
};

export { u as unsplash, square };
