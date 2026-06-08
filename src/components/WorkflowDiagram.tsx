import { motion } from "framer-motion";
import { Cloud, Database, FileCode, GitCommitHorizontal } from "lucide-react";

const items = [
  { label: "Local", desc: "Working Directory", icon: FileCode, color: "text-gh-blue" },
  { label: "Stage", desc: "git add", icon: GitCommitHorizontal, color: "text-gl-orange" },
  { label: "Commit", desc: "Repository", icon: Database, color: "text-gh-green" },
  { label: "Remote", desc: "GitHub / GitLab", icon: Cloud, color: "text-gl-amber" },
];

export function WorkflowDiagram() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            className="glass relative rounded-3xl p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.14 }}
          >
            <Icon className={`mb-5 h-10 w-10 ${item.color}`} />
            <div className="font-mono text-sm text-gh-muted">{index + 1}</div>
            <h3 className="mt-2 text-2xl font-black">{item.label}</h3>
            <p className="mt-2 text-gh-muted">{item.desc}</p>
            {index < items.length - 1 && <div className="absolute -left-5 top-1/2 hidden text-3xl text-gh-border md:block">←</div>}
          </motion.div>
        );
      })}
    </div>
  );
}
