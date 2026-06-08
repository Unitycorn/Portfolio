import { focusAreas } from "../../data";
import SectionHeading from "../ui/SectionHeading";

function FocusSection() {
  return (
    <section id="focus" className="py-8 sm:py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Built to Build"
          title="From my first HTML page to full-stack APIs - this is what I do; with an always growing toolbox."
        />
        <p className="max-w-xl text-sm leading-7 text-ink/70 sm:text-right">
          I started with frontend work, building responsive interfaces,
          component systems and clean markup. Over time that foundation grew
          into full-stack territory: backend APIs with Python, FastAPI, Flask
          and Node.js, plus a strong focus on testing and reliable delivery.
          Today my sweet spot is the full picture - from UI to API to SQL.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {focusAreas.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-line bg-white/72 p-6 shadow-soft backdrop-blur-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-sm font-semibold text-paper">
              {item.title.slice(0, 2)}
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              {item.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line bg-paper/80 px-3 py-1.5 text-xs font-medium text-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FocusSection;
