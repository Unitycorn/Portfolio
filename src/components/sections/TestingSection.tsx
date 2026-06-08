import SectionHeading from "../ui/SectionHeading";
import { focusAreas } from "../../data";

const testingHighlights = [
  {
    title: "Unit Testing",
    description:
      "I keep business logic and smaller units testable so regressions show up early.",
  },
  {
    title: "Integration Testing",
    description:
      "I validate feature flows across UI, API and data boundaries where it matters most.",
  },
  {
    title: "TDD",
    description:
      "I use test-first thinking to clarify behavior before implementation gets too far.",
  },
  {
    title: "API Validation",
    description:
      "I rely on validation and contract-minded thinking to protect backend boundaries.",
  },
  {
    title: "CI/CD",
    description:
      "I want tests to run automatically so quality is part of delivery, not a separate step.",
  },
];

function TestingSection() {
  const qualitySummary = focusAreas.find(
    (item) => item.title === "Quality Engineering",
  );

  return (
    <section id="testing" className="py-8 sm:py-12">
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <SectionHeading
          eyebrow="Testing & Quality"
          title="How I keep production code reliable"
          description="Testing is not just a skill label in my profile. It is part of how I plan, implement and ship features."
        />
        <p className="max-w-2xl text-sm leading-7 text-ink/70 lg:justify-self-end lg:text-right">
          The strongest projects in this portfolio all lean on quality habits:
          smaller testable units, validation at the API boundary and automated
          checks that make delivery safer. That is the part of engineering I
          want visible, not hidden behind a skill list.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[1.75rem] border border-line bg-white/72 p-6 shadow-soft backdrop-blur-xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
            Quality story
          </p>
          <div className="mt-5 grid gap-3">
            {testingHighlights.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[1.3rem] border border-line bg-paper/85 p-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-paper">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-ink/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className="rounded-[1.75rem] border border-line bg-ink p-6 text-paper shadow-soft">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-paper/55">
            Quality focus
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
            Quality Engineering
          </h3>
          <p className="mt-3 text-sm leading-7 text-paper/70">
            {qualitySummary?.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {qualitySummary?.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-paper/15 bg-white/10 px-3 py-2 text-xs font-medium text-paper"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-[1.4rem] border border-paper/10 bg-white/5 p-4">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-paper/55">
              Recent work
            </p>
            <p className="mt-3 text-sm leading-7 text-paper/75">
              Recent work includes increasing test coverage and improving
              reliability of production code.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default TestingSection;
