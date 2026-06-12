import profilePhoto from "../../../img/1733990699641.jpeg";
import HeroIdentity from "../ui/HeroIdentity";

function HeroSection() {
  return (
    <section
      id="profile"
      className="grid items-center gap-10 pb-16 pt-6 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div className="space-y-8 animate-rise">
        <div className="max-w-4xl">
          <div
            className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border border-line shadow-soft sm:float-left sm:mx-0 sm:mr-6 sm:mt-2 sm:h-40 sm:w-40"
            style={{
              shapeOutside: "circle(50%)",
              shapeMargin: "1rem",
            }}
          >
            <div className="absolute -inset-2 rounded-full bg-moss/10 blur-xl" />
            <img
              src={profilePhoto}
              alt="Portrait of Michael Flaig"
              className="relative h-full w-full rounded-full object-cover object-center"
            />
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Michael Flaig
            </h1>
            <p className="text-lg font-semibold tracking-[-0.03em] text-ink sm:text-xl">
              Fullstack Developer
            </p>
            <p className="max-w-2xl text-sm uppercase tracking-[0.28em] text-ink/60 sm:text-base">
              TypeScript • React • Flask • PostgreSQL
            </p>
            <p className="max-w-2xl text-lg leading-8 text-ink/75 sm:text-xl">
              Fullstack Developer with 10+ years Frontend experience. Building
              maintainable web applications with a strong focus on testing, API
              design and developer experience.
            </p>
          </div>

          <div className="clear-both" />
        </div>

        <div className="rounded-[1.75rem] border border-line bg-white/72 p-5 shadow-soft backdrop-blur-xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
            Professional Summary
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-paper/80 px-4 py-4">
              <p className="text-sm font-semibold tracking-[-0.02em]">
                Open Source Contributor
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper/80 px-4 py-4">
              <p className="text-sm font-semibold tracking-[-0.02em]">
                API Developer
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper/80 px-4 py-4">
              <p className="text-sm font-semibold tracking-[-0.02em]">
                Fullstack Developer
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/70">
            Building production-ready applications using React, TypeScript and
            modern backend technologies.
          </p>
        </div>
      </div>

      <aside className="relative animate-rise lg:justify-self-end">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white/70 p-6 shadow-soft backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-moss via-sand to-clay" />
          <HeroIdentity />
        </div>
      </aside>
    </section>
  );
}

export default HeroSection;
