import { motion } from "framer-motion";

type Props = {
  index: string;
  title: string;
  lead?: string;
};

export default function SectionHeading({ index, title, lead }: Props) {
  return (
    <div className="mb-10 sm:mb-14">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <span className="font-mono text-xs text-[var(--accent)]">{index}</span>
        <span className="h-px flex-1 bg-[var(--line)]" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.06 }}
        className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl"
      >
        {title}
      </motion.h2>

      {lead && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-3 max-w-xl text-[var(--ink-soft)]"
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
}
