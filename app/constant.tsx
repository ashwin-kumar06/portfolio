// ─── Typography ───────────────────────────────────────────────────────────────

/**
 * Font configuration. The font object itself must be instantiated in layout.tsx
 * (Next.js requires next/font calls in the same file they're consumed), but all
 * settings live here so there is a single source of truth.
 */
export const FONTS = Object.freeze({
  /** CSS custom-property that exposes the font to Tailwind / raw CSS. */
  variable: "--font-geist",
  /** Fallback stack used if the web font hasn't loaded yet. */
  fallback: ["system-ui", "sans-serif"],
  /** Google-font subsets to include. */
  subsets: ["latin"] as const,
});

// ─── Site Metadata ────────────────────────────────────────────────────────────

export const SITE = Object.freeze({
  tagline: "Designer · Developer · Thinker",
  email: "ashwinkumar.m.official@gmail.com",
  github: "https://github.com/ashwin-kumar06",
  linkedin: "https://linkedin.com/in/ashwin-kumar-7a6a7b23a",
  resumePdf: "/Ashwin_Kumar_resume.pdf",
});

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = Object.freeze([
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Books", href: "/books" },
  { label: "Photo Lab", href: "/photolab" },
  { label: "Substack", href: "/substack" },
] as const);

// ─── About ────────────────────────────────────────────────────────────────────

