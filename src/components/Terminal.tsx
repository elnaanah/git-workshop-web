import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TerminalProps = {
  lines: string[];
  prompt?: string;
  typing?: string;
};

export function Terminal({ lines, prompt = "$", typing }: TerminalProps) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!typing) return;
    setTyped("");
    let i = 0;
    const timer = window.setInterval(() => {
      i += 1;
      setTyped(typing.slice(0, i));
      if (i >= typing.length) window.clearInterval(timer);
    }, 42);
    return () => window.clearInterval(timer);
  }, [typing]);

  return (
    <div className="code-window overflow-hidden text-left font-mono" dir="ltr">
      <div className="flex items-center gap-2 border-b border-gh-border bg-gh-card px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-gl-amber" />
        <span className="h-3 w-3 rounded-full bg-gh-green" />
        <span className="ms-3 text-xs text-gh-muted">workshop-terminal</span>
      </div>
      <div className="space-y-3 px-5 py-6 text-sm md:text-lg">
        {lines.map((line, index) => (
          <motion.div
            key={line + index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
            className="text-gh-muted"
          >
            <span className="text-gh-green">{prompt}</span> {line}
          </motion.div>
        ))}
        {typing && (
          <div className="text-gh-text">
            <span className="text-gh-green">{prompt}</span> {typed}
            <span className="ml-1 animate-pulse text-gl-orange">▌</span>
          </div>
        )}
      </div>
    </div>
  );
}
