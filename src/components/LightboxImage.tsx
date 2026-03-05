"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LightboxImage({
  src,
  alt,
  width = 1920,
  height = 1080,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-pointer ${className}`}
        priority={priority}
        onClick={() => setOpen(true)}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
              />
              <button
                onClick={close}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 3L11 11M11 3L3 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
