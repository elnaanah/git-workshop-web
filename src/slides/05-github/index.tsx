import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Bot, Bug, Code2, GitFork, GitPullRequest, MessageSquare, Users } from "lucide-react";
import { MermaidDiagram } from "../../components/MermaidDiagram";
import { SlideShell } from "../../components/SlideShell";
import type { Slide } from "../../types";

function GitHubIntro() {
  const cards: Array<{ title: string; body: string; Icon: LucideIcon }> = [
    { title: "Repository", body: "المشروع وتاريخه", Icon: Code2 },
    { title: "Collaboration", body: "فروع ومراجعات", Icon: Users },
    { title: "Automation", body: "اختبارات وتنبيهات", Icon: Bot },
  ];

  return (
    <SlideShell eyebrow="GitHub" title="Git هو الأداة، GitHub هو منصة التعاون" subtitle="Repository، Issues، Pull Requests، Review، و Actions تجعل الفريق يعمل حول الكود.">
      <div className="grid h-full items-center gap-5 md:grid-cols-3">
        {cards.map(({ title, body, Icon }, index) => (
          <motion.div key={title} className="glass rounded-3xl p-8" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.12 }}>
            <Icon className="mb-7 h-14 w-14 text-gh-blue" />
            <h3 className="text-3xl font-black">{title}</h3>
            <p className="mt-4 text-xl text-gh-muted">{body}</p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function RepoFork() {
  return (
    <SlideShell eyebrow="Repository / Fork" title="Repository و Fork" subtitle="Fork نسخة على حسابك من مشروع لا تملك صلاحية تعديله مباشرة.">
      <MermaidDiagram chart={`flowchart LR\n  A[Original Repository] --> B[Fork on your account]\n  B --> C[Branch]\n  C --> D[Pull Request]\n  D --> A`} />
    </SlideShell>
  );
}

function PullRequestFlow() {
  return (
    <SlideShell eyebrow="Pull Request" title="Pull Request هو مكان النقاش التقني" subtitle="ليس زر Merge فقط. إنه صفحة مراجعة: تغييرات، تعليقات، اختبارات، وقرار.">
      <MermaidDiagram chart={`flowchart LR\n  D[Developer] --> B[Branch]\n  B --> C[Commit]\n  C --> P[Pull Request]\n  P --> R[Review]\n  R --> M[Merge]\n  classDef hot fill:#fc6d26,stroke:#fca326,color:#fff\n  class P hot`} />
    </SlideShell>
  );
}

function IssuesSlide() {
  const issues: Array<{ title: string; body: string; Icon: LucideIcon }> = [
    { title: "Bug", body: "Navbar overlaps on mobile", Icon: Bug },
    { title: "Feature", body: "Add contact page", Icon: GitPullRequest },
    { title: "Question", body: "Which auth flow?", Icon: MessageSquare },
  ];

  return (
    <SlideShell eyebrow="Issues" title="Issues تحول الفوضى إلى قائمة عمل" subtitle="Bug، Feature، Question، أو Task يمكن ربطها بفرع و Pull Request.">
      <div className="grid gap-4 md:grid-cols-3">
        {issues.map(({ title, body, Icon }, index) => (
          <motion.div key={title} className="glass rounded-3xl p-7" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}>
            <Icon className="mb-6 h-12 w-12 text-gl-orange" />
            <div className="font-mono text-sm text-gh-muted">#{12 + index}</div>
            <h3 className="mt-2 text-3xl font-black">{title}</h3>
            <p className="mt-4 text-xl text-gh-muted">{body}</p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function CodeReviewSlide() {
  return (
    <SlideShell eyebrow="Code Review" title="المراجعة الجيدة ترفع جودة الفريق" subtitle="ناقش السبب، اقترح بديلاً، وراجع الكود لا الشخص.">
      <div className="grid h-full items-center gap-5 md:grid-cols-2">
        <div className="code-window p-6 text-left font-mono" dir="ltr">
          <p className="text-gh-green">+ if (!password) return "Password required";</p>
          <p className="mt-4 rounded-2xl border border-gh-border bg-gh-card p-4 text-gh-muted">Reviewer: Can we also trim spaces before validation?</p>
          <p className="mt-3 rounded-2xl border border-gh-border bg-gh-card p-4 text-gh-muted">Author: Good point. Updated in the next commit.</p>
        </div>
        <div className="glass rounded-3xl p-8 text-2xl leading-10 text-gh-muted">Code Review ليس لإثبات أن أحداً أخطأ. هو آلية تعلم جماعي وتقليل أخطاء قبل دخول الكود إلى main.</div>
      </div>
    </SlideShell>
  );
}

function ActionsSlide() {
  return (
    <SlideShell eyebrow="GitHub Actions" title="Automation كحارس جودة" subtitle="كل Pull Request يمكن أن يشغل اختبارات تلقائية قبل الدمج.">
      <MermaidDiagram chart={`flowchart LR\n  A[Push] --> B[Run Tests]\n  B --> C{Pass?}\n  C -->|Yes| D[Allow Merge]\n  C -->|No| E[Fix before merge]`} />
    </SlideShell>
  );
}

function TeamWebAppScenario() {
  return (
    <SlideShell eyebrow="Scenario" title="فريق طلاب يبني تطبيق ويب" subtitle="GitHub يصبح مركز العمل: issues للمهام، branches للتنفيذ، PR للمراجعة، و main للنسخة المستقرة.">
      <MermaidDiagram chart={`flowchart TD\n  Lead[Team Lead creates repository] --> Issues[Split work into Issues]\n  Issues --> FE[Frontend branch]\n  Issues --> BE[Backend branch]\n  Issues --> QA[Testing branch]\n  FE --> PR[Pull Requests]\n  BE --> PR\n  QA --> PR\n  PR --> Review[Code Review]\n  Review --> Main[Stable main]`} />
    </SlideShell>
  );
}

export const githubSlides: Slide[] = [
  { id: "github-intro", section: "GitHub", title: "ما هو GitHub؟", keywords: ["github", "repository"], notes: "فرق بوضوح بين Git و GitHub.", component: GitHubIntro },
  { id: "github-repo-fork", section: "GitHub", title: "Repository و Fork", keywords: ["repo", "fork"], notes: "استخدم مثال مشروع مفتوح المصدر.", component: RepoFork },
  { id: "github-pr", section: "GitHub", title: "Pull Request Flow", keywords: ["pull request", "pr"], notes: "شدد أن PR وثيقة تعاون لا مجرد زر دمج.", component: PullRequestFlow },
  { id: "github-issues", section: "GitHub", title: "Issues", keywords: ["issues", "tasks"], notes: "اربط Issue بفرع و PR لإغلاق المهمة.", component: IssuesSlide },
  { id: "github-review", section: "GitHub", title: "Code Review", keywords: ["review", "quality"], notes: "اعط قواعد مراجعة محترمة وواضحة.", component: CodeReviewSlide },
  { id: "github-actions", section: "GitHub", title: "GitHub Actions", keywords: ["actions", "ci"], notes: "لا تتعمق في YAML، ركز على الفكرة.", component: ActionsSlide },
  { id: "github-scenario", section: "GitHub", title: "سيناريو فريق تطبيق ويب", keywords: ["team", "web app"], notes: "هذه الشريحة جسر مباشر إلى lab.", component: TeamWebAppScenario },
];
