import { motion } from "framer-motion";

type TimelineProps = {
  items: string[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute right-5 top-0 h-full w-px bg-gh-border" />
      <div className="space-y-5">
        {items.map((item, index) => (
          <motion.div
            key={item}
            className="relative pr-14"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.11 }}
          >
            <span className="absolute right-0 top-1 h-10 w-10 rounded-full border-4 border-gh-bg bg-gl-orange shadow-glow" />
            <div className="glass rounded-2xl px-5 py-4 text-lg text-gh-text">{item}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
