import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { hero, profile } from "../data/profile";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Cycles through the rotating words with a typing effect.
 * With reduced motion enabled it just shows the first word.
 */
function RotatingWord() {
  const words = hero.rotatingWords;
  const reduced = useRef(prefersReducedMotion());
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(() =>
    prefersReducedMotion() ? hero.rotatingWords[0] : "",
  );
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced.current) return;

    const current = words[index];
    let delay = deleting ? 45 : 85;

    if (!deleting && text === current) {
      delay = 1800;
    } else if (deleting && text === "") {
      delay = 220;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className="caret font-mono text-[var(--accent)]">{text}</span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-24 pb-16 sm:px-8"
    >
      {/* Decorative animated glows. pointer-events-none so they never block taps. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div
          className="animate-float-slow absolute -top-24 -left-20 size-[22rem] rounded-full blur-3xl sm:size-[30rem]"
          style={{ backgroundColor: "var(--glow-a)", opacity: 0.35 }}
        />
        <div
          className="animate-float-slow absolute -right-24 top-1/3 size-[18rem] rounded-full blur-3xl sm:size-[26rem]"
          style={{
            backgroundColor: "var(--glow-c)",
            opacity: 0.3,
            animationDelay: "-6s",
          }}
        />
        <div
          className="animate-float-slow absolute bottom-0 left-1/4 size-[16rem] rounded-full blur-3xl sm:size-[22rem]"
          style={{
            backgroundColor: "var(--glow-b)",
            opacity: 0.28,
            animationDelay: "-12s",
          }}
        />
        {/* Fades the hero into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[var(--bg)]" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-[var(--ink-faint)]"
        >
          {profile.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="mt-3 max-w-3xl font-serif text-[2.1rem] leading-[1.12] font-semibold tracking-tight text-balance text-[var(--ink)] sm:text-5xl lg:text-6xl"
        >
          {hero.headlineLead}{" "}
          <span className="gradient-text">{hero.headlineAccent}</span>{" "}
          {hero.headlineTail}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg"
        >
          {hero.subheadline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-4 flex flex-wrap items-center gap-2 text-sm text-[var(--ink-faint)]"
        >
          <span>Currently working with</span>
          <RotatingWord />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition-all hover:gap-3 hover:bg-[var(--accent)]"
          >
            See my projects
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-card)] px-6 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
          >
            Get in touch
          </a>
        </motion.div>

      </div>

      {/* Scroll cue, hidden on short screens where it would crowd the fold */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="animate-bob absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[var(--ink-faint)] transition-colors hover:text-[var(--accent)] lg:block"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </motion.a>
    </section>
  );
}
