import { principles } from "../../data";
import SectionHeading from "../ui/SectionHeading";

function PrinciplesSection() {
  return (
    <section id="principles" className="py-8 sm:py-12">
      <SectionHeading eyebrow="Principles" title="How I Show Up" />

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {principles.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-line bg-ink p-6 text-paper shadow-soft"
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-paper/55">
              {item.keyword}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-paper/70">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PrinciplesSection;
