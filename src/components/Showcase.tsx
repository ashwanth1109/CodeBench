"use client";

import { motion } from "framer-motion";

function ChatMockUI() {
  return (
    <div className="rounded-xl border border-border overflow-hidden bg-surface shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-light/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 flex items-center justify-center gap-4">
          <button className="text-[10px] text-text-tertiary px-3 py-0.5 rounded">
            Map
          </button>
          <button className="text-[10px] text-text-primary px-3 py-0.5 rounded bg-white/5">
            Chat
          </button>
        </div>
      </div>

      <div className="flex h-[380px] md:h-[440px]">
        {/* Chat sidebar */}
        <div className="w-44 border-r border-border bg-surface-light/20 p-2.5 shrink-0">
          <div className="text-[9px] uppercase tracking-widest text-text-tertiary mb-2 px-1.5">
            auth-refactor
          </div>

          {/* Git status mini */}
          <div className="glass rounded-md p-2 mb-3">
            <div className="flex items-center justify-between text-[9px] mb-1">
              <span className="text-text-tertiary">Branch</span>
              <span className="text-accent-cyan font-mono">task/auth</span>
            </div>
            <div className="flex items-center justify-between text-[9px]">
              <span className="text-text-tertiary">Status</span>
              <span className="text-green-400">+147 −23</span>
            </div>
          </div>

          {/* Tool calls */}
          <div className="text-[9px] uppercase tracking-widest text-text-tertiary mb-1.5 px-1.5">
            Tool Calls
          </div>
          {[
            { tool: "Read", file: "auth.ts", color: "text-blue-400" },
            { tool: "Edit", file: "middleware.ts", color: "text-yellow-400" },
            { tool: "Write", file: "jwt.ts", color: "text-green-400" },
            { tool: "Bash", file: "pnpm test", color: "text-purple-400" },
          ].map((item) => (
            <div
              key={item.file}
              className="flex items-center gap-1.5 px-1.5 py-1 text-[10px] text-text-secondary"
            >
              <span className={`font-mono ${item.color}`}>{item.tool}</span>
              <span className="text-text-tertiary truncate">{item.file}</span>
            </div>
          ))}
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-4 space-y-4 overflow-hidden">
            {/* User message */}
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-lg rounded-br-sm bg-accent/15 border border-accent/20 px-3 py-2">
                <p className="text-xs text-text-primary">
                  Refactor the auth middleware to use JWT tokens instead of
                  session cookies. Keep backward compatibility for 2 weeks.
                </p>
              </div>
            </div>

            {/* AI message */}
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-lg rounded-bl-sm glass px-3 py-2">
                <p className="text-xs text-text-secondary leading-relaxed">
                  I&apos;ll refactor the authentication to use JWT. Here&apos;s
                  my approach:
                </p>
                <div className="mt-2 text-xs space-y-1">
                  <div className="flex items-start gap-2 text-text-secondary">
                    <span className="text-green-400 mt-0.5">1.</span>
                    <span>Create JWT utility module with sign/verify</span>
                  </div>
                  <div className="flex items-start gap-2 text-text-secondary">
                    <span className="text-green-400 mt-0.5">2.</span>
                    <span>Update middleware to check both JWT and cookies</span>
                  </div>
                  <div className="flex items-start gap-2 text-text-secondary">
                    <span className="text-green-400 mt-0.5">3.</span>
                    <span>Add deprecation headers for cookie auth</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-[9px] text-accent-purple font-mono">
                    editing middleware.ts
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                {/* Code block */}
                <div className="mt-2 rounded-md bg-black/40 p-2.5 font-mono text-[10px] leading-relaxed overflow-hidden">
                  <div>
                    <span className="text-accent-purple">import</span>
                    <span className="text-text-primary"> {"{ verify }"} </span>
                    <span className="text-accent-purple">from</span>
                    <span className="text-green-400"> &apos;jsonwebtoken&apos;</span>;
                  </div>
                  <div className="mt-1">
                    <span className="text-accent-purple">export function</span>
                    <span className="text-yellow-400"> authMiddleware</span>
                    <span className="text-text-tertiary">(req, res, next)</span>
                    <span className="text-text-primary"> {"{"}</span>
                  </div>
                  <div>
                    <span className="text-text-tertiary">{"  "}// Try JWT first, fall back to cookie</span>
                  </div>
                  <div>
                    <span className="text-accent-purple">{"  "}const</span>
                    <span className="text-text-primary"> token = </span>
                    <span className="text-yellow-400">extractToken</span>
                    <span className="text-text-primary">(req);</span>
                  </div>
                  <div className="text-text-tertiary">{"  "}...</div>
                </div>
              </div>
            </div>
          </div>

          {/* Input area */}
          <div className="border-t border-border p-3">
            <div className="flex items-center gap-2 rounded-lg bg-surface-light border border-border px-3 py-2">
              <span className="text-xs text-text-tertiary flex-1">
                Send a message...
              </span>
              <div className="flex items-center gap-1.5 text-text-tertiary">
                <kbd className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 border border-border">
                  ⌘
                </kbd>
                <kbd className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 border border-border">
                  ↵
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
            AI development, reimagined
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            A chat interface that understands your codebase. Watch AI read, edit,
            and test code — all streamed to your workbench in real-time.
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
          <div className="relative">
            <ChatMockUI />
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
              <div className="text-3xl md:text-4xl font-bold gradient-text">
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
