"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Spatial Canvas",
    description:
      "Visualize all your AI sessions on an interactive canvas. Drag, arrange, and connect sessions to map your development workflow spatially.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3V21M3 12H21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Multi-Session Orchestration",
    description:
      "Run parallel AI coding sessions across different repositories. Powered by git worktrees, each session gets its own isolated branch and environment.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 12H8L10 8L14 16L16 12H20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Real-Time Streaming",
    description:
      "Watch AI write code in real-time. Every keystroke, every decision, streamed live to your workbench with full conversation context.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 3V6M12 18V21M3 12H6M18 12H21M5.6 5.6L7.8 7.8M16.2 16.2L18.4 18.4M5.6 18.4L7.8 16.2M16.2 7.8L18.4 5.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Git & GitHub Integration",
    description:
      "Automatic worktree management, branch creation, PR tracking, and CI status — all synced in real-time across every session.",
    gradient: "from-orange-400 to-amber-500",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6H20M4 12H20M4 18H12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Service Management",
    description:
      "Launch, monitor, and manage development services per session. Port allocation, process tracking, and log streaming built-in.",
    gradient: "from-red-400 to-rose-500",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Smart Context & Guardrails",
    description:
      "Set safety constraints, manage context windows, and compact conversations automatically. Full control over AI behavior per session.",
    gradient: "from-violet-500 to-indigo-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="absolute inset-0 glow-center" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            Everything you need to ship faster
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            A complete development workbench designed for teams that leverage AI
            to build at unprecedented speed.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group glass glass-hover rounded-xl p-6 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} text-white mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
