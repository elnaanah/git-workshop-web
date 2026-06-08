import { motion } from "framer-motion";

type ComparisonCardProps = {
  title: string;
  github: string;
  gitlab: string;
  index: number;
};

export function ComparisonCard({ title, github, gitlab, index }: ComparisonCardProps) {
  return (
    <motion.div
      className="glass rounded-3xl p-5"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08 }}
    >
      <h3 className="mb-4 text-xl font-black text-gh-text">{title}</h3>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-gh-border bg-black/20 p-4">
          <div className="font-mono text-sm text-gh-blue">GitHub</div>
          <p className="mt-2 text-gh-muted">{github}</p>
        </div>
        <div className="rounded-2xl border border-gl-orange/50 bg-gl-orange/10 p-4">
          <div className="font-mono text-sm text-gl-orange">GitLab</div>
          <p className="mt-2 text-gh-muted">{gitlab}</p>
        </div>
      </div>
    </motion.div>
  );
}
