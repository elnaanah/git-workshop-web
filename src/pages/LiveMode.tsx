import { motion } from "framer-motion";
import { GitBranch, Play, TerminalSquare } from "lucide-react";
import { useMemo, useState } from "react";

const commands = [
  { cmd: "git init", out: "Initialized empty Git repository", stage: "Repository created", nodes: 1 },
  { cmd: "git add .", out: "Changes staged for commit", stage: "Working files moved to stage", nodes: 1 },
  { cmd: "git commit -m \"first commit\"", out: "[main a1b2c3d] first commit", stage: "First commit on main", nodes: 2 },
  { cmd: "git branch feature/header", out: "Created branch feature/header", stage: "Feature branch ready", nodes: 3 },
  { cmd: "git merge feature/header", out: "Fast-forward merge completed", stage: "Feature merged", nodes: 4 },
  { cmd: "git push origin main", out: "main -> main", stage: "Remote updated", nodes: 5 },
];

export function LiveMode() {
  const [active, setActive] = useState(0);
  const history = useMemo(() => commands.slice(0, active + 1), [active]);

  return (
    <main className="min-h-screen overflow-auto bg-gh-bg text-gh-text">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr_380px]">
        <aside className="border-b border-gh-border bg-[#0b1017] p-4 lg:border-b-0 lg:border-r">
          <div className="mb-5 flex items-center gap-3">
            <GitBranch className="h-6 w-6 text-gl-orange" />
            <div>
              <div className="font-mono text-xs text-gh-muted">Live Coding</div>
              <h1 className="font-bold">Git Command Lab</h1>
            </div>
          </div>
          <div className="space-y-2">
            {commands.map((item, index) => (
              <button
                key={item.cmd}
                onClick={() => setActive(index)}
                className={`flex w-full items-center gap-2 rounded-xl border px-3 py-3 text-left font-mono text-sm transition ${
                  index === active ? "border-gl-orange bg-gl-orange/10 text-gh-text" : "border-gh-border bg-gh-card/50 text-gh-muted hover:text-gh-text"
                }`}
              >
                <Play className="h-4 w-4" />
                {item.cmd}
              </button>
            ))}
          </div>
        </aside>

        <section className="bg-[#090c10] p-4 md:p-6">
          <div className="mb-4 flex items-center gap-2 border-b border-gh-border pb-3 font-mono text-sm text-gh-muted">
            <TerminalSquare className="h-5 w-5 text-gh-green" />
            bash - git-workshop
          </div>
          <div className="min-h-[520px] rounded-xl bg-black/40 p-5 font-mono text-sm leading-8 md:text-base" dir="ltr">
            {history.map((item, index) => (
              <motion.div key={item.cmd} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }}>
                <div><span className="text-gh-green">$</span> <span className="text-gh-text">{item.cmd}</span></div>
                <div className="mb-3 text-gh-muted">{item.out}</div>
              </motion.div>
            ))}
            <span className="animate-pulse text-gl-orange">|</span>
          </div>
        </section>

        <aside className="border-t border-gh-border bg-[#0b1017] p-4 lg:border-l lg:border-t-0">
          <div className="mb-4 font-mono text-xs uppercase text-gl-orange">Git Graph</div>
          <div className="rounded-2xl border border-gh-border bg-gh-card/50 p-4">
            <svg viewBox="0 0 340 360" className="h-[420px] w-full">
              <motion.path d="M80 54 V290" stroke="#58a6ff" strokeWidth="6" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
              {active >= 3 && (
                <motion.path
                  d="M80 150 C150 150 150 230 230 230"
                  stroke="#fc6d26"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                />
              )}
              {commands.slice(0, commands[active].nodes).map((item, index) => (
                <motion.g key={item.cmd} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.08 }}>
                  <circle cx={index >= 3 ? 230 : 80} cy={54 + index * 58} r="13" fill={index >= 3 ? "#fc6d26" : "#58a6ff"} />
                  <text x={index >= 3 ? 252 : 104} y={60 + index * 58} fill="#f0f6fc" fontSize="14" fontFamily="Consolas">
                    {index >= 3 ? "feature" : "main"}
                  </text>
                </motion.g>
              ))}
            </svg>
            <div className="rounded-xl border border-gh-border bg-black/30 p-3 text-sm text-gh-muted">{commands[active].stage}</div>
          </div>
        </aside>
      </div>
    </main>
  );
}
