// ====================================================================
// MOOREDIAMONDS — Product Catalog Data
// ====================================================================
// שדות בסוגריים מרובעים [כמו זה] הם פלייסהולדרים שצריך להחליף במידע אמיתי.
// Fields in [brackets] are placeholders — replace with real data.
// ====================================================================

// --- Image Imports: Loose Stones ---
import stone01 from "@/assets/catalog/stone-01.jpg";
import stone02 from "@/assets/catalog/stone-02.jpg";
import stone03 from "@/assets/catalog/stone-03.jpg";
import stone04 from "@/assets/catalog/stone-04.jpg";
import stone05 from "@/assets/catalog/stone-05.jpg";
import stone06 from "@/assets/catalog/stone-06.jpg";
import stone07 from "@/assets/catalog/stone-07.jpg";
import stone08 from "@/assets/catalog/stone-08.jpg";
import stone09 from "@/assets/catalog/stone-09.jpg";

// --- Image Imports: Jewelry Pieces ---
import jewelry01 from "@/assets/catalog/jewelry-01.jpg";
import jewelry02 from "@/assets/catalog/jewelry-02.jpg";
import jewelry03 from "@/assets/catalog/jewelry-03.jpg";
import jewelry04 from "@/assets/catalog/jewelry-04.jpg";
import jewelry05 from "@/assets/catalog/jewelry-05.jpg";
import jewelry06 from "@/assets/catalog/jewelry-06.jpg";
import jewelry07 from "@/assets/catalog/jewelry-07.jpg";
import jewelry08 from "@/assets/catalog/jewelry-08.jpg";
import jewelry09 from "@/assets/catalog/jewelry-09.jpg";
import jewelry10 from "@/assets/catalog/jewelry-10.jpg";
import jewelry11 from "@/assets/catalog/jewelry-11.jpg";
import jewelry12 from "@/assets/catalog/jewelry-12.jpg";
import jewelry13 from "@/assets/catalog/jewelry-13.jpg";
import jewelry14 from "@/assets/catalog/jewelry-14.jpg";
import jewelry15 from "@/assets/catalog/jewelry-15.jpg";
import jewelry16 from "@/assets/catalog/jewelry-16.jpg";
import jewelry17 from "@/assets/catalog/jewelry-17.jpg";
import jewelry18 from "@/assets/catalog/jewelry-18.jpg";
import jewelry19 from "@/assets/catalog/jewelry-19.jpg";
import jewelry20 from "@/assets/catalog/jewelry-20.jpg";
import jewelry21 from "@/assets/catalog/jewelry-21.jpg";
import jewelry22 from "@/assets/catalog/jewelry-22.jpg";
import jewelry23 from "@/assets/catalog/jewelry-23.jpg";
import jewelry24 from "@/assets/catalog/jewelry-24.jpg";
import jewelry25 from "@/assets/catalog/jewelry-25.jpg";
import jewelry26 from "@/assets/catalog/jewelry-26.jpg";
import jewelry27 from "@/assets/catalog/jewelry-27.jpg";
import jewelry28 from "@/assets/catalog/jewelry-28.jpg";
import jewelry29 from "@/assets/catalog/jewelry-29.jpg";
import jewelry30 from "@/assets/catalog/jewelry-30.jpg";
import jewelry31 from "@/assets/catalog/jewelry-31.jpg";
import jewelry32 from "@/assets/catalog/jewelry-32.jpg";
import jewelry33 from "@/assets/catalog/jewelry-33.jpg";
import jewelry34 from "@/assets/catalog/jewelry-34.jpg";
import jewelry35 from "@/assets/catalog/jewelry-35.jpg";
import jewelry36 from "@/assets/catalog/jewelry-36.jpg";
import jewelry37 from "@/assets/catalog/jewelry-37.jpg";
import jewelry38 from "@/assets/catalog/jewelry-38.jpg";
import jewelry39 from "@/assets/catalog/jewelry-39.jpg";
import jewelry40 from "@/assets/catalog/jewelry-40.jpg";

