"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
      className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-full border border-white/15 px-3 text-white/80 transition-colors hover:border-white/40 hover:text-white"
    >
      <ArrowUp aria-hidden className="size-3.5" />
      Back to top
    </button>
  );
}
