import { focusAreas } from '../../data';
import SectionHeading from '../ui/SectionHeading';

function FocusSection() {
  return (
    <section id="focus" className="py-8 sm:py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Focus"
          title="A clean stack with a clear visual hierarchy."
        />
        <p className="max-w-xl text-sm leading-7 text-ink/70 sm:text-right">
          The layout avoids generic portfolio boilerplate and leans on strong spacing, a calm
          palette, and evidence-first storytelling.
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
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FocusSection;
