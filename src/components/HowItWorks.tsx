"use client";

import { motion } from "framer-motion";
import LightboxImage from "./LightboxImage";

const steps = [
  {
    number: "01",
    title: "Chat with your codebase",
    description:
      "Spin up an AI coding session on any repo. Describe what you want — the AI reads, edits, and tests code in real-time while you watch every tool call streamed to your workbench.",
    image: "/images/chat-view.jpg",
    alt: "CodeBench chat view — AI coding conversation with real-time tool calls",
  },
  {
    number: "02",
    title: "Launch & test your services",
    description:
      "Start your frontend and backend services directly from CodeBench to test AI-generated changes live. See your app running alongside the coding session — no terminal juggling required.",
    image: "/images/launch-view.jpg",
    alt: "CodeBench launch view — session launcher with spatial canvas",
  },
  {
    number: "03",
    title: "Orchestrate & ship",
    description:
      "Monitor progress on the spatial canvas. Review AI-generated code in real-time, create PRs with one click, and track CI status — all from one unified interface.",
    image: "/images/github-prs.jpg",
    alt: "CodeBench GitHub PR management — create and track pull requests",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-accent-cyan mb-3 tracking-wide uppercase">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            From zero to shipping in minutes
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            Three steps to transform how your team builds software with AI.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-28">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-8 md:gap-16 ${
                i % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Text */}
              <div className="flex-1 max-w-lg">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="text-4xl font-bold gradient-text font-heading">
                    {step.number}
                  </span>
                  <div className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-lg">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-accent/10 via-accent-cyan/10 to-accent-cyan/5 blur-xl opacity-50" />
                  <div className="relative rounded-xl border border-border overflow-hidden bg-surface">
                    <LightboxImage
                      src={step.image}
                      alt={step.alt}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
