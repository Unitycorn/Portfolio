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
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  learnings: string[];
  stack: string[];
  href: string;
  hreflive: string;
  status: string;
  accent: "moss" | "clay" | "ink" | "sand";
};

const toAssetPath = (fileName: string) => `/${encodeURI(fileName)}`;

export const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Techstack", href: "#focus" },
  { label: "Projects", href: "#projects" },
  { label: "Open Source", href: "#open-source" },
  { label: "Testing", href: "#testing" },
  { label: "How I Build", href: "#build-process" },
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
    title: "Frontend Engineering",
    summary:
      "Component-driven user interfaces, responsive layouts and clean frontend architecture.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "SASS",
      "React Router",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Engineering",
    summary:
      "Backend APIs, data handling and full-stack delivery across modern web applications.",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Node.js",
      "PHP",
      "REST APIs",
      "SQL",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "Quality Engineering",
    summary:
      "Testing, validation and delivery practices that keep production code reliable.",
    skills: [
      "Vitest",
      "Pytest",
      "Unit Testing",
      "Integration Testing",
      "TDD",
      "CI/CD",
      "Git",
      "API Validation",
    ],
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
        href: toAssetPath("Scrimba_Cert_Advanced_React.pdf"),
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
    title: "Communicate early",
    keyword: "Talk",
    description:
      "Problems don't get smaller when you stay quiet. I'd rather raise a concern too soon than deliver a surprise too late.",
  },
  {
    title: "Keep learning",
    keyword: "Educate",
    description:
      "From my apprenticeship to Masterschool I've never stopped picking up new skills. Curiosity is what got me here.",
  },
  {
    title: "Show up as yourself",
    keyword: "Human",
    description:
      "I bring my whole self to work, the gamer, the singer, the problem-solver. The best teams I've been part of made room for that.",
  },
];

export const documentPreview = {
  label: "Certificate preview",
  href: toAssetPath("CoC_Eng.png"),
};

export const latestCvLink = {
  label: "CV update 05/2026",
  href: toAssetPath("CV_Michael_Flaig_EN.pdf"),
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
    name: "Advanced repo analyzer",
    title: "Compass",
    description:
      "Continuing to contribute to this open-source project after my internship at Webeet.io as part of the original team. Ongoing work includes improving test coverage, refining the API design, and optimized structured output.",
    problem:
      "Repository information is spread across files, code structure and metadata, which makes it harder to understand a project quickly.",
    solution:
      "Built and continued improving an analyzer that surfaces structural and quality signals for GitHub repositories.",
    architecture: ["GitHub Repository", "Analyzer Logic", "Structured Output"],
    challenges: [
      "Feature development in an existing codebase",
      "Testing improvements around changing logic",
      "API design for structured output",
    ],
    learnings: ["Code quality", "Testing", "Repository analysis", "API design"],
    stack: ["Python", "TypeScript", "GitHub Actions"],
    href: "https://github.com/Sammyduzit/compass",
    hreflive: "",
    status: "ongoing",
    accent: "moss",
  },
  {
    name: "Fullstack Video Streaming Platform",
    title: "FlowVid",
    description:
      "A full-stack video streaming platform using React/Vite for the frontend and Python/Flask for backend API endpoints, including structured routing and repository separation",
    problem:
      "Video streaming needs clear navigation, media handling and a backend that can keep frontend and data access separated.",
    solution:
      "Built a full-stack platform with a React frontend, a Flask API and structured separation between app layers.",
    architecture: ["React Frontend", "Flask API", "SQLAlchemy / Database"],
    challenges: [
      "Frontend and backend repository separation",
      "Structured routing",
      "Media and image handling with ImageKit",
    ],
    learnings: ["API structure", "Routing", "Repository separation", "Full-stack delivery"],
    stack: [
      "React 19",
      "Vite 7",
      "React Router 7",
      "Tailwind CSS 4",
      "Formik",
      "Flask",
      "SQLAlchemy",
      "ImageKit",
      "Gunicorn",
    ],
    href: "https://github.com/Unitycorn/Project_X_Frontend",
    hreflive: "",
    status: "refactoring",
    accent: "clay",
  },
  {
    name: "Animated React Website",
    title: "Guild Wars 2 Landing Page",
    description:
      "React landing page for Guild Wars 2: End of Dragons, focused on dynamic routing, REST APIs, and SASS-driven presentation.",
    problem:
      "The project needed a themed landing page that could present content dynamically instead of relying on static sections.",
    solution:
      "Built an animated React landing page with routing and API-driven presentation for the game expansion.",
    architecture: ["React UI", "REST APIs", "Presentation Layer"],
    challenges: [
      "Dynamic routing",
      "REST API integration",
      "SASS-driven presentation",
    ],
    learnings: ["Routing", "API usage", "Frontend presentation", "UI animation"],
    stack: ["React", "REST APIs", "Dynamic routing", "SASS", "SSR"],
    href: "https://github.com/Unitycorn/Projektwoche",
    hreflive: "https://gw2landingpage.vercel.app/",
    status: "live",
    accent: "sand",
  },
  {
    name: "CLI Multiplayer Game",
    title: "Wikifeud",
    description:
      "Python-powered multiplayer quiz game built during Hackathon #1 at MSIT and shipped under time pressure with a team.",
    problem:
      "The team needed a multiplayer game concept that could be built and shipped within hackathon constraints.",
    solution:
      "Built a Python-based quiz game with multiplayer logic and game rules that could be delivered under time pressure.",
    architecture: ["Python Game Logic", "Multiplayer Layer", "CLI Interface"],
    challenges: [
      "Hackathon time pressure",
      "Multiplayer coordination",
      "Game logic implementation",
    ],
    learnings: ["Team delivery", "Game logic", "Fast iteration", "Multiplayer basics"],
    stack: ["Python", "Hackathon build", "Multiplayer", "Game logic"],
    href: "https://github.com/Unitycorn/Wikifeud",
    hreflive: "",
    status: "completed",
    accent: "ink",
  },
];

export const openSourceContribution = {
  title: "Compass Repository Analyzer",
  description:
    "Compass is an open-source repository analyzer for GitHub projects. It helps inspect repository structure and surface code quality signals, so teams can understand a codebase faster.",
  contributions: [
    "Feature Development",
    "Testing Improvements",
    "Code Quality Enhancements",
    "Repository Analysis Features",
  ],
  href: "https://github.com/Sammyduzit/compass",
};
