"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Configure your repos",
    description:
      "Point CodeBench at your repositories. Set up guardrails, service configs, and environment variables once — they persist across sessions.",
    visual: (
      <div className="mock-terminal rounded-lg p-4 h-full">
        <div className="flex items-center gap-2 mb-3 text-text-tertiary text-[10px]">
          <div className="w-2 h-2 rounded-full bg-green-400/50" />
          config.json
        </div>
        <pre className="text-[11px] leading-relaxed">
          <span className="text-accent-purple">{"{"}</span>
          {"\n"}
          {"  "}<span className="text-accent">&quot;repos&quot;</span>: [
          {"\n"}
          {"    "}&#123; <span className="text-accent">&quot;name&quot;</span>: <span className="text-green-400">&quot;acme/backend&quot;</span>,{"\n"}
          {"      "}<span className="text-accent">&quot;path&quot;</span>: <span className="text-green-400">&quot;~/code/backend&quot;</span> &#125;,{"\n"}
          {"    "}&#123; <span className="text-accent">&quot;name&quot;</span>: <span className="text-green-400">&quot;acme/frontend&quot;</span>,{"\n"}
          {"      "}<span className="text-accent">&quot;path&quot;</span>: <span className="text-green-400">&quot;~/code/frontend&quot;</span> &#125;{"\n"}
          {"  "}],{"\n"}
          {"  "}<span className="text-accent">&quot;guardrails&quot;</span>: <span className="text-green-400">&quot;...&quot;</span>{"\n"}
          <span className="text-accent-purple">{"}"}</span>
        </pre>
      </div>
    ),
  },
  {
    number: "02",
    title: "Spin up sessions",
    description:
      "Launch isolated AI coding sessions with one click. Each session gets its own worktree, context, and development environment. Run as many as you need in parallel.",
    visual: (
      <div className="mock-terminal rounded-lg p-4 h-full">
        <div className="space-y-2">
          <div>
            <span className="prompt">$ </span>
            <span className="command">codebench session new --repo acme/backend</span>
          </div>
          <div className="output">
            <span className="success">✓</span> Created worktree task/auth-refactor
          </div>
          <div className="output">
            <span className="success">✓</span> Provisioned Claude session (Opus)
          </div>
          <div className="output">
            <span className="success">✓</span> Context loaded (42 files indexed)
          </div>
          <div className="mt-3">
            <span className="prompt">$ </span>
            <span className="command">codebench session new --repo acme/backend</span>
          </div>
          <div className="output">
            <span className="success">✓</span> Created worktree task/api-endpoints
          </div>
          <div className="output">
            <span className="success">✓</span> Provisioned Claude session (Sonnet)
          </div>
          <div className="mt-3">
            <span className="prompt">$ </span>
            <span className="accent">4 sessions active</span>
            <span className="cursor-blink ml-1">▊</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Orchestrate & ship",
    description:
      "Monitor progress on the spatial canvas. Review AI-generated code in real-time, create PRs with one click, and track CI status — all from one unified interface.",
    visual: (
      <div className="mock-terminal rounded-lg p-4 h-full">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
              <span className="text-text-primary text-xs font-mono">auth-refactor</span>
            </div>
            <span className="text-[10px] text-green-400">PR #47 — CI passing</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
              <span className="text-text-primary text-xs font-mono">api-endpoints</span>
            </div>
            <span className="text-[10px] text-yellow-400">PR #48 — reviewing</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.5)]" />
              <span className="text-text-primary text-xs font-mono">ui-dashboard</span>
            </div>
            <span className="text-[10px] text-accent">writing code...</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
              <span className="text-text-primary text-xs font-mono">test-coverage</span>
            </div>
            <span className="text-[10px] text-green-400">✓ 94% coverage</span>
          </div>
          <div className="border-t border-border mt-3 pt-3">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-text-tertiary">Session cost</span>
              <span className="text-text-secondary">$4.84</span>
            </div>
            <div className="flex items-center justify-between text-[10px] mt-1">
              <span className="text-text-tertiary">PRs shipped today</span>
              <span className="text-green-400 font-semibold">3 merged</span>
            </div>
          </div>
        </div>
      </div>
    ),
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
          <p className="text-sm font-medium text-accent-purple mb-3 tracking-wide uppercase">
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
                  <span className="text-4xl font-bold gradient-text">
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
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-accent/10 via-accent-purple/10 to-accent-cyan/5 blur-xl opacity-50" />
                  <div className="relative rounded-xl border border-border overflow-hidden bg-surface">
                    {step.visual}
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
