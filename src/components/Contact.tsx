import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const links = [
  {
    label: "GitHub",
    value: "github.com/axelsanjiro",
    href: profile.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/axelsanjiro",
    href: profile.linkedin,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked (older browsers, insecure context) — the mailto link still works
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-[var(--line)] bg-[var(--bg-dim)] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="04"
          title="Get in touch"
          lead="Reach out about internships, research, or projects worth building together."
        />

        {/* Email card with copy action */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-[var(--line)] bg-[var(--bg-card)] p-6 sm:p-8"
        >
          <p className="font-mono text-xs tracking-wide text-[var(--accent)] uppercase">
            Email
          </p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* break-all stops long emails from overflowing on small screens */}
            <a
              href={`mailto:${profile.email}`}
              className="link-underline font-serif text-xl break-all text-[var(--ink)] sm:text-2xl"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--line)] px-4 py-2.5 text-sm text-[var(--ink-soft)] transition-colors hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "copied" : "copy"}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <CheckIcon /> Copied
                    </>
                  ) : (
                    <>
                      <CopyIcon /> Copy
                    </>
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </motion.div>

        {/* Social links */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group flex items-center justify-between rounded-xl border border-[var(--line)] bg-[var(--bg-card)] p-6 transition-colors hover:border-[var(--accent-soft)]"
            >
              <span>
                <span className="block font-mono text-xs tracking-wide text-[var(--ink-faint)] uppercase">
                  {link.label}
                </span>
                <span className="mt-1.5 block text-sm break-all text-[var(--ink)]">
                  {link.value}
                </span>
              </span>
              <span className="ml-3 shrink-0 text-[var(--ink-faint)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]">
                <ArrowIcon />
              </span>
            </motion.a>
          ))}
        </div>

        <footer className="mt-16 border-t border-[var(--line)] pt-6 text-xs text-[var(--ink-faint)]">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </div>
    </section>
  );
}

function CopyIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
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
