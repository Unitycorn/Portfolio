import { navItems } from "../../data";

function SiteHeader() {
  return (
    <header className="sticky top-4 z-30 mb-8 rounded-full border border-line bg-white/65 px-4 py-3 shadow-soft backdrop-blur-xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
            Michael Flaig
          </p>
          <p className="text-sm text-ink/70">
            Frontend-focused Fullstack Developer · React · FastAPI · TypeScript
          </p>
        </div>
        <nav aria-label="Primary" className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-3 py-2 text-sm text-ink/70 transition hover:border-line hover:bg-paper/80 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
