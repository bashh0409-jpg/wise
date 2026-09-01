import { getMuxPlaybackId } from "@/app/mux";

export type ProjectDetail = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  client: string;
  year: string;
  challenge: string;
  identity: string;
  typography: string;
  visit: string;
  deliverables: string;
  image?: string;
  /** Public Mux playback ID. */
  video?: string;
  alt: string;
};

export const projects: ProjectDetail[] = [
  {
    id: "Melabody",
    title: "Melabody",
    description: "A bold launch system for a next-generation creative tool",
    category: "Fashion & Beauty",
    image: "/images/melabody.avif",
    alt: "Orbit project",
    status: "Ongoing",
    year: "2026",
    challenge:
      "Melabody was launching into a saturated beauty-tech space where every competitor leaned on the same glossy, interchangeable visual cues. The brief was to build a system distinct enough to be recognized in a single frame, without tipping into gimmick.",
    identity:
      "The identity centers on a restrained color logic and a single recurring motif that scales from packaging to app UI, giving the brand a consistent anchor point across every surface it touches.",
    typography:
      "A high-contrast serif carries headlines for editorial weight, paired with a neutral grotesque for interface copy so the product itself never feels overdressed.",
    deliverables: "Strategy, Brand, Experience",
    client: "Melabody Inc",
    visit: "https://melabody.fyi",
  },
  {
    id: "Rhode",
    title: "Rhode",
    description: "A visual identity for a studio making everyday objects",
    category: "Fashion & Beauty",
    video: getMuxPlaybackId("rhode"),
    alt: "Still Life project",
    status: "Ongoing",
    year: "2026",
    challenge:
      "The studio's objects were beautifully made but photographed and marketed like generic catalog items. The task was to give ordinary household pieces a visual language that matched the craft behind them.",
    identity:
      "We built the identity around material honesty — stripped-back photography, tactile textures, and packaging that treats each object as a small design object in its own right.",
    typography:
      "A quiet, humanist sans anchors the wordmark, deliberately understated so the products stay the visual focus rather than the branding.",
    deliverables: "Strategy, Brand, Experience",
    client: "Rhode skin",
    visit: "https://rode.com",
  },
  {
    id: "Beanos_Cafe",
    title: "Beano's Cafe",
    description:
      "Fast growing food product sold in multiple towns acros South Africa",
    category: "Food & Drinks",
    image: "/images/Beano.avif",
    alt: "Luma project",
    status: "Ongoing",
    year: "2026",
    challenge:
      "Beano's had loyal foot traffic but no digital presence to match — no ordering flow, no consistent visual identity across locations, and nothing that translated the in-store warmth online.",
    identity:
      "The system draws from the physical cafe itself: hand-finished textures, warm paper tones, and illustration work that keeps the digital experience feeling as personal as the counter service.",
    typography:
      "A rounded, friendly display face for signage-style headers sits against a clean serif for menu and body copy, echoing printed cafe menus.",
    deliverables: "Strategy, Brand, Experience",
    client: "Beanos",
    visit: "https://beanos.com",
  },

  {
    id: "Redline",
    title: "Redline",
    description:
      "A collaborative identity for a sustainable textile collective",
    category: "Sport & Cycling",
    image: "/markus-spiske-HYUXBWVyh14-unsplash.avif",
    alt: "Common Thread project",
    status: "Coming soon",
    year: "S 2026",
    challenge:
      "As a collective of independent riders and makers, Redline needed a shared identity flexible enough for multiple sub-brands while still reading as one unmistakable system at speed.",
    identity:
      "The mark is built around a single angular cut that can be applied across kit, signage, and race livery, letting individual teams customize color while keeping the core geometry locked.",
    typography:
      "A condensed, technical sans built for legibility at speed carries the wordmark, with a monospace variant reserved for stats and data displays.",
    deliverables: "Strategy, Brand, Experience",
    client: "Redline Inc",
    visit: "https://redline.com",
  },
  {
    id: "Unna",
    title: "Unna",
    description: "A fresh visual language for a coastal food journal",
    category: "Fitness",
    video: getMuxPlaybackId("unna"),
    alt: "Onda project",
    status: "Coming soon",
    year: "S 2027",
    challenge:
      "Unna's early content was strong but scattered across formats with no unifying voice, making it hard for readers to recognize the journal outside of its home platform.",
    identity:
      "The visual system leans on coastal light and negative space, using a muted, sun-bleached palette that ties long-form editorial pieces to shorter social-first content.",
    typography:
      "An airy, low-contrast serif for feature headlines pairs with a compact sans for captions, keeping dense photo-led pages from feeling cluttered.",
    deliverables: "Strategy, Brand, Experience",
    client: "Unna  (Pty)Ltd",
    visit: "https://unna.com",
  },
  {
    id: "Tallow",
    title: "Tallow",
    description: "A warm editorial platform for contemporary African interiors",
    category: "Finance",
    image: "/images/talow.avif",
    alt: "Moya House project",
    status: "Complete",
    year: "2026",
    challenge:
      "Existing coverage of the region's interior design scene skewed either purely commercial or academic, with nothing that treated the work as culturally significant editorial content.",
    identity:
      "The platform's identity borrows structural cues from architectural drawing — grid lines, annotation marks, and a restrained use of color that lets photography carry the emotional weight.",
    typography:
      "A warm slab serif gives headlines a grounded, architectural feel, balanced by a light sans for captions and metadata throughout the layout.",
    deliverables: "Strategy, Brand, Experience",
    client: "Tallow Finance",
    visit: "https://tallow.com",
  },
  {
    id: "Ilia",
    title: "Ilia",
    description: "A digital-first identity for a fast-growing skincare label",
    category: "Beauty",
    image: "/images/ilia.avif",
    alt: "Luma project",
    status: "Complete",
    year: "2026",
    challenge:
      "Rapid growth had outpaced Ilia's original branding, leaving a mismatch between the premium ingredients story and a visual identity that no longer felt credible at scale.",
    identity:
      "The refreshed identity introduces a softened wordmark and a botanical motif used sparingly across packaging, giving the brand room to grow into new product lines without diluting recognition.",
    typography:
      "A refined, low-contrast serif communicates clinical credibility, offset by a rounded sans used for ingredient callouts and how-to content.",
    deliverables: "Strategy, Brand, Experience",
    client: "Ilia Inc",
    visit: "https://ilia.com",
  },
  {
    id: "Vanta",
    title: "Vanta",
    description: "A playful commerce experience for a modern flower studio",
    category: "Finance",
    image: "/K1z8mV8TAFVjZBpOYWvGpV130Kw.avif",
    video: getMuxPlaybackId("vanta"),
    alt: "Aster project",
    status: "Complete",
    year: "2025",
    challenge:
      "Flower delivery is a crowded, largely undifferentiated category online. Vanta needed a shopping experience playful enough to stand out without undercutting the premium price point.",
    identity:
      "The identity leans into oversized, saturated color blocks and hand-drawn iconography, creating a tone that feels closer to a gift shop than a typical e-commerce checkout.",
    typography:
      "A bouncy, characterful display typeface anchors hero moments, paired with a straightforward grotesque for product listings and checkout flow.",
    deliverables: "Strategy, Brand, Experience",
    client: "Vanta Inc",
    visit: "https://vanta.com",
  },
  {
    id: "Just_Do_It",
    title: "Just Do It",
    description: "A global campaign built around movement and possibility",
    category: "Sports",
    image: "/images/jdi.avif",
    alt: "Just Do It project",
    status: "Complete",
    year: "2025",
    challenge:
      "The campaign needed to feel immediate and universal across dozens of markets simultaneously, without losing the emotional specificity that makes individual athlete stories resonate.",
    identity:
      "Visual identity centers on kinetic photography and cropped, off-center compositions that suggest motion mid-frame, reinforced by a consistent, minimal supporting graphic system.",
    typography:
      "A bold, compressed sans carries every headline at maximum impact, deliberately loud enough to hold its own against high-energy photography.",
    deliverables: "Strategy, Brand, Experience",
    client: "Nike",
    visit: "https://nike.com",
  },
  {
    id: "Hearth",
    title: "Hearth",
    description: "A global campaign built around movement and possibility",
    category: "Sports",
    image: "/images/suvI3NLr8X1VCgPDJ5pLgxWxU.avif",
    alt: "Hearth project",
    status: "Complete",
    year: "2025",
    challenge:
      "Hearth's story was rooted in community and slowness, which sat awkwardly against the fast, high-gloss visual language typical of the category it competes in.",
    identity:
      "The identity favors muted, natural tones and documentary-style imagery over staged photography, positioning the brand as grounded rather than aspirational.",
    typography:
      "A gentle serif for headlines evokes warmth and craft, set against a simple monospace used for product specs and technical detail.",
    deliverables: "Strategy, Brand, Experience",
    client: "Hearth",
    visit: "https://hearth.cyi",
  },
  {
    id: "Dua",
    title: "Dua",
    description: "A campaign-led rebrand for a contemporary fashion label",
    category: "Fashion & Beauty",
    image: "/gylain-omer-SEHB67NK4Wg-unsplash.avif",
    video: getMuxPlaybackId("dua"),
    alt: "Cinder project",
    status: "Complete",
    year: "2024",
    challenge:
      "Dua's previous identity read as generically luxury, blending in with a dozen comparable labels. The rebrand needed a sharper point of view without alienating the existing customer base.",
    identity:
      "The new system is built on asymmetry — off-grid layouts, an irregular logo lockup, and a willingness to leave large areas of negative space that feel intentional rather than empty.",
    typography:
      "An elongated, high-fashion serif drives the wordmark and campaign titles, with a tight, neutral sans reserved for all functional copy.",
    deliverables: "Strategy, Brand, Experience",
    client: "Dua",
    visit: "https://dua.com",
  },
  {
    id: "Fur",
    title: "Fur",
    description: "A campaign-led rebrand for a contemporary fashion label",
    category: "Fashion & Beauty",
    image: "/images/fur.avif",
    alt: "Fur project",
    status: "Complete",
    year: "2024",
    challenge:
      "Dua's previous identity read as generically luxury, blending in with a dozen comparable labels. The rebrand needed a sharper point of view without alienating the existing customer base.",
    identity:
      "The new system is built on asymmetry — off-grid layouts, an irregular logo lockup, and a willingness to leave large areas of negative space that feel intentional rather than empty.",
    typography:
      "An elongated, high-fashion serif drives the wordmark and campaign titles, with a tight, neutral sans reserved for all functional copy.",
    deliverables: "Strategy, Brand, Experience",
    client: "Fur",
    visit: "https://fur.com",
  },
  {
    id: "It's Okay",
    title: "It's Okay",
    description: "An atmospheric campaign for a new independent film festival",
    category: "Travel",
    image: "/images/itsokay.avif",
    alt: "Afterglow project",
    status: "Complete",
    year: "2023",
    challenge:
      "As a first-year festival with no existing audience, It's Okay needed a visual identity strong enough to feel established from launch, while remaining flexible for future programming themes.",
    identity:
      "The identity is built around a shifting gradient system tied to festival sections, giving each program strand its own atmosphere within one cohesive visual framework.",
    typography:
      "A cinematic, tightly tracked display type sets the tone for titles and posters, complemented by a clean sans for scheduling and program information.",
    deliverables: "Strategy, Brand, Experience",
    client: "It's Okay",
    visit: "https://itsokay.fyi",
  },
  {
    id: "ccus",
    title: "ccus",
    description: "An atmospheric campaign for a new independent film festival",
    category: "Education",
    video: getMuxPlaybackId("ccus"),
    alt: "Afterglow project",
    status: "Complete",
    year: "2023",
    challenge:
      "As a first-year festival with no existing audience, ccus needed a visual identity strong enough to feel established from launch, while remaining flexible for future programming themes.",
    identity:
      "The identity is built around a shifting gradient system tied to festival sections, giving each program strand its own atmosphere within one cohesive visual framework.",
    typography:
      "A cinematic, tightly tracked display type sets the tone for titles and posters, complemented by a clean sans for scheduling and program information.",
    deliverables: "Strategy, Brand, Experience",
    client: "ccus",
    visit: "https://ccus.fyi",
  },
  {
    id: "echelon",
    title: "Echelon",
    description: "An atmospheric campaign for a new independent film festival",
    category: "Sport",
    image: "/images/echelon.avif",
    alt: "Echelon project",
    status: "Complete",
    year: "2023",
    challenge:
      "Echelon's audience skewed technical and performance-obsessed, so the brand risked feeling cold or purely functional if the identity leaned too far into data and specs.",
    identity:
      "The identity balances precision-driven graphic elements — grids, tick marks, measurement lines — with warmer photography that keeps the human effort visible behind the numbers.",
    typography:
      "A sharp, geometric sans handles all data and labeling, while a slightly heavier weight of the same family carries headlines for consistency across dense and sparse layouts alike.",
    deliverables: "Strategy, Brand, Experience",
    client: "Echelon",
    visit: "https://echelon.fyi",
  },
  {
    id: "Porsce_911",
    title: "Porsce 911",
    description: "Cars are Fun, so Porsche brings class and reliability",
    category: "Sport & Cars",
    image: "/suvI3NLr8X1VCgPDJ5pLgxWxU.avif",
    video: getMuxPlaybackId("porsce911"),
    alt: "Luma project",
    status: "Concept",
    year: "2026",
    challenge:
      "This concept explored how a heritage automotive icon could be presented digitally without leaning on nostalgia alone, giving the vehicle a contemporary, almost industrial-design framing.",
    identity:
      "The visual approach treats the car as a precision object — dramatic close-crop photography, engineering-inspired diagrams, and a near-monochrome palette broken only by the model's signature color.",
    typography:
      "A precise, engineering-style sans is used throughout, referencing technical drawing conventions rather than traditional automotive branding.",
    deliverables: "Strategy, Brand, Experience",
    client: "Porsche",
    visit: "https://porsce.com",
  },
  {
    id: "Nothing_Ear_3",
    title: "Nothing Ear 3",
    description: "A visual identity for a studio making everyday objects",
    category: "Technology",
    video: getMuxPlaybackId("nothingEar3"),
    alt: "Still Life project",
    status: "Concept",
    year: "2025",
    challenge:
      "Consumer audio branding tends to hide its engineering behind polished plastic. The concept explored what it would look like to expose that engineering as the primary visual language.",
    identity:
      "The identity is built around transparency, literal and conceptual — see-through product renders, exposed component diagrams, and packaging that reveals internal structure rather than concealing it.",
    typography:
      "A minimal, dot-matrix inspired display face nods to circuitry and interface readouts, paired with a highly legible sans for all specification copy.",
    deliverables: "Strategy, Brand, Experience",
    client: "Nothing Inc",
    visit: "https://nothing.com",
  },
  {
    id: "Kunye",
    title: "Kunye",
    description: "A visual identity for a studio making everyday objects",
    category: "Entertainment",
    video: getMuxPlaybackId("kunye"),
    alt: "Still Life project",
    status: "Concept",
    year: "2025",
    challenge:
      "The concept needed to translate a specific artist's sound and live performance energy into a static visual system that still felt alive across posters, merch, and digital touchpoints.",
    identity:
      "The system uses repeating waveform-derived patterns as a flexible graphic device, letting the same core shape shift with each release while keeping a consistent visual signature.",
    typography:
      "A distorted, glitch-inflected display type carries titles and release names, contrasted with a plain, highly legible sans for credits and tracklists.",
    deliverables: "Strategy, Brand, Experience",
    client: "Kunye x Shimza",
    visit: "https://kunye.com",
  },
  {
    id: "Honorable",
    title: "Honorable",
    description: "A visual identity for a studio making everyday objects",
    category: "Entertainment",
    video: getMuxPlaybackId("honorable"),
    alt: "Still Life project",
    status: "Concept",
    year: "2025",
    challenge:
      "As a concept for an entertainment brand built on exclusivity, the challenge was projecting prestige digitally without falling into the generic gold-and-black luxury cliché.",
    identity:
      "The identity relies on restraint — a single deep tone, generous whitespace, and a wordmark treated more like a seal or credential than a typical logo.",
    typography:
      "A classic, high-contrast serif is reserved for the wordmark and key titles, while a plain, quiet sans handles everything else to avoid overstatement.",
    deliverables: "Strategy, Brand, Experience",
    client: " Honorable Inc",
    visit: "https://honorable.com",
  },
];

export const getProjectById = (projectId: string | string[] | undefined) => {
  const normalizedId = Array.isArray(projectId) ? projectId[0] : projectId;
  if (!normalizedId) return undefined;

  return projects.find(
    (project) => project.id.toLowerCase() === normalizedId.toLowerCase(),
  );
};
