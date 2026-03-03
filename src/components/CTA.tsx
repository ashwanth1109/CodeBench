"use client";

import { motion } from "framer-motion";

const DOWNLOAD_URL =
  "https://github.com/ashwanth1109/CodeBench/releases/latest";

export default function CTA() {
  return (
    <section id="download" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/8 blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-accent-cyan/6 blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            Ready to 10x your
            <br />
            <span className="gradient-text">development velocity?</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-lg mx-auto">
            Download CodeBench and start orchestrating AI-powered development
            sessions across your repositories today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-accent-cyan px-8 py-3.5 text-sm font-medium text-background transition-all hover:brightness-110"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 3V12M9 12L5.5 8.5M9 12L12.5 8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 13.5V14.5C3 15.0523 3.44772 15.5 4 15.5H14C14.5523 15.5 15 15.0523 15 14.5V13.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download for macOS
          </a>
          <a
            href="https://github.com/ashwanth1109/CodeBench/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors underline underline-offset-4 decoration-border hover:decoration-text-tertiary"
          >
            View all releases on GitHub
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-xs text-text-tertiary"
        >
          Free and open source. macOS only for now.
        </motion.p>
      </div>
    </section>
  );
}
