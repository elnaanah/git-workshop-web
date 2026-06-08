import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Boxes, GitMerge, Kanban, Rocket, Shield } from "lucide-react";
import { ComparisonCard } from "../../components/ComparisonCard";
import { MermaidDiagram } from "../../components/MermaidDiagram";
import { SlideShell } from "../../components/SlideShell";
import type { Slide } from "../../types";

function GitLabIntro() {
  const cards: Array<{ title: string; Icon: LucideIcon }> = [
    { title: "Projects", Icon: Boxes },
    { title: "Merge Requests", Icon: GitMerge },
    { title: "Boards", Icon: Kanban },
    { title: "Pipelines", Icon: Rocket },
  ];

  return (
    <SlideShell eyebrow="GitLab" title="GitLab منصة DevOps متكاملة حول Git" subtitle="تركز على إدارة المشروع، Merge Requests، CI/CD، وإمكانية الاستضافة الذاتية داخل المؤسسات.">
      <div className="grid h-full items-center gap-5 md:grid-cols-4">
        {cards.map(({ title, Icon }, index) => (
          <motion.div key={title} className="glass rounded-3xl p-7 text-center" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
            <Icon className="mx-auto mb-6 h-14 w-14 text-gl-orange" />
            <h3 className="text-2xl font-black">{title}</h3>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function GitHubVsGitLab() {
  const rows = [
    ["Repositories", "انتشار واسع ومجتمع ضخم.", "Projects مرتبطة بقوة بدورة DevOps."],
    ["Issues", "قوية للمشاريع المفتوحة والتعاون العام.", "Boards و Milestones متكاملة بعمق."],
    ["CI/CD", "Actions مرن ومباشر.", "Pipelines جزء مركزي من المنصة."],
    ["Teams", "ممتاز للتعاون والمراجعة.", "مناسب للشركات التي تريد منصة واحدة."],
    ["Education", "Student Developer Pack قوي جداً.", "مفيد للتدريب المؤسسي والمختبرات الخاصة."],
  ];
  return (
    <SlideShell eyebrow="Comparison" title="GitHub VS GitLab" subtitle="ليست معركة أدوات. المهارة الأساسية هي Git Workflow وتنتقل بين المنصتين.">
      <div className="grid gap-3">
        {rows.map(([title, github, gitlab], index) => <ComparisonCard key={title} title={title} github={github} gitlab={gitlab} index={index} />)}
      </div>
    </SlideShell>
  );
}

function ProjectManagement() {
  return (
    <SlideShell eyebrow="Project Management" title="GitLab داخل الفرق" subtitle="Issues + Boards + Milestones + Merge Requests + Pipelines تجعل العمل قابلاً للتتبع من الفكرة إلى النشر.">
      <MermaidDiagram chart={`flowchart LR\n  Idea[Idea] --> Issue[Issue]\n  Issue --> Board[Board]\n  Board --> MR[Merge Request]\n  MR --> Pipeline[CI/CD Pipeline]\n  Pipeline --> Release[Release]`} />
    </SlideShell>
  );
}

function CiCdIntro() {
  return (
    <SlideShell eyebrow="CI/CD" title="CI/CD بشكل تمهيدي" subtitle="الفكرة: لا تنتظر نهاية المشروع لاكتشاف أن الكود لا يعمل. اختبر مبكراً وبشكل تلقائي.">
      <div className="grid h-full items-center gap-8 md:grid-cols-2">
        <div className="glass rounded-3xl p-8">
          <Shield className="mb-7 h-14 w-14 text-gh-green" />
          <h3 className="text-4xl font-black">CI</h3>
          <p className="mt-4 text-xl leading-9 text-gh-muted">تشغيل الاختبارات عند كل تغيير للتأكد من عدم كسر المشروع.</p>
        </div>
        <div className="glass rounded-3xl p-8">
          <Rocket className="mb-7 h-14 w-14 text-gl-orange" />
          <h3 className="text-4xl font-black">CD</h3>
          <p className="mt-4 text-xl leading-9 text-gh-muted">تجهيز أو نشر النسخة بعد نجاح الاختبارات حسب سياسة الفريق.</p>
        </div>
      </div>
    </SlideShell>
  );
}

export const gitlabSlides: Slide[] = [
  { id: "gitlab-intro", section: "GitLab", title: "ما هو GitLab؟", keywords: ["gitlab", "devops"], notes: "وضح أنه منصة فوق Git مع تركيز DevOps.", component: GitLabIntro },
  { id: "gitlab-compare", section: "GitLab", title: "GitHub VS GitLab", keywords: ["comparison"], notes: "قدم المقارنة بلا تحيز، فالأساس هو Git.", component: GitHubVsGitLab },
  { id: "gitlab-management", section: "GitLab", title: "GitLab لإدارة المشاريع", keywords: ["boards", "milestones"], notes: "اربط Merge Request بفكرة Pull Request.", component: ProjectManagement },
  { id: "gitlab-cicd", section: "GitLab", title: "CI/CD تمهيدي", keywords: ["ci", "cd", "pipeline"], notes: "اشرح CI/CD كمراجعة تلقائية متكررة.", component: CiCdIntro },
];
