import { featuredProjects } from '../../data';
import SectionHeading from '../ui/SectionHeading';

function ProjectsSection() {
  return (
    <section id="projects" className="py-8 sm:py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Pinned GitHub work, translated into a portfolio layout."
        />
        <p className="max-w-xl text-sm leading-7 text-ink/70 sm:text-right">
          These cards are derived from your pinned repositories and carry through the repo names,
          summaries, and stack details from GitHub.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.name}
            className="rounded-[1.75rem] border border-line bg-white/72 p-6 shadow-soft backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-ink/55">
                  {project.name}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  {project.title}
                </h3>
              </div>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                  project.accent === 'moss'
                    ? 'border-moss/20 bg-moss/10 text-moss'
                    : project.accent === 'clay'
                      ? 'border-clay/20 bg-clay/10 text-clay'
                      : project.accent === 'sand'
                        ? 'border-amber-900/10 bg-sand text-ink'
                        : 'border-ink/20 bg-ink text-paper'
                }`}
              >
                Featured
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-ink/70">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-paper/80 px-3 py-2 text-xs font-medium text-ink"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-ink/50">
                GitHub repository
              </p>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink/90"
              >
                Open repo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
