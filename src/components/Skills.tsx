import { motion } from "framer-motion";
import { skills } from "../data/profile";
import SectionHeading from "./SectionHeading";

// Duplicated so the marquee can loop seamlessly
const allTools = skills.flatMap((group) => group.items);
const marqueeItems = [...allTools, ...allTools];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-[var(--line)] bg-[var(--bg-dim)] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="02"
          title="Skills"
          lead="The tools I reach for when building and evaluating models."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-[var(--line)] bg-[var(--bg-card)] p-6 transition-colors hover:border-[var(--accent-soft)]"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-lg font-semibold text-[var(--ink)]">
                  {group.category}
                </h3>
                <span className="font-mono text-xs text-[var(--ink-faint)]">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-[var(--ink-faint)]">
                {group.blurb}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--line)] bg-[var(--bg)] px-2.5 py-1 font-mono text-xs text-[var(--ink-soft)] transition-colors group-hover:border-[var(--accent-soft)] group-hover:text-[var(--ink)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Looping tool strip for a bit of motion */}
      <div
        aria-hidden="true"
        className="relative mt-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="animate-marquee flex shrink-0 items-center gap-3 pr-3">
          {marqueeItems.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="shrink-0 font-mono text-sm whitespace-nowrap text-[var(--ink-faint)]"
            >
              {item}
              <span className="ml-3 text-[var(--accent-soft)]">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
