"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="relative py-24 md:py-32">
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
            Join the waitlist to get early access. Be among the first developers
            to experience AI-native development at scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-green-400">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 10.5L8.5 14L15 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">
                You&apos;re on the list! We&apos;ll be in touch soon.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full flex-1 rounded-full bg-surface-light border border-border px-5 py-3.5 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
              />
              <button
                type="submit"
                className="btn-glow shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-cyan px-8 py-3.5 text-sm font-medium text-background transition-all hover:brightness-110 w-full sm:w-auto"
              >
                Get Early Access
              </button>
            </form>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-xs text-text-tertiary"
        >
          Free during early access. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
