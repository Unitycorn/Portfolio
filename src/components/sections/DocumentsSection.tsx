import { documentCards, documentPreview } from "../../data";
import SectionHeading from "../ui/SectionHeading";

function DocumentsSection() {
  return (
    <section id="documents" className="py-8 sm:py-12">
      <SectionHeading
        eyebrow="Documents"
        title="Proof of Work"
        description="Certificates, references and my CV, everything you might want to see before reaching out. No need to ask twice."
      />

      <div className="mt-8 grid gap-4 xl:grid-cols-2">
        {documentCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.75rem] border border-line bg-white/72 p-6 shadow-soft backdrop-blur-xl"
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-clay">
              {card.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
              {card.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/70">
              {card.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {card.files.map((file) => (
                <a
                  key={file.label}
                  href={file.href}
                  target="_blank"
                  className="rounded-full border border-line bg-paper/80 px-3 py-2 text-sm font-medium text-ink transition hover:border-moss/30 hover:bg-moss/10"
                >
                  {file.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-[1.75rem] border border-line bg-white/72 p-4 shadow-soft backdrop-blur-xl">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[1.5rem] border border-line bg-paper/85 p-4">
            <img
              src={documentPreview.href}
              alt="Certificate preview"
              className="h-auto w-full rounded-[1rem] border border-line object-cover"
            />
          </div>
          <div className="p-2">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
              Continuous learning
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
              Always adding to the tech stack
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/70">
              From March 2025 to May 2026, I completed the Software Engineering
              Training Program at Masterschool. In this immersive program, I
              gained hands-on experience building full-stack applications using
              JavaScript, React, Node.js, and SQL. I applied software
              engineering principles such as object-oriented programming,
              test-driven development, and version control with Git in
              real-world projects. I also built and deployed scalable
              applications using RESTful APIs, cloud services, and CI/CD
              pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocumentsSection;
