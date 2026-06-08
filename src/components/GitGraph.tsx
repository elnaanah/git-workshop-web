import { motion } from "framer-motion";

type GitGraphProps = {
  showFeature?: boolean;
  merged?: boolean;
};

const commits = [
  { x: 120, y: 210, c: "#58a6ff" },
  { x: 280, y: 210, c: "#58a6ff" },
  { x: 440, y: 210, c: "#58a6ff" },
  { x: 600, y: 210, c: "#58a6ff" },
];

const feature = [
  { x: 280, y: 210, c: "#fc6d26" },
  { x: 410, y: 105, c: "#fc6d26" },
  { x: 560, y: 105, c: "#fc6d26" },
  { x: 710, y: 210, c: "#2ea043" },
];

export function GitGraph({ showFeature = true, merged = true }: GitGraphProps) {
  return (
    <svg viewBox="0 0 820 330" className="h-full w-full">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d="M120 210 H600"
        stroke="#58a6ff"
        strokeWidth="8"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      {showFeature && (
        <motion.path
          d="M280 210 C340 210 350 105 410 105 H560 C620 105 650 210 710 210"
          stroke="#fc6d26"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 1.1 }}
        />
      )}
      {[...commits, ...(showFeature ? feature.slice(1, merged ? 4 : 3) : [])].map((commit, index) => (
        <motion.circle
          key={`${commit.x}-${commit.y}-${index}`}
          cx={commit.x}
          cy={commit.y}
          r="18"
          fill={commit.c}
          filter="url(#glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.13 + 0.2 }}
        />
      ))}
      <text x="625" y="218" fill="#f0f6fc" fontSize="28" fontFamily="Consolas">main</text>
      {showFeature && <text x="395" y="75" fill="#fca326" fontSize="26" fontFamily="Consolas">feature/login</text>}
      {merged && <text x="690" y="255" fill="#2ea043" fontSize="24" fontFamily="Consolas">merge</text>}
    </svg>
  );
}