// --- Image Imports: Showcase / Portfolio ---
import showcase01 from "@/assets/catalog/showcase-01.jpg";
import showcase02 from "@/assets/catalog/showcase-02.jpg";
import showcase03 from "@/assets/catalog/showcase-03.jpg";
import showcase04 from "@/assets/catalog/showcase-04.jpg";
import showcase05 from "@/assets/catalog/showcase-05.jpg";
import showcase06 from "@/assets/catalog/showcase-06.jpg";
import showcase07 from "@/assets/catalog/showcase-07.jpg";
import showcase08 from "@/assets/catalog/showcase-08.jpg";
import showcase09 from "@/assets/catalog/showcase-09.jpg";
import showcase10 from "@/assets/catalog/showcase-10.jpg";
import showcase11 from "@/assets/catalog/showcase-11.jpg";
import showcase12 from "@/assets/catalog/showcase-12.jpg";
import showcase13 from "@/assets/catalog/showcase-13.jpg";
import showcase14 from "@/assets/catalog/showcase-14.jpg";

// ====================================================================
// Types
// ====================================================================

export type ProductCategory = "rings" | "earrings" | "necklaces" | "bracelets" | "loose-stones";
export type ProductType = "loose-stone" | "jewelry" | "showcase";

export interface DiamondDetails {
  carat: string;
  color: string;
  clarity: string;
  cut: string;
  shape?: string;
  fluorescence?: string;
}

export interface GIACertificate {
  reportNumber: string;
  reportUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  type: ProductType;
  price: string;
  image: string;
  additionalImages?: string[];
  videoUrl?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  material?: string;
  diamond?: DiamondDetails;
  diamondCount?: number;
  finish?: string;
  gia?: GIACertificate;
  dimensions?: string;
  weight?: string;
  editorsNote?: string;
  description?: string;
  barcode?: string;
}

// ====================================================================
// LOOSE STONES — אבנים למכירה
// ====================================================================

export const looseStones: Product[] = [
  {
    id: "ls-001",
    name: "Round Brilliant — Exceptional White",
    category: "loose-stones",
    type: "loose-stone",
    price: "[Set price]",
    image: stone01,
    isNew: true,
    diamond: { carat: "[X.XX ct]", color: "[D-Z]", clarity: "[FL-I3]", cut: "[Excellent/VG/Good]", shape: "Round Brilliant", fluorescence: "[None/Faint/Medium]" },
    gia: { reportNumber: "[GIA Report #]" },
    description: "[Describe origin, quality, unique characteristics]",
  },
  {
    id: "ls-002",
    name: "Cushion Cut — Fine Quality",
    category: "loose-stones",
    type: "loose-stone",
    price: "[Set price]",
    image: stone02,
    diamond: { carat: "[X.XX ct]", color: "[D-Z]", clarity: "[FL-I3]", cut: "[Excellent/VG/Good]", shape: "Cushion" },
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ls-003",
    name: "Pear Shaped — Vivid Brilliance",
    category: "loose-stones",
    type: "loose-stone",
    price: "[Set price]",
    image: stone03,
    diamond: { carat: "[X.XX ct]", color: "[D-Z]", clarity: "[FL-I3]", cut: "[Set cut]", shape: "Pear" },
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ls-004",
    name: "Emerald Cut — Crystal Clear",
    category: "loose-stones",
    type: "loose-stone",
    price: "[Set price]",
    image: stone04,
    isNew: true,
    diamond: { carat: "[X.XX ct]", color: "[D-Z]", clarity: "[FL-I3]", cut: "[Set cut]", shape: "Emerald" },
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ls-005",
    name: "Oval — Premium Select",
    category: "loose-stones",
    type: "loose-stone",
    price: "[Set price]",
    image: stone05,
    diamond: { carat: "[X.XX ct]", color: "[D-Z]", clarity: "[FL-I3]", cut: "[Set cut]", shape: "Oval" },
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ls-006",
    name: "Marquise — Elegant Flame",
    category: "loose-stones",
    type: "loose-stone",
    price: "[Set price]",
    image: stone06,
    diamond: { carat: "[X.XX ct]", color: "[D-Z]", clarity: "[FL-I3]", cut: "[Set cut]", shape: "Marquise" },
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ls-007",
    name: "Princess Cut — Modern Classic",
    category: "loose-stones",
    type: "loose-stone",
    price: "[Set price]",
    image: stone07,
    diamond: { carat: "[X.XX ct]", color: "[D-Z]", clarity: "[FL-I3]", cut: "[Set cut]", shape: "Princess" },
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ls-008",
    name: "Radiant — Intense Fire",
    category: "loose-stones",
    type: "loose-stone",
    price: "[Set price]",
    image: stone08,
    isNew: true,
    diamond: { carat: "[X.XX ct]", color: "[D-Z]", clarity: "[FL-I3]", cut: "[Set cut]", shape: "Radiant" },
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ls-009",
    name: "Asscher — Art Deco Spirit",
    category: "loose-stones",
    type: "loose-stone",
    price: "[Set price]",
    image: stone09,
    diamond: { carat: "[X.XX ct]", color: "[D-Z]", clarity: "[FL-I3]", cut: "[Set cut]", shape: "Asscher" },
    gia: { reportNumber: "[GIA Report #]" },
  },
];

