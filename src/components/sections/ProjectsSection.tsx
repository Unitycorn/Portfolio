import { useEffect, useState } from "react";
import { featuredProjects, type FeaturedProject } from "../../data";
import SectionHeading from "../ui/SectionHeading";

function ProjectsSection() {
  const [selectedProject, setSelectedProject] =
    useState<FeaturedProject | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-8 sm:py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Featured Projects" title="Things I've Built" />
        <p className="max-w-xl text-sm leading-7 text-ink/70 sm:text-right">
          Side projects, hackathon builds and internship work, each one a chance
          to try something new and push a little further. Take a look around.
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
                  project.accent === "moss"
                    ? "border-moss/20 bg-moss/10 text-moss"
                    : project.accent === "clay"
                      ? "border-clay/20 bg-clay/10 text-clay"
                      : project.accent === "sand"
                        ? "border-amber-900/10 bg-sand text-ink"
                        : "border-ink/20 bg-ink text-paper"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-ink/70">
              {project.description}
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-[1.4rem] border border-line bg-paper/85 p-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
                  Problem
                </p>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-line bg-paper/85 p-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
                  Solution
                </p>
                <p className="mt-3 text-sm leading-7 text-ink/70">
                  {project.solution}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="mt-6 block w-full rounded-[1.5rem] border border-line bg-paper/85 p-4 text-left transition hover:-translate-y-0.5 hover:border-moss/30 hover:bg-white"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-clay">
                  Architecture
                </p>
                <span className="text-[0.68rem] uppercase tracking-[0.28em] text-ink/50">
                  Click to enlarge
                </span>
              </div>
              <img
                src={project.architectureImg}
                alt={`Architecture diagram for ${project.title}`}
                className="mt-4 h-auto w-full rounded-[1rem] border border-line bg-white p-2 shadow-sm"
              />
            </button>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.4rem] border border-line bg-white/75 p-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
                  Challenges
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/70">
                  {project.challenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.4rem] border border-line bg-white/75 p-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
                  Learnings
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.learnings.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-paper/80 px-3 py-2 text-xs font-medium text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

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
              {project.hreflive === "" ? (
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-ink/50">
                  GitHub repository
                </p>
              ) : (
                <a
                  href={project.hreflive}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-ink/90"
                >
                  Visit Website
                </a>
              )}
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

      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 px-4 py-6 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-2xl max-h-[90vh] rounded-[2rem] object-contain border border-line bg-paper p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 px-2 pb-4 pt-2">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
                  Architecture diagram
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink/65">
                  Click outside the image or press Escape to close.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-medium text-ink transition hover:border-moss/30 hover:bg-moss/10"
              >
                Close
              </button>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white p-3">
              <img
                src={selectedProject.architectureImg}
                alt={`Large architecture diagram for ${selectedProject.title}`}
                className="h-auto w-full rounded-[1rem]"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default ProjectsSection;
