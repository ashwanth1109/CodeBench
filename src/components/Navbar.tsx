"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Showcase", href: "#showcase" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent to-accent-cyan" />
            <div className="absolute inset-[2px] rounded-[6px] bg-background flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-accent"
              >
                <path
                  d="M2 4L7 2L12 4V10L7 12L2 10V4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 2V12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M2 4L7 6L12 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
          <span className="text-lg font-semibold text-text-primary tracking-tight font-heading">
            CodeBench
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://github.com/ashwanth1109/CodeBench/releases/latest/download/CodeBench.dmg"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-cyan px-5 py-2 text-sm font-medium text-background transition-all hover:brightness-110"
        >
          Download
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 2.5V9.5M7 9.5L4 6.5M7 9.5L10 6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 10.5V11.5C2.5 11.7761 2.72386 12 3 12H11C11.2761 12 11.5 11.7761 11.5 11.5V10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </motion.nav>
  );
}
