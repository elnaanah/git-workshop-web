import { motion } from "framer-motion";
import { Globe, Layers } from "lucide-react";
import { SlideShell } from "../../components/SlideShell";
import type { Slide } from "../../types";

const platforms = [
  {
    name: "GitHub",
    icon: Globe,
    color: "text-gh-blue",
    border: "border-gh-blue/40",
    bg: "bg-gh-blue/10",
    tag: "المجتمع المفتوح",
    tagColor: "text-gh-blue",
    points: ["أكبر مجتمع مطورين في العالم", "Pull Requests + Actions + Copilot", "الخيار الأول للمشاريع المفتوحة"],
    note: "نركز عليه اليوم",
    noteColor: "bg-gh-blue/20 text-gh-blue",
  },
  {
    name: "GitLab",
    icon: Layers,
    color: "text-gl-orange",
    border: "border-gl-orange/40",
    bg: "bg-gl-orange/10",
    tag: "المؤسسات وDevOps",
    tagColor: "text-gl-orange",
    points: ["منصة DevOps متكاملة في مكان واحد", "CI/CD و Pipelines مدمجَين بعمق", "استضافة ذاتية داخل الشركات"],
    note: "شائع في بيئات العمل",
    noteColor: "bg-gl-orange/20 text-gl-orange",
  },
];

function PlatformsMention() {
  return (
    <SlideShell
      eyebrow="Git Ecosystem"
      title="GitHub و GitLab — نفس الأساس"
      subtitle="ما تتعلمه اليوم يعمل على أي منصة. المهارة في Git Workflow، لا في الواجهة."
    >
      <div className="flex flex-col gap-6">
        {/* Platform cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {platforms.map(({ name, icon: Icon, color, border, bg, tag, tagColor, points, note, noteColor }, i) => (
            <motion.div
              key={name}
              className={`glass rounded-3xl p-6 border ${border} flex flex-col gap-4`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className={`h-8 w-8 ${color}`} />
                  <h3 className="text-2xl font-black">{name}</h3>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${bg} ${tagColor}`}>{tag}</span>
              </div>

              <ul className="flex flex-col gap-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-lg text-gh-muted leading-7">
                    <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${color.replace("text-", "bg-")}`} />
                    {p}
                  </li>
                ))}
              </ul>

              <div className={`mt-auto text-center text-sm font-bold px-3 py-2 rounded-2xl ${noteColor}`}>
                {note}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Takeaway */}
        <motion.div
          className="glass rounded-2xl py-5 px-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-2xl font-black tracking-wide">
            <span className="text-gh-muted">سواء كنت في </span>
            <span className="text-gh-blue">GitHub</span>
            <span className="text-gh-muted"> أو </span>
            <span className="text-gl-orange">GitLab</span>
            <span className="text-gh-muted"> — </span>
            <span className="text-white">Git هو الثابت الوحيد.</span>
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}

export const gitlabSlides: Slide[] = [
  {
    id: "gitlab-mention",
    section: "Git Ecosystem",
    title: "Git واحد — المنصات خيار",
    keywords: ["gitlab", "platforms", "ecosystem"],
    notes: "شدد أن المهارة المكتسبة اليوم تنتقل لأي منصة. GitHub هو تركيزنا لأنه الأشهر والأقوى للطلاب.",
    component: PlatformsMention,
  },
];
