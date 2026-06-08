import { openSourceContribution } from "../../data";
import SectionHeading from "../ui/SectionHeading";

function OpenSourceSection() {
  return (
    <section id="open-source" className="py-8 sm:py-12">
      <SectionHeading
        eyebrow="Open Source"
        title="Open Source Contributions"
        description="Compass is the clearest example of how I work beyond the internship setting: shipping features, improving quality and continuing to contribute."
      />

      <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-line bg-white/72 p-6 shadow-soft backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
              {openSourceContribution.title}
            </p>
            <p className="mt-3 text-sm font-semibold tracking-[-0.02em] text-ink">
              Open-source repository analyzer for GitHub projects
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/70">
              {openSourceContribution.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {openSourceContribution.contributions.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-paper/80 px-3 py-2 text-xs font-medium text-ink"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-line bg-paper/85 p-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
                Compass flow
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                <div className="rounded-2xl border border-line bg-white/85 p-4">
                  <p className="text-sm font-semibold tracking-[-0.02em] text-ink">
                    GitHub repository
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    Source code and repository metadata.
                  </p>
                </div>
                <div className="flex justify-center text-2xl font-semibold text-moss md:rotate-0">
                  ↓
                </div>
                <div className="rounded-2xl border border-line bg-white/85 p-4">
                  <p className="text-sm font-semibold tracking-[-0.02em] text-ink">
                    Analyzer logic
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    Inspects structure and evaluates quality signals.
                  </p>
                </div>
                <div className="flex justify-center text-2xl font-semibold text-moss">
                  ↓
                </div>
                <div className="rounded-2xl border border-line bg-white/85 p-4">
                  <p className="text-sm font-semibold tracking-[-0.02em] text-ink">
                    Output summary
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    Readable signals for quicker codebase understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-line bg-paper/85 p-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-clay">
              GitHub Link
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
              Compass repository
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              The repository contains the core implementation and provides the
              clearest public entry point to the ongoing work.
            </p>
            <a
              href={openSourceContribution.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink/90"
            >
              Open repository
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default OpenSourceSection;
