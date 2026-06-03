export type LinkItem = {
  label: string;
  href: string;
};

export type DocumentCard = {
  eyebrow: string;
  title: string;
  description: string;
  files: LinkItem[];
};

export type FeaturedProject = {
  name: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
  accent: "moss" | "clay" | "ink" | "sand";
};

const toAssetPath = (fileName: string) => `/${encodeURI(fileName)}`;

export const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Focus", href: "#focus" },
  { label: "Projects", href: "#projects" },
  { label: "Documents", href: "#documents" },
  { label: "Principles", href: "#principles" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { label: "Current CV update", value: "05/2026" },
  { label: "Language coverage", value: "DE / EN" },
  { label: "Core stack", value: "React + TS + Tailwind" },
];

export const focusAreas = [
  {
    title: "React interfaces",
    description:
      "Component-driven layouts with a clear hierarchy, reusable sections, and polished interaction states.",
  },
  {
    title: "TypeScript discipline",
    description:
      "Typed data models and predictable props keep the project maintainable as the page grows.",
  },
  {
    title: "Tailwind execution",
    description:
      "Fast visual iteration with consistent spacing, disciplined color use, and a professional finish.",
  },
];

export const documentCards: DocumentCard[] = [
  {
    eyebrow: "CV package",
    title: "Bilingual application material",
    description: "German and English CVs",
    files: [
      { label: "CV DE", href: toAssetPath("CV_Michael_Flaig_DE.pdf") },
      { label: "CV EN", href: toAssetPath("CV_Michael_Flaig_EN.pdf") },
    ],
  },
  {
    eyebrow: "Technical training",
    title: "Advanced React certificate",
    description:
      "A documented React deep dive that reinforces the frontend specialization behind this portfolio.",
    files: [
      {
        label: "Open certificate",
        href: "https://drive.google.com/file/d/1z970-huQ8NXyVemjXJiDmpla-6Xiv9YE/view?usp=drive_link",
      },
    ],
  },
  {
    eyebrow: "References",
    title: "Completion and recommendation records",
    description:
      "Formal documents that add third-party validation to the profile and support credibility.",
    files: [
      {
        label: "Internship completion",
        href: toAssetPath("Internship Completion - Michael Flaig.pdf"),
      },
      {
        label: "Recommendation letter",
        href: toAssetPath("Letter of Recommendation - Michael Flaig.pdf"),
      },
    ],
  },
  {
    eyebrow: "Academic records",
    title: "Certificates and supporting proof",
    description:
      "Academic documentation that rounds out the portfolio and gives the CV package more depth.",
    files: [
      {
        label: "Final certificate",
        href: toAssetPath("Abschlusszeugnis_Michael_Flaig.pdf"),
      },
      { label: "Zeugnis / SOP", href: toAssetPath("Zeugnis_Flaig_SOP.pdf") },
      { label: "CoC DE", href: toAssetPath("Michael Flaig CoC (DE).pdf") },
      { label: "CoC EN", href: toAssetPath("Michael Flaig CoC (EN).pdf") },
    ],
  },
];

export const principles = [
  {
    title: "Structure before decoration",
    description:
      "Every section has a job: introduce the profile, prove credibility, and make documents easy to access.",
  },
  {
    title: "Strong typography",
    description:
      "A restrained editorial layout keeps the page readable and gives the work a professional tone.",
  },
  {
    title: "Clear evidence",
    description:
      "The documents from /docs are surfaced directly so the portfolio is grounded in real material.",
  },
];

export const documentPreview = {
  label: "Certificate preview",
  href: toAssetPath("CoC_Eng.png"),
};

export const latestCvLink = {
  label: "CV update 05/2026",
  href: toAssetPath("CV_Flaig_052026.pdf"),
};

export const githubProfile = {
  name: "Michael",
  handle: "Unitycorn",
  bio: "Hello World!",
  location: "Hamburg, Germany",
  followers: 7,
  following: 7,
  href: "https://github.com/Unitycorn",
};

export const contactLinks = [
  {
    label: "Email",
    value: "flaig.m@gmx.de",
    href: "mailto:flaig.m@gmx.de",
  },
  {
    label: "LinkedIn",
    value: "michaelflaig",
    href: "https://www.linkedin.com/in/michaelflaig/",
  },
  {
    label: "GitHub",
    value: "@Unitycorn",
    href: "https://github.com/Unitycorn",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Project_X_Frontend",
    title: "Project X Frontend",
    description:
      "React frontend for a video streaming platform, with home page, detail views, channel pages, upload flows, and session-based auth.",
    stack: ["React 19", "Vite 7", "React Router 7", "Tailwind CSS 4", "Formik"],
    href: "https://github.com/Unitycorn/Project_X_Frontend",
    accent: "moss",
  },
  {
    name: "Project_X_Backend",
    title: "Project X Backend",
    description:
      "Python/Flask backend for the streaming platform, built around authentication, media uploads, and a relational database.",
    stack: ["Flask", "SQLAlchemy", "ImageKit", "Gunicorn"],
    href: "https://github.com/Unitycorn/Project_X_Backend",
    accent: "clay",
  },
  {
    name: "Projektwoche",
    title: "Guild Wars 2 Landing Page",
    description:
      "React landing page for Guild Wars 2: End of Dragons, focused on dynamic routing, REST APIs, and SASS-driven presentation.",
    stack: ["React", "REST APIs", "Dynamic routing", "SASS", "SSR"],
    href: "https://github.com/Unitycorn/Projektwoche",
    accent: "sand",
  },
  {
    name: "Wikifeud",
    title: "Wikifeud",
    description:
      "Python-powered multiplayer quiz game built during Hackathon #1 at MSIT and shipped under time pressure with a team.",
    stack: ["Python", "Hackathon build", "Multiplayer", "Game logic"],
    href: "https://github.com/Unitycorn/Wikifeud",
    accent: "ink",
  },
];
