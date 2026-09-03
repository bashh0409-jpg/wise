import { getMuxPlaybackId } from "@/app/mux";

export type ProjectMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

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
  /** Additional project media. The existing image and video fields remain the hero media. */
  media: ProjectMedia[];
  /** Additional gallery images shown below the hero. Length drives the grid layout — leave empty/undefined to show hero only. */
  gallery?: string[];
  alt: string;
};

export const projects: ProjectDetail[] = [
  {
    id: "Melabody",
    title: "Melabody",
    description: "A tactile skincare brand built around body confidence",
    category: "Fashion & Beauty",
    image: "/images/melabody.avif",
    media: [
      { type: "image", src: "/images/melabody.avif", alt: "Melabody skincare" },
      {
        type: "image",
        src: "/images/ilia.avif",
        alt: "Skincare product detail",
      },
    ],
    alt: "Orbit project",
    status: "Ongoing",
    year: "2026",
    challenge:
      "Melabody needed to make a new body-care ritual feel personal in a crowded beauty market. The challenge was to balance clinical trust with a sense of pleasure and self-expression.",
    identity:
      "A sculptural M mark and close-cropped body forms give the brand a confident, physical presence. Soft mineral tones and generous layouts make the products feel considered rather than precious.",
    typography:
      "A warm grotesque carries direct, body-positive headlines, paired with a compact sans for ingredients and usage details. The contrast keeps the voice intimate while preserving clarity on pack.",
    deliverables: "Naming, Packaging, Art Direction",
    client: "Melabody Inc",
    visit: "https://melabody.fyi",
  },
  {
    id: "Rhode",
    title: "Rhode",
    description:
      "A soft, sensorial skincare world for an everyday beauty ritual",
    category: "Fashion & Beauty",
    video: getMuxPlaybackId("rhode"),
    media: [
      {
        type: "video",
        src: getMuxPlaybackId("rhode"),
        alt: "Rhode skincare film",
      },
      {
        type: "image",
        src: "/images/melabody.avif",
        alt: "Skincare product detail",
      },
    ],
    alt: "Still Life project",
    status: "Ongoing",
    year: "2026",
    challenge:
      "Rhode had built a strong social following, but its visual language needed to stretch across a growing skincare range without losing its intimate, founder-led character.",
    identity:
      "The system pairs quiet product compositions with close, human details: skin, hands, reflections, and soft surfaces. Packaging stays low-key so the ritual and the product texture do the work.",
    typography:
      "A rounded neo-grotesque gives the brand its friendly, conversational tone, while a narrow utility face organizes formulas, shade names, and routine steps.",
    deliverables: "Campaign, Packaging, Digital Direction",
    client: "Rhode skin",
    visit: "https://rode.com",
  },
  {
    id: "Beanos_Cafe",
    title: "Beano's Cafe",
    description:
      "A warm cafe brand bringing familiar South African comfort food to more towns",
    category: "Food & Drinks",
    image: "/images/Beano.avif",
    media: [
      { type: "image", src: "/images/Beano.avif", alt: "Beano's Cafe" },
      {
        type: "image",
        src: "/images/itsokay.avif",
        alt: "Cafe lifestyle detail",
      },
    ],
    alt: "Luma project",
    status: "Ongoing",
    year: "2026",
    challenge:
      "Beano's was growing beyond its original cafe, but each location felt slightly different. The challenge was to create a recognizable food brand that still felt local, generous, and made for daily visits.",
    identity:
      "A hand-drawn bean character, bold menu colors, and paper-like textures turn the brand into a lively neighborhood signpost. The visual language works on cups, storefronts, menus, and social posts.",
    typography:
      "A chunky display face gives menus and signage an immediate appetite appeal, supported by a readable humanist sans for prices, ingredients, and ordering information.",
    deliverables: "Brand Identity, Packaging, Signage",
    client: "Beanos",
    visit: "https://beanos.com",
  },

  {
    id: "Redline",
    title: "Redline",
    description:
      "A performance cycling identity connecting riders, clubs, and kit",
    category: "Sport & Cycling",
    image: "/markus-spiske-HYUXBWVyh14-unsplash.avif",
    media: [
      {
        type: "image",
        src: "/markus-spiske-HYUXBWVyh14-unsplash.avif",
        alt: "Redline cycling",
      },
      { type: "image", src: "/images/echelon.avif", alt: "Cycling detail" },
    ],
    alt: "Common Thread project",
    status: "Coming soon",
    year: "S 2026",
    challenge:
      "Redline needed to unite independent riders and partner teams under one system without making them look identical. Every element had to remain legible on a moving rider, a small screen, or a race-day banner.",
    identity:
      "A split-line R creates a directional mark that can be repeated as a route, a frame, or a speed stripe. Teams can change color and supporting graphics while the core gesture stays recognizable.",
    typography:
      "A condensed grotesque gives the wordmark and race numbers urgency, with a tabular monospace handling rider data, distances, and performance metrics.",
    deliverables: "Identity, Kit System, Race Graphics",
    client: "Redline Inc",
    visit: "https://redline.com",
  },
  {
    id: "Unna",
    title: "Unna",
    description:
      "A calm training platform for people building sustainable fitness habits",
    category: "Fitness",
    video: getMuxPlaybackId("unna"),
    media: [
      {
        type: "video",
        src: getMuxPlaybackId("unna"),
        alt: "Unna training film",
      },
      { type: "image", src: "/images/echelon.avif", alt: "Training detail" },
    ],
    alt: "Onda project",
    status: "Coming soon",
    year: "S 2027",
    challenge:
      "Unna wanted to make structured training feel less intimidating for people returning to movement. The challenge was to motivate without using the aggressive language common to fitness platforms.",
    identity:
      "The identity uses measured color blocks, generous breathing room, and progress lines that feel like a steady pulse rather than a leaderboard. The same system guides workouts, reminders, and coach content.",
    typography:
      "A sturdy humanist sans makes instructions easy to scan during a workout, while a softer italic cut adds warmth to coaching notes and recovery stories.",
    deliverables: "Product Strategy, UI Direction, Content System",
    client: "Unna  (Pty)Ltd",
    visit: "https://unna.com",
  },
  {
    id: "Tallow",
    title: "Tallow",
    description:
      "A clear financial identity for a modern savings and lending platform",
    category: "Finance",
    image: "/images/talow.avif",
    media: [
      { type: "image", src: "/images/talow.avif", alt: "Tallow finance" },
      {
        type: "image",
        src: "/images/ilia.avif",
        alt: "Financial product detail",
      },
    ],
    alt: "Moya House project",
    status: "Complete",
    year: "2026",
    challenge:
      "Tallow needed to make complex financial products feel understandable to first-time investors without losing credibility with experienced customers. Trust had to be designed into every interaction.",
    identity:
      "The identity is built around a stable horizon line and transparent layers, turning growth, balance, and movement into a visual vocabulary. A disciplined information system keeps the brand calm when the numbers are not.",
    typography:
      "A precise grotesque handles rates, terms, and calls to action, with a humanist companion for guidance and long-form explanations. Hierarchy does the reassuring work.",
    deliverables: "Brand Strategy, Product UI, Campaign Toolkit",
    client: "Tallow Finance",
    visit: "https://tallow.com",
  },
  {
    id: "Ilia",
    title: "Ilia",
    description: "A clean, botanical skincare system for sensitive skin",
    category: "Beauty",
    image: "/images/ilia.avif",
    media: [
      { type: "image", src: "/images/ilia.avif", alt: "Ilia skincare" },
      {
        type: "image",
        src: "/images/melabody.avif",
        alt: "Skincare packaging detail",
      },
    ],
    alt: "Luma project",
    status: "Complete",
    year: "2026",
    challenge:
      "Ilia's natural ingredients story was being lost among louder clean-beauty competitors. The challenge was to communicate efficacy and transparency without making the brand feel medicinal.",
    identity:
      "A simplified botanical line drawing becomes a quiet proof point across packaging and digital touchpoints. White space, ingredient-led imagery, and restrained color let the formulas feel precise and approachable.",
    typography:
      "A refined serif gives product names a natural, editorial quality, paired with a clear grotesque for claims, ingredients, and routine guidance.",
    deliverables: "Packaging, Art Direction, Retail System",
    client: "Ilia Inc",
    visit: "https://ilia.com",
  },
  {
    id: "Vanta",
    title: "Vanta",
    description:
      "A bright digital banking experience for independent businesses",
    category: "Finance",
    image: "/K1z8mV8TAFVjZBpOYWvGpV130Kw.avif",
    video: getMuxPlaybackId("vanta"),
    media: [
      {
        type: "video",
        src: getMuxPlaybackId("vanta"),
        alt: "Vanta banking film",
      },
      {
        type: "image",
        src: "/K1z8mV8TAFVjZBpOYWvGpV130Kw.avif",
        alt: "Vanta product detail",
      },
    ],
    alt: "Aster project",
    status: "Complete",
    year: "2025",
    challenge:
      "Vanta was built for small businesses juggling payments, payroll, and growth. The challenge was to make financial tools feel energetic and accessible without hiding important information.",
    identity:
      "An open V shape and modular color fields create a flexible system that feels optimistic but organized. Friendly illustrations explain complex moments, while sharp data views keep the product useful.",
    typography:
      "A confident geometric sans gives dashboards and figures a crisp rhythm, with a rounded display cut reserved for onboarding, campaigns, and moments of encouragement.",
    deliverables: "Brand Identity, Product Design, Launch Campaign",
    client: "Vanta Inc",
    visit: "https://vanta.com",
  },
  {
    id: "Just_Do_It",
    title: "Just Do It",
    description:
      "A global sports campaign turning everyday effort into momentum",
    category: "Sports",
    image: "/images/jdi.avif",
    media: [
      { type: "image", src: "/images/jdi.avif", alt: "Just Do It campaign" },
      {
        type: "image",
        src: "/markus-spiske-HYUXBWVyh14-unsplash.avif",
        alt: "Athlete detail",
      },
    ],
    alt: "Just Do It project",
    status: "Complete",
    year: "2025",
    challenge:
      "The campaign had to speak to elite athletes and first-time runners at the same time. The challenge was to make progress feel visible without reducing sport to a single winning moment.",
    identity:
      "A rising slash cuts through photography, copy, and film as a shared signal of forward motion. Athlete-led stories keep the system human, while the graphic device gives every market a common pulse.",
    typography:
      "A heavy condensed sans makes short statements land at speed, with an italic companion that adds movement to route information, captions, and athlete stats.",
    deliverables: "Campaign Strategy, Film Direction, Social Toolkit",
    client: "Nike",
    visit: "https://nike.com",
  },
  {
    id: "Hearth",
    title: "Hearth",
    description:
      "A grounded hospitality brand built around shared meals and slow living",
    category: "Food & Drinks",
    image: "/images/suvI3NLr8X1VCgPDJ5pLgxWxU.avif",
    media: [
      {
        type: "image",
        src: "/images/suvI3NLr8X1VCgPDJ5pLgxWxU.avif",
        alt: "Hearth hospitality",
      },
      { type: "image", src: "/images/Beano.avif", alt: "Shared meal detail" },
    ],
    alt: "Hearth project",
    status: "Complete",
    year: "2025",
    challenge:
      "Hearth had a strong local following but its new spaces needed to feel connected. The challenge was to express warmth and craft without turning the brand into a nostalgic restaurant cliche.",
    identity:
      "A simple hearth-shaped frame appears across menus, wayfinding, and social content, giving different locations a shared sense of place. Documentary photography keeps the people and making process visible.",
    typography:
      "A sturdy old-style serif brings the voice of a printed menu, paired with a practical sans for reservations, menus, and service information.",
    deliverables: "Brand Identity, Interior Graphics, Menu System",
    client: "Hearth",
    visit: "https://hearth.cyi",
  },
  {
    id: "Dua",
    title: "Dua",
    description:
      "A precise fashion identity for a label built on considered essentials",
    category: "Fashion & Beauty",
    image: "/gylain-omer-SEHB67NK4Wg-unsplash.avif",
    video: getMuxPlaybackId("dua"),
    media: [
      { type: "video", src: getMuxPlaybackId("dua"), alt: "Dua fashion film" },
      { type: "image", src: "/images/fur.avif", alt: "Fashion detail" },
    ],
    alt: "Cinder project",
    status: "Complete",
    year: "2024",
    challenge:
      "Dua's collection was intentionally quiet, but the brand looked too anonymous beside louder fashion labels. The rebrand needed to make restraint feel like a point of view.",
    identity:
      "The identity uses a sliced wordmark and off-register layouts to give minimal garments a subtle tension. Cropped product views and spare compositions make construction and material the story.",
    typography:
      "A high-contrast editorial serif gives campaigns a composed fashion voice, balanced by a neutral grotesque for fit notes, product details, and commerce.",
    deliverables: "Rebrand, Campaign Direction, E-commerce Design",
    client: "Dua",
    visit: "https://dua.com",
  },
  {
    id: "Fur",
    title: "Fur",
    description:
      "A tactile personal-care label with an unapologetically playful voice",
    category: "Fashion & Beauty",
    image: "/images/fur.avif",
    media: [
      { type: "image", src: "/images/fur.avif", alt: "Fur personal care" },
      { type: "image", src: "/images/ilia.avif", alt: "Product detail" },
    ],
    alt: "Fur project",
    status: "Complete",
    year: "2024",
    challenge:
      "Fur's products were intimate and effective, but the brand language was too polite to stand out in personal care. The challenge was to be memorable and sensorial without losing trust.",
    identity:
      "A fuzzy-edged wordmark and tactile crop system make softness feel graphic rather than decorative. Saturated accents break through a clean base, giving each product its own personality within the range.",
    typography:
      "A rounded display face gives the brand its mischievous voice, paired with a highly legible sans for directions, ingredients, and product claims.",
    deliverables: "Packaging, Campaigns, Retail Display",
    client: "Fur",
    visit: "https://fur.com",
  },
  {
    id: "Its_Okay",
    title: "It's Okay",
    description:
      "A travel journal documenting places through food, people, and detours",
    category: "Travel",
    image: "/images/itsokay.avif",
    media: [
      {
        type: "image",
        src: "/images/itsokay.avif",
        alt: "It's Okay travel journal",
      },
      { type: "image", src: "/images/Beano.avif", alt: "Travel food detail" },
    ],
    alt: "Afterglow project",
    status: "Complete",
    year: "2023",
    challenge:
      "It's Okay wanted to move beyond polished destination guides and show the uncertainty that makes travel memorable. The challenge was to create a journal that felt personal without becoming a private diary.",
    identity:
      "A passport-stamp motif gives each place a distinct mark, while loose image crops and handwritten notes preserve the feeling of a page made on the road. The system is curious, imperfect, and easy to extend.",
    typography:
      "A narrow editorial serif gives stories a sense of place, while a friendly sans handles practical details such as routes, dates, and recommendations.",
    deliverables: "Editorial Identity, Art Direction, Digital Journal",
    client: "It's Okay",
    visit: "https://itsokay.fyi",
  },
  {
    id: "ccus",
    title: "ccus",
    description:
      "An accessible learning platform for creative and cultural studies",
    category: "Education",
    video: getMuxPlaybackId("ccus"),
    media: [
      {
        type: "video",
        src: getMuxPlaybackId("ccus"),
        alt: "ccus education film",
      },
      {
        type: "image",
        src: "/images/talow.avif",
        alt: "Course material detail",
      },
    ],
    alt: "Afterglow project",
    status: "Complete",
    year: "2023",
    challenge:
      "ccus had rich teaching material but an online experience that made it difficult for new learners to find a starting point. The challenge was to make serious study feel open, navigable, and alive.",
    identity:
      "The identity treats quotation marks and marginal notes as active graphic elements, connecting lectures, reading lists, and student work. A modular grid lets each course form its own chapter inside the platform.",
    typography:
      "A scholarly serif gives course titles and essays a sense of authority, paired with a clear UI sans for navigation, transcripts, and lesson progress.",
    deliverables: "Platform Identity, UX Direction, Course Templates",
    client: "ccus",
    visit: "https://ccus.fyi",
  },
  {
    id: "echelon",
    title: "Echelon",
    description: "A data-led cycling brand for riders who train with intention",
    category: "Sport",
    image: "/images/echelon.avif",
    media: [
      { type: "image", src: "/images/echelon.avif", alt: "Echelon cycling" },
      {
        type: "image",
        src: "/markus-spiske-HYUXBWVyh14-unsplash.avif",
        alt: "Cycling performance detail",
      },
    ],
    alt: "Echelon project",
    status: "Complete",
    year: "2023",
    challenge:
      "Echelon's tools were powerful but intimidating to riders who were still learning how to read their own performance. The challenge was to make precision feel motivating, not punishing.",
    identity:
      "Concentric route lines and elevation marks turn training data into a recognizable visual language. Close-up images of effort and terrain soften the technical system and keep the rider at its center.",
    typography:
      "A technical grotesque makes metrics and labels precise, while a wider bold cut gives training stories and product launches a more physical, energetic voice.",
    deliverables: "Brand System, Data Visualisation, Product Launch",
    client: "Echelon",
    visit: "https://echelon.fyi",
  },
  {
    id: "Porsce_911",
    title: "Porsce 911",
    description: "A digital showroom for the engineering drama of the 911",
    category: "Sport & Cars",
    image: "/suvI3NLr8X1VCgPDJ5pLgxWxU.avif",
    video: getMuxPlaybackId("porsce911"),
    media: [
      {
        type: "video",
        src: getMuxPlaybackId("porsce911"),
        alt: "Porsche 911 film",
      },
      {
        type: "image",
        src: "/suvI3NLr8X1VCgPDJ5pLgxWxU.avif",
        alt: "Automotive detail",
      },
    ],
    alt: "Luma project",
    status: "Concept",
    year: "2026",
    challenge:
      "The 911 has decades of visual history, but a digital launch can easily become a gallery of predictable beauty shots. The challenge was to make engineering, handling, and heritage feel immediate on screen.",
    identity:
      "A continuous road line guides the experience from performance data to detail views, shifting between a technical drawing and a driving route. Deep red accents give the precision system a pulse.",
    typography:
      "A disciplined grotesque handles specifications and controls, while an italic display cut adds speed to model names and launch statements.",
    deliverables: "Digital Showroom, Art Direction, Motion System",
    client: "Porsche",
    visit: "https://porsce.com",
  },
  {
    id: "Nothing_Ear_3",
    title: "Nothing Ear 3",
    description:
      "A transparent product story for next-generation wireless audio",
    category: "Technology",
    video: getMuxPlaybackId("nothingEar3"),
    media: [
      {
        type: "video",
        src: getMuxPlaybackId("nothingEar3"),
        alt: "Nothing Ear 3 product film",
      },
      {
        type: "image",
        src: "/K1z8mV8TAFVjZBpOYWvGpV130Kw.avif",
        alt: "Audio product detail",
      },
    ],
    alt: "Still Life project",
    status: "Concept",
    year: "2025",
    challenge:
      "Nothing Ear 3 had a distinctive product but needed to explain its technical advantage without burying people in specifications. The challenge was to make the invisible parts of listening tangible.",
    identity:
      "Transparent layers, component callouts, and signal paths turn the earbud's internal architecture into the identity. A limited red and clear palette keeps the system unmistakably technical and unmistakably Nothing.",
    typography:
      "A squared display face echoes device readouts for headlines and feature names, paired with a neutral sans that keeps setup steps and specifications effortless to scan.",
    deliverables: "Product Story, Packaging, Launch Film",
    client: "Nothing Inc",
    visit: "https://nothing.com",
  },
  {
    id: "Kunye",
    title: "Kunye",
    description:
      "A live music platform built around sound, movement, and community",
    category: "Entertainment",
    video: getMuxPlaybackId("kunye"),
    media: [
      {
        type: "video",
        src: getMuxPlaybackId("kunye"),
        alt: "Kunye live music film",
      },
      { type: "image", src: "/images/itsokay.avif", alt: "Live event detail" },
    ],
    alt: "Still Life project",
    status: "Concept",
    year: "2025",
    challenge:
      "Kunye needed an identity that could hold the energy of a live set while working across artists, releases, and venues. It had to feel rooted in South African dance culture without becoming visually fixed.",
    identity:
      "A looping waveform becomes a flexible stage for artist names, event posters, and motion graphics. Its scale and density change with the music, creating a system that is recognizable but never static.",
    typography:
      "A wide display face carries the force of the headline, while a compact sans keeps lineups, dates, and credits clear in the heat of a crowded poster.",
    deliverables: "Event Identity, Motion Graphics, Artist Toolkit",
    client: "Kunye x Shimza",
    visit: "https://kunye.com",
  },
  {
    id: "Honorable",
    title: "Honorable",
    description: "A private members club for culture, conversation, and access",
    category: "Entertainment",
    video: getMuxPlaybackId("honorable"),
    media: [
      {
        type: "video",
        src: getMuxPlaybackId("honorable"),
        alt: "Honorable members club film",
      },
      { type: "image", src: "/images/talow.avif", alt: "Members club detail" },
    ],
    alt: "Still Life project",
    status: "Concept",
    year: "2025",
    challenge:
      "Honorable needed to signal selectivity without making membership feel cold or performative. The experience had to protect privacy while still creating a sense of anticipation and belonging.",
    identity:
      "A stamped H monogram works like a discreet credential across invitations, events, and the members portal. Dark ink, warm paper, and generous space make the brand feel considered rather than ostentatious.",
    typography:
      "A stately serif gives the club its editorial authority, paired with a restrained sans for schedules, access details, and private member communications.",
    deliverables: "Naming, Membership Experience, Editorial System",
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
