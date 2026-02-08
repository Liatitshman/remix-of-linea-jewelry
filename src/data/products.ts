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
  carat: string;        // e.g. "1.02 ct" — [החלף בקראט אמיתי]
  color: string;        // e.g. "D" — [החלף בצבע אמיתי]
  clarity: string;      // e.g. "VS1" — [החלף בניקיון אמיתי]
  cut: string;          // e.g. "Excellent" — [החלף בחיתוך אמיתי]
  shape?: string;       // e.g. "Round Brilliant" — [החלף בצורה]
  fluorescence?: string; // e.g. "None" — [החלף בפלואורסנציה]
}

export interface GIACertificate {
  reportNumber: string; // e.g. "2195837461" — [החלף במספר תעודה אמיתי]
  reportUrl?: string;   // Link to GIA report — [הוסף קישור לתעודה]
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  type: ProductType;
  price: string;          // "₪XX,XXX" or "[לבקשה]" — [עדכן מחיר אמיתי]
  image: string;
  additionalImages?: string[];
  videoUrl?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  material?: string;      // e.g. "18K White Gold" — [החלף בחומר]
  diamond?: DiamondDetails;
  gia?: GIACertificate;
  dimensions?: string;    // e.g. "2.5cm x 1.2cm" — [החלף במידות]
  weight?: string;        // e.g. "4.2g" — [החלף במשקל]
  editorsNote?: string;   // תיאור עריכה — [החלף בהערת עורך]
  description?: string;   // תיאור מוצר — [החלף בתיאור]
}

// ====================================================================
// LOOSE STONES — אבנים למכירה
// [החלף את כל הפרטים בסוגריים מרובעים במידע אמיתי מתעודות GIA]
// ====================================================================

export const looseStones: Product[] = [
  {
    id: "ls-001",
    name: "Round Brilliant — Exceptional White",
    category: "loose-stones",
    type: "loose-stone",
    price: "[החלף: ₪XX,XXX]",
    image: stone01,
    isNew: true,
    diamond: {
      carat: "[החלף: X.XX ct]",
      color: "[החלף: D-Z]",
      clarity: "[החלף: FL-I3]",
      cut: "[החלף: Excellent/Very Good/Good]",
      shape: "[החלף: Round/Princess/Oval...]",
      fluorescence: "[החלף: None/Faint/Medium...]",
    },
    gia: { reportNumber: "[החלף: מספר תעודת GIA]" },
    description: "[החלף: תיאור האבן — מקור, ייחודיות, איכות]",
  },
  {
    id: "ls-002",
    name: "Cushion Cut — Fine Quality",
    category: "loose-stones",
    type: "loose-stone",
    price: "[החלף: ₪XX,XXX]",
    image: stone02,
    diamond: {
      carat: "[החלף: X.XX ct]",
      color: "[החלף: D-Z]",
      clarity: "[החלף: FL-I3]",
      cut: "[החלף: Excellent/Very Good/Good]",
      shape: "[החלף: Cushion]",
    },
    gia: { reportNumber: "[החלף: מספר תעודת GIA]" },
  },
  {
    id: "ls-003",
    name: "Pear Shaped — Vivid Brilliance",
    category: "loose-stones",
    type: "loose-stone",
    price: "[החלף: ₪XX,XXX]",
    image: stone03,
    diamond: {
      carat: "[החלף: X.XX ct]",
      color: "[החלף: D-Z]",
      clarity: "[החלף: FL-I3]",
      cut: "[החלף]",
      shape: "[החלף: Pear]",
    },
    gia: { reportNumber: "[החלף: מספר תעודת GIA]" },
  },
  {
    id: "ls-004",
    name: "Emerald Cut — Crystal Clear",
    category: "loose-stones",
    type: "loose-stone",
    price: "[החלף: ₪XX,XXX]",
    image: stone04,
    isNew: true,
    diamond: {
      carat: "[החלף: X.XX ct]",
      color: "[החלף: D-Z]",
      clarity: "[החלף: FL-I3]",
      cut: "[החלף]",
      shape: "[החלף: Emerald]",
    },
    gia: { reportNumber: "[החלף: מספר תעודת GIA]" },
  },
  {
    id: "ls-005",
    name: "Oval — Premium Select",
    category: "loose-stones",
    type: "loose-stone",
    price: "[החלף: ₪XX,XXX]",
    image: stone05,
    diamond: {
      carat: "[החלף: X.XX ct]",
      color: "[החלף: D-Z]",
      clarity: "[החלף: FL-I3]",
      cut: "[החלף]",
      shape: "[החלף: Oval]",
    },
    gia: { reportNumber: "[החלף: מספר תעודת GIA]" },
  },
  {
    id: "ls-006",
    name: "Marquise — Elegant Flame",
    category: "loose-stones",
    type: "loose-stone",
    price: "[החלף: ₪XX,XXX]",
    image: stone06,
    diamond: {
      carat: "[החלף: X.XX ct]",
      color: "[החלף: D-Z]",
      clarity: "[החלף: FL-I3]",
      cut: "[החלף]",
      shape: "[החלף: Marquise]",
    },
    gia: { reportNumber: "[החלף: מספר תעודת GIA]" },
  },
  {
    id: "ls-007",
    name: "Princess Cut — Modern Classic",
    category: "loose-stones",
    type: "loose-stone",
    price: "[החלף: ₪XX,XXX]",
    image: stone07,
    diamond: {
      carat: "[החלף: X.XX ct]",
      color: "[החלף: D-Z]",
      clarity: "[החלף: FL-I3]",
      cut: "[החלף]",
      shape: "[החלף: Princess]",
    },
    gia: { reportNumber: "[החלף: מספר תעודת GIA]" },
  },
  {
    id: "ls-008",
    name: "Radiant — Intense Fire",
    category: "loose-stones",
    type: "loose-stone",
    price: "[החלף: ₪XX,XXX]",
    image: stone08,
    isNew: true,
    diamond: {
      carat: "[החלף: X.XX ct]",
      color: "[החלף: D-Z]",
      clarity: "[החלף: FL-I3]",
      cut: "[החלף]",
      shape: "[החלף: Radiant]",
    },
    gia: { reportNumber: "[החלף: מספר תעודת GIA]" },
  },
  {
    id: "ls-009",
    name: "Asscher — Art Deco Spirit",
    category: "loose-stones",
    type: "loose-stone",
    price: "[החלף: ₪XX,XXX]",
    image: stone09,
    diamond: {
      carat: "[החלף: X.XX ct]",
      color: "[החלף: D-Z]",
      clarity: "[החלף: FL-I3]",
      cut: "[החלף]",
      shape: "[החלף: Asscher]",
    },
    gia: { reportNumber: "[החלף: מספר תעודת GIA]" },
  },
];

