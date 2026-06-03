import { contactLinks } from '../../data';
import SectionHeading from '../ui/SectionHeading';

function ContactSection() {
  return (
    <section id="contact" className="py-8 sm:py-12">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow="Contact"
          title="Direct contact for hiring, freelance, or collaboration."
          description="The page now ends with a concise contact block so recruiters and collaborators can reach you immediately from the portfolio."
        />

        <div className="grid gap-3 rounded-[1.75rem] border border-line bg-white/72 p-4 shadow-soft backdrop-blur-xl sm:grid-cols-3">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === 'LinkedIn' ? '_blank' : undefined}
              rel={item.label === 'LinkedIn' ? 'noreferrer' : undefined}
              className="group rounded-[1.4rem] border border-line bg-paper/75 p-5 transition hover:-translate-y-0.5 hover:bg-white"
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-ink/50">
                {item.label}
              </p>
              <p className="mt-3 text-sm font-semibold text-ink">{item.value}</p>
              <p className="mt-4 text-sm text-moss transition group-hover:translate-x-0.5">
                Open
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
