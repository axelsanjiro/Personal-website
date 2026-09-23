import { motion } from "framer-motion";
import { projects } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="03"
          title="Projects"
          lead="Machine learning work, mostly ending in something you can open and use."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-card)] p-6 transition-colors hover:border-[var(--accent-soft)]"
            >
              {/* Hover wash */}
              <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[var(--accent-wash)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-lg leading-snug font-semibold text-[var(--ink)] sm:text-xl">
                  {project.title}
                </h3>
                <span className="mt-0.5 shrink-0 font-mono text-xs text-[var(--ink-faint)]">
                  {project.year}
                </span>
              </div>

              <p className="mt-1.5 text-sm text-[var(--accent)]">
                {project.summary}
              </p>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-[var(--bg-dim)] px-2.5 py-1 font-mono text-xs text-[var(--ink-faint)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {(project.link || project.repo) && (
                <div className="mt-5 flex flex-wrap gap-4 border-t border-[var(--line)] pt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                    >
                      <ExternalIcon />
                      Live demo
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                    >
                      <GithubIcon />
                      Code
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.88 1.51 2.3 1.07 2.87.82.09-.64.35-1.07.63-1.32-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}
