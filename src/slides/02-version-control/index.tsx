import { motion } from "framer-motion";
import { Cloud, Database, GitBranch, HardDrive, Network, Server } from "lucide-react";
import { MermaidDiagram } from "../../components/MermaidDiagram";
import { SlideShell } from "../../components/SlideShell";
import { Timeline } from "../../components/Timeline";
import { WorkflowDiagram } from "../../components/WorkflowDiagram";
import type { Slide } from "../../types";

function WhatIsVcs() {
  return (
    <SlideShell eyebrow="Version Control" title="ما هو Version Control؟" subtitle="نظام يسجل تاريخ المشروع كقرارات قابلة للرجوع والمقارنة والمراجعة.">
      <div className="grid h-full items-center gap-8 md:grid-cols-[.9fr_1.1fr]">
        <Timeline items={["تعديل ملف", "اختيار التغيير", "حفظ commit", "مقارنة النسخ", "الرجوع عند الحاجة"]} />
        <div className="glass rounded-3xl p-8 text-2xl leading-10 text-gh-muted">
          Version Control يحول المشروع من ملف نهائي مجهول إلى تاريخ واضح: من غيّر؟ ماذا غيّر؟ لماذا؟ ومتى؟
        </div>
      </div>
    </SlideShell>
  );
}

function VcsTypes() {
  const cards = [
    ["Local", "السجل موجود على جهاز واحد", HardDrive],
    ["Centralized", "خادم مركزي والكل يتصل به", Server],
    ["Distributed", "كل مطور يملك تاريخ المشروع كاملاً", Network],
  ] as const;
  return (
    <SlideShell eyebrow="Models" title="Local vs Centralized vs Distributed" subtitle="Git موزع، لذلك يستطيع المطور العمل محلياً ثم مشاركة عمله لاحقاً.">
      <div className="grid h-full items-center gap-5 md:grid-cols-3">
        {cards.map(([title, body, Icon], index) => (
          <motion.div key={title} className="glass rounded-3xl p-8" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.12 }}>
            <Icon className="mb-8 h-14 w-14 text-gl-orange" />
            <div className="font-mono text-sm text-gh-muted">{title}</div>
            <h3 className="mt-3 text-3xl font-black">{body}</h3>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function WhyGit() {
  return (
    <SlideShell eyebrow="Why Git" title="لماذا أصبح Git المعيار العالمي؟" subtitle="لأنه سريع محلياً، قوي في الفروع، ومناسب لفرق ومشاريع ضخمة.">
      <div className="grid h-full items-center gap-5 md:grid-cols-4">
        {[
          ["سرعة", "معظم العمليات تعمل محلياً."],
          ["Branches", "التجربة لا تكسر main."],
          ["History", "كل commit جزء من سجل المشروع."],
          ["Platforms", "GitHub و GitLab يبنيان فوق Git."],
        ].map(([title, body], index) => (
          <motion.div key={title} className="glass rounded-3xl p-7" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}>
            <GitBranch className="mb-7 h-12 w-12 text-gh-green" />
            <h3 className="text-3xl font-black">{title}</h3>
            <p className="mt-4 text-xl leading-8 text-gh-muted">{body}</p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function MentalModel() {
  return (
    <SlideShell eyebrow="Mental Model" title="Git يرى المشروع كسلسلة Snapshots" subtitle="Commit لقطة موثقة، Branch مؤشر يتحرك، و HEAD مكان وقوفك الحالي.">
      <MermaidDiagram chart={`gitGraph\n  commit id: "C1"\n  commit id: "C2"\n  branch feature\n  checkout feature\n  commit id: "F1"\n  commit id: "F2"\n  checkout main\n  commit id: "C3"\n  merge feature id: "M1"`} />
    </SlideShell>
  );
}

function Lifecycle() {
  return (
    <SlideShell eyebrow="Lifecycle" title="Local → Stage → Commit → Remote" subtitle="هذه هي الحركة اليومية التي ستكررها في أغلب مشاريعك.">
      <div className="mt-20">
        <WorkflowDiagram />
      </div>
    </SlideShell>
  );
}

function RemoteIdea() {
  return (
    <SlideShell eyebrow="Remote" title="Remote ليس Git نفسه" subtitle="Git يعمل على جهازك. GitHub و GitLab يضيفان مكاناً مشتركاً للفريق والمراجعة والإدارة.">
      <div className="grid h-full items-center gap-8 md:grid-cols-2">
        <div className="glass rounded-3xl p-8">
          <Database className="mb-6 h-14 w-14 text-gh-blue" />
          <h3 className="text-4xl font-black">Local Repository</h3>
          <p className="mt-4 text-xl leading-9 text-gh-muted">تاريخ كامل على جهازك، commits وفروع وتجارب.</p>
        </div>
        <div className="glass rounded-3xl p-8">
          <Cloud className="mb-6 h-14 w-14 text-gl-orange" />
          <h3 className="text-4xl font-black">Remote Platform</h3>
          <p className="mt-4 text-xl leading-9 text-gh-muted">نسخة مشتركة، Pull Requests، Issues، Review، و CI/CD.</p>
        </div>
      </div>
    </SlideShell>
  );
}

export const versionControlSlides: Slide[] = [
  { id: "vcs-what", section: "Version Control", title: "ما هو Version Control؟", keywords: ["version control", "history"], notes: "شبهه بسجل طبي للمشروع: التاريخ مهم بقدر الحالة الحالية.", component: WhatIsVcs },
  { id: "vcs-types", section: "Version Control", title: "أنواع Version Control", keywords: ["local", "centralized", "distributed"], notes: "وضح لماذا تقليل نقطة الفشل الواحدة مهم للفرق.", component: VcsTypes },
  { id: "vcs-why-git", section: "Version Control", title: "لماذا Git؟", keywords: ["why git", "branches"], notes: "Git صمم لمشاريع كبيرة وسريعة التغيير، لذلك يناسب الفرق.", component: WhyGit },
  { id: "vcs-mental", section: "Version Control", title: "Git Mental Model", keywords: ["snapshot", "head", "branch"], notes: "لا تتعمق داخلياً. يكفي فهم commit و branch و HEAD.", component: MentalModel },
  { id: "vcs-lifecycle", section: "Version Control", title: "Git Lifecycle", keywords: ["local stage commit remote"], notes: "استخدم مثال تعديل CSS فقط دون HTML لشرح staging.", component: Lifecycle },
];
