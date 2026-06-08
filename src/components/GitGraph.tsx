import { motion } from "framer-motion";

type GitGraphProps = {
  showFeature?: boolean;
  merged?: boolean;
};

const MAIN_Y = 120;
const FEAT_Y = 250;
const COLOR_MAIN = "#fc8c4b";
const COLOR_FEAT = "#d6409f";
const COLOR_MERGE = "#2ea043";

const mainCommits = [
  { x: 150, label: "C1" },
  { x: 300, label: "C2" },
  { x: 620, label: "C3" },
  { x: 770, label: "M1", c: COLOR_MERGE },
];

const featCommits = [
  { x: 410, label: "F1" },
  { x: 540, label: "F2" },
];

export function GitGraph({ showFeature = true, merged = true }: GitGraphProps) {
  const feats = showFeature ? featCommits : [];
  return (
    <svg viewBox="0 0 900 360" className="h-full w-full" role="img" aria-label="Git commit graph">
      <defs>
        <filter id="gg-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* main line */}
      <motion.path
        d={`M150 ${MAIN_Y} H770`}
        stroke={COLOR_MAIN}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />

      {/* feature branch off C2, merge back into M1 */}
      {showFeature && (
        <motion.path
          d={`M300 ${MAIN_Y} C300 ${FEAT_Y} 360 ${FEAT_Y} 410 ${FEAT_Y} H540 C700 ${FEAT_Y} 770 ${FEAT_Y} 770 ${merged ? MAIN_Y : FEAT_Y}`}
          stroke={COLOR_FEAT}
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
        />
      )}

      {/* branch pills */}
      <BranchPill x={150} y={MAIN_Y} label="main" color={COLOR_MAIN} align="end" />
      {showFeature && <BranchPill x={355} y={FEAT_Y} label="feature" color={COLOR_FEAT} align="end" />}

      {/* main commits */}
      {mainCommits.map((commit, index) => (
        <CommitNode
          key={commit.label}
          x={commit.x}
          y={MAIN_Y}
          label={commit.label}
          color={commit.c ?? COLOR_MAIN}
          labelBelow
          delay={index * 0.13 + 0.2}
        />
      ))}

      {/* feature commits */}
      {feats.map((commit, index) => (
        <CommitNode
          key={commit.label}
          x={commit.x}
          y={FEAT_Y}
          label={commit.label}
          color={COLOR_FEAT}
          labelBelow
          delay={index * 0.13 + 0.7}
        />
      ))}
    </svg>
  );
}

function CommitNode({
  x,
  y,
  label,
  color,
  labelBelow,
  delay,
}: {
  x: number;
  y: number;
  label: string;
  color: string;
  labelBelow?: boolean;
  delay: number;
}) {
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 18 }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      <circle cx={x} cy={y} r="15" fill={color} filter="url(#gg-glow)" />
      <circle cx={x} cy={y} r="6" fill="#0d1117" opacity="0.55" />
      <text
        x={x}
        y={labelBelow ? y + 42 : y - 30}
        fill="#f0f6fc"
        fontSize="22"
        fontFamily="Consolas, monospace"
        fontWeight="700"
        textAnchor="middle"
      >
        {label}
      </text>
    </motion.g>
  );
}

function BranchPill({
  x,
  y,
  label,
  color,
  align,
}: {
  x: number;
  y: number;
  label: string;
  color: string;
  align: "start" | "end";
}) {
  const width = label.length * 13 + 28;
  const px = align === "end" ? x - width - 26 : x + 26;
  return (
    <motion.g initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
      <rect x={px} y={y - 21} width={width} height={42} rx={21} fill={color} opacity="0.16" stroke={color} strokeWidth="1.5" />
      <text x={px + width / 2} y={y + 7} fill={color} fontSize="22" fontFamily="Consolas, monospace" fontWeight="700" textAnchor="middle">
        {label}
      </text>
    </motion.g>
  );
}
