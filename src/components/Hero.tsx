"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function MockCanvasUI() {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16 md:mt-20">
      {/* Glow behind */}
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-accent/20 via-accent-cyan/20 to-accent-cyan/10 blur-3xl opacity-50" />

      {/* Main window frame */}
      <div className="relative rounded-xl border border-border overflow-hidden bg-surface shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-light/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 px-3 py-0.5 rounded-md bg-white/5 text-xs text-text-tertiary">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-accent"
              >
                <path
                  d="M1.5 3L6 1.5L10.5 3V9L6 10.5L1.5 9V3Z"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
              CodeBench — 4 sessions active
            </div>
          </div>
        </div>

        {/* Content area with sidebar + canvas */}
        <div className="flex h-[340px] md:h-[420px]">
          {/* Sidebar */}
          <div className="w-48 md:w-56 border-r border-border bg-surface-light/30 p-3 flex flex-col gap-1 shrink-0">
            <div className="text-[10px] uppercase tracking-widest text-text-tertiary mb-2 px-2">
              Sessions
            </div>
            {[
              {
                name: "auth-refactor",
                status: "active",
                model: "Opus",
                cost: "$1.24",
              },
              {
                name: "api-endpoints",
                status: "active",
                model: "Sonnet",
                cost: "$0.87",
              },
              {
                name: "ui-dashboard",
                status: "idle",
                model: "Opus",
                cost: "$2.31",
              },
              {
                name: "test-coverage",
                status: "active",
                model: "Sonnet",
                cost: "$0.42",
              },
            ].map((session, i) => (
              <div
                key={session.name}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs cursor-default transition-colors ${
                  i === 0
                    ? "bg-accent/10 text-text-primary"
                    : "text-text-secondary hover:bg-white/5"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    session.status === "active"
                      ? "bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]"
                      : "bg-text-tertiary"
                  }`}
                />
                <span className="flex-1 truncate font-mono">
                  {session.name}
                </span>
                <span className="text-text-tertiary text-[10px]">
                  {session.cost}
                </span>
              </div>
            ))}

            <div className="mt-auto pt-3 border-t border-border">
              <div className="flex items-center justify-between px-2 text-[10px] text-text-tertiary">
                <span>Total cost</span>
                <span className="text-text-secondary">$4.84</span>
              </div>
              <div className="flex items-center justify-between px-2 mt-1 text-[10px] text-text-tertiary">
                <span>Uptime</span>
                <span className="text-text-secondary">2h 14m</span>
              </div>
            </div>
          </div>

          {/* Canvas area */}
          <div className="flex-1 relative bg-grid p-4 overflow-hidden">
            {/* Session cards on canvas */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-6 left-6 w-56 md:w-64"
            >
              <SessionCard
                name="auth-refactor"
                repo="acme/backend"
                status="active"
                message='Refactoring auth middleware to use JWT tokens...'
                progress={72}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-6 right-6 w-56 md:w-64"
            >
              <SessionCard
                name="api-endpoints"
                repo="acme/backend"
                status="active"
                message="Adding CRUD endpoints for /users resource..."
                progress={45}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute bottom-16 left-10 w-56 md:w-64"
            >
              <SessionCard
                name="ui-dashboard"
                repo="acme/frontend"
                status="idle"
                message="Waiting for review feedback..."
                progress={100}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute bottom-16 right-10 w-56 md:w-64"
            >
              <SessionCard
                name="test-coverage"
                repo="acme/backend"
                status="active"
                message="Writing integration tests for auth module..."
                progress={28}
              />
            </motion.div>

            {/* Connection lines - SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <line
                x1="30%"
                y1="25%"
                x2="70%"
                y2="25%"
                stroke="rgba(203,166,247,0.15)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="30%"
                y1="25%"
                x2="25%"
                y2="70%"
                stroke="rgba(137,180,250,0.15)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="70%"
                y1="25%"
                x2="75%"
                y2="70%"
                stroke="rgba(203,166,247,0.10)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SessionCard({
  name,
  repo,
  status,
  message,
  progress,
}: {
  name: string;
  repo: string;
  status: "active" | "idle";
  message: string;
  progress: number;
}) {
  return (
    <div className="glass rounded-lg p-3 relative z-10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <div
            className={`w-2 h-2 rounded-full ${
              status === "active"
                ? "bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]"
                : "bg-zinc-500"
            }`}
          />
          <span className="text-xs font-mono text-text-primary">{name}</span>
        </div>
        <span className="text-[9px] text-text-tertiary font-mono">{repo}</span>
      </div>
      <p className="text-[10px] text-text-secondary leading-relaxed mb-2 line-clamp-2">
        {message}
      </p>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className={`h-full rounded-full ${
              progress === 100
                ? "bg-green-400/60"
                : "bg-gradient-to-r from-accent/60 to-accent-purple/60"
            }`}
          />
        </div>
        <span className="text-[9px] text-text-tertiary">{progress}%</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 glow-top" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[128px]" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-cyan/5 blur-[128px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-text-secondary bg-surface-light/30">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Early access opening soon
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-text-primary"
        >
          The command center for
          <br />
          <span className="gradient-text">AI-powered development</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          Orchestrate multiple AI coding sessions across repositories.
          Spatial canvas, real-time streaming, Git integration, and parallel
          development — all in one workbench.
        </motion.p>

        {/* Waitlist form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          {submitted ? (
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M4.5 9.5L7.5 12.5L13.5 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              You&apos;re on the list. We&apos;ll be in touch.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
            >
              <div className="relative flex-1 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-full bg-surface-light border border-border px-5 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>
              <button
                type="submit"
                className="btn-glow shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-cyan px-6 py-3 text-sm font-medium text-background transition-all hover:brightness-110 w-full sm:w-auto"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center text-xs text-text-tertiary"
        >
          No spam. Early access for the first 500 signups.
        </motion.p>

        {/* Mock UI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MockCanvasUI />
        </motion.div>
      </div>
    </section>
  );
}
