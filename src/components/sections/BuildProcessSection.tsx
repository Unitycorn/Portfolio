import SectionHeading from "../ui/SectionHeading";

const buildSteps = [
  {
    number: "01",
    title: "Understand Requirements",
    description:
      "I start by clarifying the actual problem, constraints and success criteria before writing code.",
  },
  {
    number: "02",
    title: "Design APIs",
    description:
      "I map the boundaries first so frontend, backend and data contracts stay predictable.",
  },
  {
    number: "03",
    title: "Write Tests",
    description:
      "I turn behavior into checks early so the implementation is guided by something concrete.",
  },
  {
    number: "04",
    title: "Implement Features",
    description:
      "I build the smallest useful slice, keeping the structure readable and the flow shippable.",
  },
  {
    number: "05",
    title: "Refactor",
    description:
      "Once the feature works, I clean up the code and reduce duplication while the context is still fresh.",
  },
  {
    number: "06",
    title: "Automate with CI/CD",
    description:
      "I prefer checks and delivery steps to run automatically so quality does not depend on memory.",
  },
];

function BuildProcessSection() {
  return (
    <section id="build-process" className="py-8 sm:py-12">
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <SectionHeading
          eyebrow="How I Build Software"
          title="A repeatable process for turning problems into shipped work"
          description="This is the order I try to keep: understand first, then design, test, implement and automate."
        />
        <p className="max-w-2xl text-sm leading-7 text-ink/70 lg:justify-self-end lg:text-right">
          The goal is not to look busy, but to keep the work calm and
          predictable. A process like this helps me avoid random implementation
          first and keeps quality visible throughout the project.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[1.75rem] border border-line bg-ink p-6 text-paper shadow-soft">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-paper/55">
            Recommended order
          </p>

          <div className="mt-6 grid gap-3">
            {buildSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-3 rounded-[1.5rem] border border-paper/10 bg-white/5 p-4 sm:grid-cols-[auto_1fr] sm:gap-4"
              >
                <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/15 bg-white/10 text-sm font-semibold text-paper">
                    {step.number}
                  </div>
                  {index < buildSteps.length - 1 ? (
                    <div className="hidden h-full w-px bg-paper/10 sm:block" />
                  ) : null}
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-paper/75">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className="grid gap-4">
          <div className="rounded-[1.75rem] border border-line bg-white/72 p-6 shadow-soft backdrop-blur-xl">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
              Why it matters
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
              Senior process, not random execution
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              A visible process signals how I think about delivery: clarifying
              the work, reducing risk early and finishing with automation
              instead of manual habits.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-line bg-white/72 p-6 shadow-soft backdrop-blur-xl">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-clay">
              In practice
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/70">
              <li>Requirements get clarified before the first implementation pass.</li>
              <li>API and data boundaries are considered before the UI grows too far.</li>
              <li>Testing and automation stay part of the delivery path.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default BuildProcessSection;
