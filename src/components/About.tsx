import { motion } from "framer-motion";
import { about, profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" title="About" />

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-base leading-[1.75] text-[var(--ink-soft)] sm:text-[1.0625rem]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="h-fit rounded-xl border border-[var(--line)] bg-[var(--bg-card)] p-6 lg:sticky lg:top-24"
          >
            <h3 className="font-mono text-xs tracking-wide text-[var(--accent)] uppercase">
              What I focus on
            </h3>
            <ul className="mt-4 space-y-3">
              {about.focus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-snug text-[var(--ink-soft)]"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent-soft)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-[var(--line)] pt-4">
              <p className="text-xs text-[var(--ink-faint)]">Studying at</p>
              <p className="mt-1 text-sm font-medium text-[var(--ink)]">
                {profile.university}
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