export const ABOUT = Object.freeze({
  headline: "Hi, I'm Ashwin 👋",
  location: "India 🇮🇳",

  intro:
    "I'm a full-stack engineer who sees technology as a tool for real impact — not just fancy features, but solutions that help people in everyday life.",

  character:
    "Thoughtful, ambitious, and creative. I blend technical problem-solving with artistic expression — whether that's architecting a scalable backend or writing heartfelt poetry.",

  approach:
    "I break challenges into steps, balance logic with creativity, and always look for growth in the process. Persistence is the constant; the method adapts.",

  philosophy:
    "I enjoy exploring big questions rather than accepting easy answers — about existence, choices, and what it means to live with intention. My writing reflects that.",

  creative: {
    summary:
      "Outside of code, I write. I'm working on a book called 'Second Chance Comet' and draw inspiration from raw, authentic storytelling — the kind that prioritises truth over commercial appeal.",
    book: "Second Chance Comet",
    inspiration: "Koozhangal (Tamil, 2021)",
  },

  goals: [
    "Grow as a full-stack engineer and architect",
    "Build products that solve real-world problems",
    "Pursue writing alongside engineering",
  ],

  highlights: [
    { emoji: "🛠️", label: "Builder", detail: "Real-world problem-solving apps" },
    { emoji: "✍️", label: "Writer", detail: "Poetry & fiction — 'Second Chance Comet'" },
    { emoji: "🤝", label: "Empath", detail: "Helping others is core to everything I do" },
    { emoji: "🔍", label: "Thinker", detail: "Philosophy, culture, and the big questions" },
  ],
});

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS = Object.freeze([
  {
    id: 1,
    title: "Mosaic FOH",
    subtitle: "Heartland School Solutions · Client Project @ Relevantz",
    type: "professional" as const,
    description:
      "Enterprise front-of-house school-meals platform. Built 10+ REST APIs and full CRUD functionality for Students, Schools, Meals, and Food Program modules. Optimized 20+ SQL queries to significantly reduce report-generation time for large datasets.",
    tech: ["C#", "ASP.NET MVC", "Entity Framework", "LINQ", "SQL Server"],
    link: "#",
  },
  {
    id: 2,
    title: "Relcom",
    subtitle: "Client Project @ Relevantz",
    type: "professional" as const,
    description:
      "Microservices-based platform with Appointment Booking and User Onboarding services. Owned end-to-end development of assigned microservices integrated with a Next.js + Redux frontend and PostgreSQL database.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA/Hibernate", "Next.js", "Redux", "PostgreSQL"],
    link: "#",
  },
  {
    id: 3,
    title: "AI-Powered Personal Portfolio",
    subtitle: "Personal Project",
    type: "personal" as const,
    description:
      "Full-stack portfolio featuring an AI-powered conversational assistant fine-tuned on personal knowledge via the Cerebras inference platform. Frontend deployed on Vercel, backend APIs on Render.",
    tech: ["React.js", "Python", "Flask", "REST APIs", "Cerebras", "Vercel", "Render"],
    link: "https://github.com/ashwin",
  },
] as const);

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILLS = Object.freeze([
  {
    category: "Languages",
    icon: "🖥️",
    items: ["Java", "C#", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    items: ["React.js", "Next.js", "Redux"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Spring Boot", "ASP.NET MVC", "ASP.NET Core", "Flask", "REST APIs", "Microservices"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["SQL Server", "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: ["Git", "GitHub", "Azure DevOps", "Postman", "VSCode", "Visual Studio", "Axosoft"],
  },
  {
    category: "AI Tools",
    icon: "🤖",
    items: ["GitHub Copilot", "Claude", "Microsoft Copilot", "Gemini"],
  },
  {
    category: "Methodologies",
    icon: "📋",
    items: ["Agile", "Scrum"],
  },
] as const);

// ─── Books ────────────────────────────────────────────────────────────────────

export const BOOKS = Object.freeze([
  { title: "Second Chance Comet", author: "A man's ride through comet", rating: 5 },
  { title: "Rider Kid", author: "A boy's ride through streets", rating: 5 },
  { title: "The Epic", author: "A thing's ride through space", rating: 4 },
] as const);

// ─── Photo Lab ────────────────────────────────────────────────────────────────

export const PHOTOS: readonly string[] = [
  "1.webp","2.jpg","3.webp","4.jpg","5.webp","6.webp","7.jpg","8.webp","9.webp","10.webp",
  "11.jpg","12.jpg","13.webp","14.jpg","15.webp","16.webp","17.jpg","18.webp","19.jpg","20.webp",
  "21.jpg","22.jpg","23.webp","24.webp","25.webp","26.webp","27.jpg","28.jpg","29.webp","30.webp",
  "31.webp","32.webp","33.webp","34.webp","35.webp","36.jpg","37.jpg","38.webp","39.webp","40.webp",
  "41.webp","42.webp","43.webp","44.webp","45.webp","46.webp","47.webp","48.webp","49.webp","50.jpg",
  "51.webp","52.webp","53.webp","54.jpg","55.webp","56.webp","57.webp","58.webp","59.webp","60.jpg",
  "61.webp","62.webp","63.jpg","64.jpg","65.jpg","66.webp","67.webp","68.webp","69.webp","70.jpg",
  "71.jpg","72.webp","73.jpg","74.jpg","75.jpg","76.jpg","77.jpg","78.jpg","79.jpg","80.jpg",
  "81.jpg","82.jpg","83.jpg","84.webp","85.jpg","86.jpg","87.jpg","88.jpg","89.jpg","90.jpg",
  "91.jpg","92.jpg","93.webp","94.jpg","95.webp","96.webp","97.webp","98.jpg","99.jpg","100.jpg",
  "101.jpg","102.webp","103.webp","104.webp","105.webp","106.webp","107.webp","108.jpg","109.jpg","110.webp",
  "111.jpg","112.jpg",
];

// ─── Substack Articles ────────────────────────────────────────────────────────

export const SUBSTACK_ARTICLES = Object.freeze([
  {
    id: 1,
    title: "The Beauty of the Past",
    description: "Lessons from Eternal Sunshine and 96",
    image: "/substack/1.jpg",
    url: "https://chaoticsage.substack.com/p/the-beauty-of-the-past-lessons-from?r=712gfh",
    date: "Aug 2026",
  },
  {
    id: 2,
    title: "The Philosophy of Super Deluxe",
    description: "Language, Identity, and the Alien",
    image: "/substack/2.jpg",
    url: "https://chaoticsage.substack.com/p/the-philosophy-of-super-deluxe-language?r=712gfh",
    date: "Aug 2026",
  },
  {
    id: 3,
    title: "The Ghost of the Cholas",
    description: "Why Masterpieces Often Fail the Box Office",
    image: "/substack/3.jpg",
    url: "https://chaoticsage.substack.com/p/the-ghost-of-the-cholas?r=712gfh",
    date: "Aug 2026",
  },
  {
    id: 4,
    title: "Talk Through Music",
    description: "When Lyrics Started Speaking",
    image: "/substack/4.jpg",
    url: "https://chaoticsage.substack.com/p/talk-through-music?r=712gfh",
    date: "Aug 2026",
  },
  {
    id: 5,
    title: "Anime is just childish cartoon",
    description: "Anime Is Not for Everyone",
    image: "/substack/5.jpg",
    url: "https://chaoticsage.substack.com/p/anime-is-just-childish-cartoon?r=712gfh",
    date: "Sep 2026",
  },
  {
    id: 6,
    title: "Rearranging the Deck Chairs on the Political Stage",
    description: "Why we keep buying front-row tickets to the same recycled political play and expecting a different ending",
    image: "/substack/6.jpg",
    url: "https://chaoticsage.substack.com/p/rearranging-the-deck-chairs-on-the?r=712gfh",
    date: "Sep 2026",
  },
  {
    id: 7,
    title: "The Word We Avoid",
    description: "Silent yet louder",
    image: "/substack/7.jpg",
    url: "https://chaoticsage.substack.com/p/the-word-we-avoid?r=712gfh",
    date: "Oct 2026",
  },
  {
    id: 8,
    title: "Wanna find your purpose?",
    description: "Why our obsession with finding a higher reason for existing might be an unwanted question all along",
    image: "/substack/8.jpg",
    url: "https://chaoticsage.substack.com/p/wanna-find-your-purpose?r=712gfh",
    date: "Oct 2026",
  },
] as const);

// ─── Colors ───────────────────────────────────────────────────────────────────

export const COLORS = Object.freeze({
  burntOrange: "#BB3E00",
  goldenYellow: "#F7AD45",
  sageGreen: "#657C6A",
  lightSage: "#A2B9A7",
});

// Apply these to a parent element to make the palette available in CSS.
export const COLOR_VARIABLES = Object.freeze({
  "--color-burnt-orange": COLORS.burntOrange,
  "--color-golden-yellow": COLORS.goldenYellow,
  "--color-sage-green": COLORS.sageGreen,
  "--color-light-sage": COLORS.lightSage,
});
