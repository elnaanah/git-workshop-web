import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SlideShellProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function SlideShell({ eyebrow, title, subtitle, children }: SlideShellProps) {
  return (
    <section className="slide stage-bg">
      <div className="absolute inset-0 bg-grid bg-[length:48px_48px] opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gl-orange/10 to-transparent" />
      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <header className="mb-6">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">{title}</h1>
          {subtitle && <p className="subhead mt-4">{subtitle}</p>}
        </header>
        <main className="min-h-0 flex-1">{children}</main>
      </motion.div>
    </section>
  );
}
