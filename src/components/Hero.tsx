"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const API_URL =
  "https://57vy3lgb3c.execute-api.us-east-1.amazonaws.com/prod/signup";

export default function Hero() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    designation: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-surface/50 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors";

  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Hero background illustration */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-illustration.png"
          alt=""
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
            </span>
            Early Access Preview
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

        {/* Early Access Sign-up */}
        <motion.div
          id="early-access"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col items-center gap-4 scroll-mt-24"
        >
          {status === "success" ? (
            <div className="glass rounded-xl p-8 text-center max-w-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-green-400"
                >
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-text-primary">
                You&apos;re on the list!
              </p>
              <p className="text-sm text-text-secondary mt-2">
                We&apos;ll reach out when early access is ready.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg space-y-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Name *"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  value={form.email}
                  onChange={update("email")}
                  className={inputClass}
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={form.company}
                  onChange={update("company")}
                  className={inputClass}
                />
                <input
                  type="text"
                  placeholder="Designation"
                  value={form.designation}
                  onChange={update("designation")}
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-glow w-full rounded-full bg-gradient-to-r from-accent to-accent-cyan px-8 py-3 text-sm font-medium text-background transition-all hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? "Submitting..."
                  : "Request Early Access"}
              </button>
              {status === "error" && (
                <p className="text-xs text-red-400 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
          <p className="text-xs text-text-tertiary">
            Early access preview — limited spots available. macOS only for now.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