// ====================================================================
// JEWELRY — תכשיטים מוגמרים
// Data integrated from inventory PDF where available.
// ====================================================================

export const jewelryProducts: Product[] = [
  // ─── Rings / טבעות ───────────────────────────────────────────
  {
    id: "ER_005",
    name: "Radiant Halo Engagement Ring",
    barcode: "ER_005",
    category: "rings",
    type: "jewelry",
    price: "$1,500",
    image: jewelry01,
    isNew: true,
    material: "14K White Gold",
    diamond: { carat: "1.29 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Radiant" },
    diamondCount: 45,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
    weight: "[Set weight]",
    editorsNote: "A stunning radiant-cut halo design with 45 accent diamonds for maximum sparkle.",
  },
  {
    id: "ER_007",
    name: "Classic Pavé Engagement Ring",
    barcode: "ER_007",
    category: "rings",
    type: "jewelry",
    price: "$1,350",
    image: jewelry02,
    material: "14K White Gold",
    diamond: { carat: "1.32 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 17,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ER_009",
    name: "Solitaire Round Brilliance",
    barcode: "ER_009",
    category: "rings",
    type: "jewelry",
    price: "$743",
    image: jewelry03,
    isFeatured: true,
    material: "14K White Gold",
    diamond: { carat: "0.70 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ER_010",
    name: "Cathedral Solitaire",
    barcode: "ER_010",
    category: "rings",
    type: "jewelry",
    price: "$826",
    image: jewelry04,
    material: "14K White Gold",
    diamond: { carat: "0.70 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ER_018",
    name: "Elegant Solitaire Band",
    barcode: "ER_018",
    category: "rings",
    type: "jewelry",
    price: "$960",
    image: jewelry05,
    isNew: true,
    material: "14K White Gold",
    diamond: { carat: "0.70 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ER_019",
    name: "Refined Solitaire",
    barcode: "ER_019",
    category: "rings",
    type: "jewelry",
    price: "$990",
    image: jewelry06,
    material: "14K White Gold",
    diamond: { carat: "0.71 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "L3_11_09",
    name: "Rose Gold Open Marquise Ring",
    barcode: "L3_11_09",
    category: "rings",
    type: "jewelry",
    price: "$584",
    image: jewelry07,
    material: "14K Rose Gold",
    diamond: { carat: "0.48 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Marquise" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "L6_11_09",
    name: "Rose Gold Marquise Statement",
    barcode: "L6_11_09",
    category: "rings",
    type: "jewelry",
    price: "$770",
    image: jewelry08,
    material: "14K Rose Gold",
    diamond: { carat: "1.02 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Marquise" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },

  // ─── Earrings / עגילים ───────────────────────────────────────
  {
    id: "L1_11_09",
    name: "Pear & Round Drop Earrings",
    barcode: "L1_11_09",
    category: "earrings",
    type: "jewelry",
    price: "$1,800",
    image: jewelry09,
    isFeatured: true,
    material: "14K White Gold",
    diamond: { carat: "1.74 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Pear + Round" },
    diamondCount: 4,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "C_02_09",
    name: "Rose Marquise Stud Earrings",
    barcode: "C_02_09",
    category: "earrings",
    type: "jewelry",
    price: "$1,110",
    image: jewelry10,
    isNew: true,
    material: "14K Rose Gold",
    diamond: { carat: "0.92 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Marquise" },
    diamondCount: 2,
    weight: "3.42g",
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "D_02_09",
    name: "Rose Gold Pear Drop Earrings",
    barcode: "D_02_09",
    category: "earrings",
    type: "jewelry",
    price: "$630",
    image: jewelry11,
    material: "14K Rose Gold",
    diamond: { carat: "0.60 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Pear" },
    diamondCount: 2,
    weight: "2.42g",
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "E_02_09",
    name: "White Gold Pear Earrings",
    barcode: "E_02_09",
    category: "earrings",
    type: "jewelry",
    price: "$630",
    image: jewelry12,
    material: "14K White Gold",
    diamond: { carat: "0.60 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Pear" },
    diamondCount: 2,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ear-005",
    name: "Diamond Hoop Line",
    category: "earrings",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry13,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ear-006",
    name: "Cluster Blossom Studs",
    category: "earrings",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry14,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ear-007",
    name: "Minimalist Bar Earrings",
    category: "earrings",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry15,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ear-008",
    name: "Art Deco Revival Drops",
    category: "earrings",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry16,
    isNew: true,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },

  // ─── Necklaces / שרשראות ────────────────────────────────────
  {
    id: "NK_003",
    name: "Degradé Diamond Necklace",
    barcode: "NK_003",
    category: "necklaces",
    type: "jewelry",
    price: "$7,500",
    image: jewelry17,
    isFeatured: true,
    material: "14K White Gold",
    diamond: { carat: "6.69 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 55,
    weight: "18.2g",
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
    editorsNote: "A magnificent degradé necklace with 0.5ct center stone and 55 graduating diamonds.",
  },
  {
    id: "SP_08",
    name: "White Gold Solitaire Pendant",
    barcode: "SP_08",
    category: "necklaces",
    type: "jewelry",
    price: "$770",
    image: jewelry18,
    material: "14K White Gold",
    diamond: { carat: "0.70 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "SP_09",
    name: "Marquise Solitaire Pendant",
    barcode: "SP_09",
    category: "necklaces",
    type: "jewelry",
    price: "$1,330",
    image: jewelry19,
    isNew: true,
    material: "14K White Gold",
    diamond: { carat: "1.01 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Marquise" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "SP_12",
    name: "Rose Gold Petite Pendant",
    barcode: "SP_12",
    category: "necklaces",
    type: "jewelry",
    price: "$550",
    image: jewelry20,
    material: "14K Rose Gold",
    diamond: { carat: "0.50 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "SP_13",
    name: "Rose Gold Classic Pendant",
    barcode: "SP_13",
    category: "necklaces",
    type: "jewelry",
    price: "$590",
    image: jewelry21,
    material: "14K Rose Gold",
    diamond: { carat: "0.67 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ML0005",
    name: "Delicate Solitaire Chain",
    barcode: "ML0005",
    category: "necklaces",
    type: "jewelry",
    price: "$380",
    image: jewelry22,
    material: "14K White Gold",
    diamond: { carat: "0.30 ct", color: "G", clarity: "SI2", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ML0006",
    name: "Rose Gold Delicate Pendant",
    barcode: "ML0006",
    category: "necklaces",
    type: "jewelry",
    price: "$390",
    image: jewelry23,
    material: "14K Rose Gold",
    diamond: { carat: "0.31 ct", color: "G", clarity: "SI2", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "ML0008",
    name: "Statement Solitaire Necklace",
    barcode: "ML0008",
    category: "necklaces",
    type: "jewelry",
    price: "$650",
    image: jewelry24,
    material: "14K White Gold",
    diamond: { carat: "0.50 ct", color: "F", clarity: "I1", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },

  // ─── Bracelets & Bangles / צמידים ──────────────────────────
  {
    id: "70003",
    name: "White Gold Diamond Bangle",
    barcode: "70003",
    category: "bracelets",
    type: "jewelry",
    price: "$3,100",
    image: jewelry25,
    isFeatured: true,
    material: "14K White Gold",
    diamond: { carat: "2.53 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 26,
    weight: "13.9g",
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
    editorsNote: "A bold bangle set with 26 brilliant-cut diamonds totaling 2.53 carats.",
  },
  {
    id: "70004",
    name: "Yellow Gold Diamond Bangle",
    barcode: "70004",
    category: "bracelets",
    type: "jewelry",
    price: "$2,700",
    image: jewelry26,
    material: "14K Yellow Gold",
    diamond: { carat: "2.03 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Round Brilliant" },
    diamondCount: 29,
    weight: "11.79g",
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "brc-003",
    name: "Diamond Chain Luxe",
    category: "bracelets",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry27,
    isNew: true,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "brc-004",
    name: "Cuff Statement Bracelet",
    category: "bracelets",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry28,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "brc-005",
    name: "Flex Band Diamond",
    category: "bracelets",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry29,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "brc-006",
    name: "Rivière Diamond Bracelet",
    category: "bracelets",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry30,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "brc-007",
    name: "Bezel Set Tennis Bracelet",
    category: "bracelets",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry31,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "brc-008",
    name: "Double Row Eternity Bracelet",
    category: "bracelets",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry32,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },

  // ─── Additional pieces ─────────────────────────────────────
  {
    id: "L7_11_09",
    name: "White Gold Pear Drop Ring",
    barcode: "L7_11_09",
    category: "rings",
    type: "jewelry",
    price: "$890",
    image: jewelry33,
    material: "14K White Gold",
    diamond: { carat: "1.02 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Pear" },
    diamondCount: 1,
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "A_02_09",
    name: "Rose Marquise Pendant Necklace",
    barcode: "A_02_09",
    category: "necklaces",
    type: "jewelry",
    price: "$690",
    image: jewelry34,
    material: "14K Rose Gold",
    diamond: { carat: "0.50 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Marquise" },
    diamondCount: 1,
    weight: "1.43g",
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "jwl-035",
    name: "Marquise Cascade Earrings",
    category: "earrings",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry35,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "B_02_09",
    name: "Rose Gold Oval Pendant",
    barcode: "B_02_09",
    category: "necklaces",
    type: "jewelry",
    price: "$730",
    image: jewelry36,
    material: "14K Rose Gold",
    diamond: { carat: "0.55 ct", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]", shape: "Oval" },
    diamondCount: 1,
    weight: "1.42g",
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "jwl-037",
    name: "Princess Tennis Bracelet",
    category: "bracelets",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry37,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "jwl-038",
    name: "Pear Drop Pendant Necklace",
    category: "necklaces",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry38,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "jwl-039",
    name: "Cushion Cluster Cocktail Ring",
    category: "rings",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry39,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
  {
    id: "jwl-040",
    name: "Infinity Diamond Band",
    category: "rings",
    type: "jewelry",
    price: "[Set price]",
    image: jewelry40,
    material: "[Set material]",
    diamond: { carat: "[Set carat]", color: "[Set color]", clarity: "[Set clarity]", cut: "[Set cut]" },
    finish: "[Set finish]",
    gia: { reportNumber: "[GIA Report #]" },
  },
];

// ====================================================================
// SHOWCASE — עבודות לדוגמא / פורטפוליו
// ====================================================================

export const showcaseProducts: Product[] = [
  { id: "shw-01", name: "Custom Engagement Ring", category: "rings", type: "showcase", price: "On Request", image: showcase01, description: "[Describe the custom piece]" },
  { id: "shw-02", name: "Bespoke Tennis Bracelet", category: "bracelets", type: "showcase", price: "On Request", image: showcase02, description: "[Describe]" },
  { id: "shw-03", name: "Custom Earring Set", category: "earrings", type: "showcase", price: "On Request", image: showcase03, description: "[Describe]" },
  { id: "shw-04", name: "Signature Pendant Creation", category: "necklaces", type: "showcase", price: "On Request", image: showcase04, description: "[Describe]" },
  { id: "shw-05", name: "Estate Style Ring", category: "rings", type: "showcase", price: "On Request", image: showcase05, description: "[Describe]" },
  { id: "shw-06", name: "Art Deco Bracelet", category: "bracelets", type: "showcase", price: "On Request", image: showcase06, description: "[Describe]" },
  { id: "shw-07", name: "Cascade Earrings", category: "earrings", type: "showcase", price: "On Request", image: showcase07, description: "[Describe]" },
  { id: "shw-08", name: "Layered Necklace Set", category: "necklaces", type: "showcase", price: "On Request", image: showcase08, description: "[Describe]" },
  { id: "shw-09", name: "Cocktail Statement Ring", category: "rings", type: "showcase", price: "On Request", image: showcase09, description: "[Describe]" },
  { id: "shw-10", name: "Diamond Cuff Bracelet", category: "bracelets", type: "showcase", price: "On Request", image: showcase10, description: "[Describe]" },
  { id: "shw-11", name: "Stud Collection", category: "earrings", type: "showcase", price: "On Request", image: showcase11, description: "[Describe]" },
  { id: "shw-12", name: "Y-Chain Diamond Necklace", category: "necklaces", type: "showcase", price: "On Request", image: showcase12, description: "[Describe]" },
  { id: "shw-13", name: "Wrap Around Band", category: "rings", type: "showcase", price: "On Request", image: showcase13, description: "[Describe]" },
  { id: "shw-14", name: "Multi-Stone Creation", category: "necklaces", type: "showcase", price: "On Request", image: showcase14, description: "[Describe]" },
];

// ====================================================================
// VIDEO DATA — סרטוני מוצר
// ====================================================================

export interface ProductVideo {
  id: string;
  title: string;
  url: string;
  description: string;
  relatedProductId?: string;
}

export const productVideos: ProductVideo[] = [
  { id: "vid-01", title: "Diamond Brilliance 360°", url: "/videos/diamond-video-01.mp4", description: "[Describe which product is shown]" },
  { id: "vid-02", title: "Craftsmanship Showcase", url: "/videos/diamond-video-02.mp4", description: "[Describe]" },
  { id: "vid-03", title: "Fire & Scintillation", url: "/videos/diamond-video-03.mp4", description: "[Describe]" },
  { id: "vid-04", title: "Setting Process", url: "/videos/diamond-video-04.mp4", description: "[Describe]" },
  { id: "vid-05", title: "Finished Piece Reveal", url: "/videos/diamond-video-05.mp4", description: "[Describe]" },
];

// ====================================================================
// HELPERS
// ====================================================================

export const allProducts: Product[] = [...looseStones, ...jewelryProducts, ...showcaseProducts];

export const getProductById = (id: string): Product | undefined =>
  allProducts.find((p) => p.id === id);

export const getProductsByCategory = (category: ProductCategory): Product[] =>
  allProducts.filter((p) => p.category === category);

export const getFeaturedProducts = (): Product[] =>
  allProducts.filter((p) => p.isFeatured);

export const getNewProducts = (): Product[] =>
  allProducts.filter((p) => p.isNew);

export const getCarouselProducts = (count = 8): Product[] =>
  allProducts.slice(0, count);