// ====================================================================
// JEWELRY — תכשיטים מוגמרים
// [החלף את כל הפרטים בסוגריים מרובעים במידע אמיתי]
// ====================================================================

export const jewelryProducts: Product[] = [
  // --- Rings / טבעות ---
  {
    id: "rng-001",
    name: "Solaris Solitaire",
    category: "rings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry01,
    isNew: true,
    material: "[החלף: 14K/18K White/Yellow/Rose Gold]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף: מספר תעודת GIA]" },
    dimensions: "[החלף: מידות]",
    weight: "[החלף: משקל]",
    editorsNote: "[החלף: הערת עורך — תיאור ייחודיות הפריט]",
  },
  {
    id: "rng-002",
    name: "Eternity Pavé Band",
    category: "rings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry02,
    material: "[החלף: סוג מתכת]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "rng-003",
    name: "Halo Crown",
    category: "rings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry03,
    isFeatured: true,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "rng-004",
    name: "Three Stone Legacy",
    category: "rings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry04,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "rng-005",
    name: "Cathedral Setting",
    category: "rings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry05,
    isNew: true,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "rng-006",
    name: "Tiffany Inspired",
    category: "rings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry06,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "rng-007",
    name: "Split Shank Radiance",
    category: "rings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry07,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "rng-008",
    name: "Vintage Filigree",
    category: "rings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry08,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },

  // --- Earrings / עגילים ---
  {
    id: "ear-001",
    name: "Pantheon Drops",
    category: "earrings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry09,
    isFeatured: true,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
    weight: "[החלף: X.Xg לעגיל]",
  },
  {
    id: "ear-002",
    name: "Diamond Studs Classic",
    category: "earrings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry10,
    isNew: true,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "ear-003",
    name: "Chandelier Luxe",
    category: "earrings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry11,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "ear-004",
    name: "Teardrop Elegance",
    category: "earrings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry12,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "ear-005",
    name: "Hoop Diamond Line",
    category: "earrings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry13,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "ear-006",
    name: "Cluster Blossom",
    category: "earrings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry14,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "ear-007",
    name: "Bar Minimalist",
    category: "earrings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry15,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "ear-008",
    name: "Art Deco Revival",
    category: "earrings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry16,
    isNew: true,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },

  // --- Necklaces / שרשראות ---
  {
    id: "nkl-001",
    name: "Solitaire Pendant",
    category: "necklaces",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry17,
    isFeatured: true,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "nkl-002",
    name: "Rivière Necklace",
    category: "necklaces",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry18,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "nkl-003",
    name: "Floating Diamond",
    category: "necklaces",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry19,
    isNew: true,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "nkl-004",
    name: "Layered Station",
    category: "necklaces",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry20,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "nkl-005",
    name: "Heart Pendant Deluxe",
    category: "necklaces",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry21,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "nkl-006",
    name: "Choker Diamond Line",
    category: "necklaces",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry22,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "nkl-007",
    name: "Cascade Lariat",
    category: "necklaces",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry23,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "nkl-008",
    name: "Halo Pendant",
    category: "necklaces",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry24,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },

  // --- Bracelets / צמידים ---
  {
    id: "brc-001",
    name: "Tennis Classic",
    category: "bracelets",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry25,
    isFeatured: true,
    material: "[החלף]",
    diamond: { carat: "[החלף: total ct]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "brc-002",
    name: "Bangle Diamond Row",
    category: "bracelets",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry26,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "brc-003",
    name: "Chain Link Luxe",
    category: "bracelets",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry27,
    isNew: true,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "brc-004",
    name: "Cuff Statement",
    category: "bracelets",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry28,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "brc-005",
    name: "Flex Band Diamond",
    category: "bracelets",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry29,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "brc-006",
    name: "Rivière Bracelet",
    category: "bracelets",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry30,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "brc-007",
    name: "Bezel Set Tennis",
    category: "bracelets",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry31,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "brc-008",
    name: "Double Row Eternity",
    category: "bracelets",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry32,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },

  // --- Additional Jewelry (mixed categories) ---
  {
    id: "jwl-033",
    name: "Vintage Cluster Ring",
    category: "rings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry33,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "jwl-034",
    name: "Emerald Cut Solitaire",
    category: "rings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry34,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "jwl-035",
    name: "Marquise Drop Earrings",
    category: "earrings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry35,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "jwl-036",
    name: "Oval Halo Necklace",
    category: "necklaces",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry36,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "jwl-037",
    name: "Princess Tennis Bracelet",
    category: "bracelets",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry37,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "jwl-038",
    name: "Pear Drop Pendant",
    category: "necklaces",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry38,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "jwl-039",
    name: "Cushion Cluster Ring",
    category: "rings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry39,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
  {
    id: "jwl-040",
    name: "Infinity Band",
    category: "rings",
    type: "jewelry",
    price: "[החלף: ₪XX,XXX]",
    image: jewelry40,
    material: "[החלף]",
    diamond: { carat: "[החלף]", color: "[החלף]", clarity: "[החלף]", cut: "[החלף]" },
    gia: { reportNumber: "[החלף]" },
  },
];

// ====================================================================
// SHOWCASE — עבודות לדוגמא / פורטפוליו
// ====================================================================

export const showcaseProducts: Product[] = [
  { id: "shw-01", name: "Custom Engagement Ring", category: "rings", type: "showcase", price: "לבקשה", image: showcase01, description: "[החלף: תיאור העבודה המותאמת אישית]" },
  { id: "shw-02", name: "Bespoke Tennis Bracelet", category: "bracelets", type: "showcase", price: "לבקשה", image: showcase02, description: "[החלף]" },
  { id: "shw-03", name: "Custom Earring Set", category: "earrings", type: "showcase", price: "לבקשה", image: showcase03, description: "[החלף]" },
  { id: "shw-04", name: "Signature Pendant", category: "necklaces", type: "showcase", price: "לבקשה", image: showcase04, description: "[החלף]" },
  { id: "shw-05", name: "Estate Style Ring", category: "rings", type: "showcase", price: "לבקשה", image: showcase05, description: "[החלף]" },
  { id: "shw-06", name: "Art Deco Bracelet", category: "bracelets", type: "showcase", price: "לבקשה", image: showcase06, description: "[החלף]" },
  { id: "shw-07", name: "Cascade Earrings", category: "earrings", type: "showcase", price: "לבקשה", image: showcase07, description: "[החלף]" },
  { id: "shw-08", name: "Layered Necklace Set", category: "necklaces", type: "showcase", price: "לבקשה", image: showcase08, description: "[החלף]" },
  { id: "shw-09", name: "Cocktail Ring", category: "rings", type: "showcase", price: "לבקשה", image: showcase09, description: "[החלף]" },
  { id: "shw-10", name: "Diamond Cuff", category: "bracelets", type: "showcase", price: "לבקשה", image: showcase10, description: "[החלף]" },
  { id: "shw-11", name: "Stud Collection", category: "earrings", type: "showcase", price: "לבקשה", image: showcase11, description: "[החלף]" },
  { id: "shw-12", name: "Y-Chain Diamond", category: "necklaces", type: "showcase", price: "לבקשה", image: showcase12, description: "[החלף]" },
  { id: "shw-13", name: "Wrap Around Band", category: "rings", type: "showcase", price: "לבקשה", image: showcase13, description: "[החלף]" },
  { id: "shw-14", name: "Multi-Stone Creation", category: "necklaces", type: "showcase", price: "לבקשה", image: showcase14, description: "[החלף]" },
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
  { id: "vid-01", title: "Diamond Brilliance 360°", url: "/videos/diamond-video-01.mp4", description: "[החלף: תיאור הסרטון — איזה מוצר מוצג]" },
  { id: "vid-02", title: "Craftsmanship Showcase", url: "/videos/diamond-video-02.mp4", description: "[החלף]" },
  { id: "vid-03", title: "Fire & Scintillation", url: "/videos/diamond-video-03.mp4", description: "[החלף]" },
  { id: "vid-04", title: "Setting Process", url: "/videos/diamond-video-04.mp4", description: "[החלף]" },
  { id: "vid-05", title: "Finished Piece Reveal", url: "/videos/diamond-video-05.mp4", description: "[החלף]" },
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

/** Returns first N products suitable for a carousel */
export const getCarouselProducts = (count = 8): Product[] =>
  allProducts.slice(0, count);
