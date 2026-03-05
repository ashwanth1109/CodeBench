"use client";

import { motion } from "framer-motion";
import LightboxImage from "./LightboxImage";

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[160px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[128px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent-cyan mb-3 tracking-wide uppercase">
            The Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
            Your spatial command center
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            See every session at a glance on the spatial canvas. Monitor
            progress, costs, and context usage across all your parallel coding
            sessions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glow behind */}
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-accent/15 via-accent-cyan/15 to-accent-cyan/10 blur-3xl opacity-50" />
          <div className="relative rounded-xl border border-border overflow-hidden shadow-2xl">
            <LightboxImage
              src="/images/map-view.jpg"
              alt="CodeBench map view — spatial canvas with multiple AI coding sessions"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "10x", label: "Faster iteration cycles" },
            { value: "∞", label: "Parallel sessions" },
            { value: "<$5", label: "Average session cost" },
            { value: "1-click", label: "Repo to PR pipeline" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text font-heading">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
