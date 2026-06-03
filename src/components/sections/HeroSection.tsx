import {
  documentPreview,
  githubProfile,
  heroStats,
  latestCvLink,
} from "../../data";

function HeroSection() {
  return (
    <section
      id="profile"
      className="grid items-center gap-10 pb-16 pt-6 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div className="space-y-8 animate-rise">
        <div className="space-y-5">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Hi, I am Michael - happy you found me here!
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-ink/75 sm:text-xl">
            I am a Fullstack Web Developer with 10+ years of experience in
            frontend development, CMS projects, and web applications, now
            focused on building modern full-stack solutions with React,
            Python/FastAPI, Node.js, and automated testing.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={documentPreview.href}
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:bg-ink/90"
          >
            Open certificate preview
          </a>
          <a
            href={latestCvLink.href}
            className="inline-flex items-center justify-center rounded-full border border-line bg-white/70 px-5 py-3 text-sm font-medium text-ink transition hover:bg-paper/90"
          >
            Browse latest CV
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line bg-white/75 p-4 shadow-insetGlow backdrop-blur"
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-ink/55">
                {stat.label}
              </p>
              <p className="mt-2 text-base font-semibold text-ink">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <aside className="relative animate-rise lg:justify-self-end">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white/70 p-6 shadow-soft backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-moss via-sand to-clay" />

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
                GitHub profile
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                {githubProfile.name} · @{githubProfile.handle}
              </h2>
            </div>
            <span className="rounded-full border border-moss/20 bg-moss/10 px-3 py-1 text-xs font-semibold text-moss">
              {githubProfile.location}
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-line bg-paper/80 p-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-clay">
                Bio
              </p>
              <p className="mt-2 text-lg font-semibold">{githubProfile.bio}</p>
              <p className="mt-1 text-sm leading-6 text-ink/70">
                Public profile metrics: {githubProfile.followers} followers and{" "}
                {githubProfile.following} following.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-white/85 p-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-moss">
                Specialization
              </p>
              <p className="mt-2 text-base font-semibold">React focused</p>
              <p className="mt-1 text-sm text-ink/65">
                Advanced React training and frontend depth.
              </p>
            </div>

            <a
              href="https://github.com/unitycorn"
              target="_blank"
              className="group flex items-center justify-center rounded-3xl border border-line bg-ink px-4 py-4 text-paper transition hover:bg-ink/95"
            >
              <p className="mt-1 text-base font-semibold">Visit my GitHub</p>
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default HeroSection;
