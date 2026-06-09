import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Bot, Bug, CheckCircle2, Code2, ExternalLink, FileText, GitFork, GitPullRequest, MessageSquare, Rocket, Shield, Star, Users, XCircle, Zap } from "lucide-react";
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

function CiCdExplained() {
  const steps = [
    { icon: GitPullRequest, label: "Push / PR", color: "text-gh-blue", desc: "يرفع المطور الكود" },
    { icon: Shield, label: "CI يعمل", color: "text-gh-green", desc: "اختبارات تلقائية فورية" },
    { icon: CheckCircle2, label: "الكود سليم", color: "text-gh-green", desc: "جاهز للدمج" },
    { icon: Rocket, label: "CD ينشر", color: "text-gl-orange", desc: "نشر تلقائي للخادم" },
  ];

  return (
    <SlideShell
      eyebrow="CI/CD"
      title="CI/CD — من الكود إلى الإنتاج تلقائياً"
      subtitle="التكامل المستمر + التسليم المستمر · اكتشف المشاكل مبكراً، وسلّم بثقة."
    >
      <div className="flex flex-col gap-8">
        {/* Pipeline visual */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {steps.map(({ icon: Icon, label, color, desc }, i) => (
            <motion.div key={label} className="flex items-center gap-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}>
              <div className="glass rounded-2xl px-6 py-5 text-center min-w-[130px]">
                <Icon className={`mx-auto mb-2 h-10 w-10 ${color}`} />
                <p className="text-lg font-black">{label}</p>
                <p className="text-sm text-gh-muted mt-1">{desc}</p>
              </div>
              {i < steps.length - 1 && (
                <Zap className="h-6 w-6 text-gh-muted shrink-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CI vs CD cards */}
        <div className="grid gap-4 md:grid-cols-2">
          <motion.div className="glass rounded-3xl p-6 border-r-4 border-gh-green" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-8 w-8 text-gh-green" />
              <div>
                <h3 className="text-2xl font-black">CI — Continuous Integration</h3>
                <p className="text-lg text-gh-muted font-semibold">التكامل المستمر</p>
              </div>
            </div>
            <ul className="space-y-2 text-xl text-gh-muted leading-8">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-gh-green mt-1 shrink-0" />شغّل الاختبارات عند كل Push</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-gh-green mt-1 shrink-0" />اكتشف التعارضات قبل الدمج</li>
              <li className="flex gap-2"><XCircle className="h-5 w-5 text-red-400 mt-1 shrink-0" />امنع دمج الكود المكسور</li>
            </ul>
          </motion.div>
          <motion.div className="glass rounded-3xl p-6 border-r-4 border-gl-orange" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
            <div className="flex items-center gap-3 mb-3">
              <Rocket className="h-8 w-8 text-gl-orange" />
              <div>
                <h3 className="text-2xl font-black">CD — Continuous Delivery</h3>
                <p className="text-lg text-gh-muted font-semibold">التسليم / النشر المستمر</p>
              </div>
            </div>
            <ul className="space-y-2 text-xl text-gh-muted leading-8">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-gh-green mt-1 shrink-0" />حزّم التطبيق بعد نجاح CI</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-gh-green mt-1 shrink-0" />انشر تلقائياً على بيئة Staging</li>
              <li className="flex gap-2"><Rocket className="h-5 w-5 text-gl-orange mt-1 shrink-0" />أو انشر مباشرةً على Production</li>
            </ul>
          </motion.div>
        </div>
      </div>
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

function GitHubAsPortfolio() {
  const cvItems = [
    { label: "خبرة العمل", value: "0 سنوات" },
    { label: "مهارات", value: "Python, React, SQL" },
    { label: "مشاريع", value: "مشروع تخرج (PDF)" },
    { label: "التحقق", value: "لا يمكن التحقق" },
  ];

  const ghItems = [
    { icon: Star, color: "text-gl-amber", label: "12 Repository منشور", sub: "مشاريع حقيقية يمكن تجربتها" },
    { icon: GitPullRequest, color: "text-gh-blue", label: "340 Commit موثق", sub: "يثبت الاتساق والجدية" },
    { icon: ExternalLink, color: "text-gh-green", label: "مشروع live على الإنترنت", sub: "رابط واحد يغني عن ألف كلمة" },
    { icon: Users, color: "text-gl-orange", label: "مساهمة في فريق", sub: "PR و Review يثبتان العمل الجماعي" },
  ];

  return (
    <SlideShell
      eyebrow="Your Identity"
      title="ملفك على GitHub — سيرتك الذاتية التقنية"
      subtitle="المجند لا يقرأ PDF فقط — يفتح رابط GitHub ويرى تاريخك الحقيقي."
    >
      <div className="grid gap-5 md:grid-cols-2 h-full items-start">
        {/* CV التقليدي */}
        <motion.div
          className="glass rounded-3xl p-6 border border-red-400/20 flex flex-col gap-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-1">
            <FileText className="h-7 w-7 text-gh-muted" />
            <h3 className="text-2xl font-black text-gh-muted">CV التقليدي</h3>
            <span className="mr-auto text-xs font-bold px-3 py-1 rounded-full bg-red-400/10 text-red-400">ثابت · لا يمكن التحقق</span>
          </div>
          <div className="space-y-3">
            {cvItems.map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between rounded-2xl bg-gh-card/60 px-4 py-3 border border-gh-border/40">
                <span className="text-lg text-gh-muted">{label}</span>
                <span className="text-lg font-bold text-gh-text/60">{value}</span>
              </div>
            ))}
          </div>
          <p className="text-base text-gh-muted/70 text-center mt-1 italic">"أنا جيد في البرمجة" — بدون دليل</p>
        </motion.div>

        {/* GitHub Profile */}
        <motion.div
          className="glass rounded-3xl p-6 border border-gh-green/30 flex flex-col gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex items-center gap-3 mb-1">
            <Code2 className="h-7 w-7 text-gh-blue" />
            <h3 className="text-2xl font-black">GitHub Profile</h3>
            <span className="mr-auto text-xs font-bold px-3 py-1 rounded-full bg-gh-green/15 text-gh-green">حي · قابل للتحقق</span>
          </div>
          <div className="space-y-3">
            {ghItems.map(({ icon: Icon, color, label, sub }, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-gh-card/60 px-4 py-3 border border-gh-border/40"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.1 }}
              >
                <Icon className={`h-6 w-6 shrink-0 ${color}`} />
                <div>
                  <p className="text-lg font-bold">{label}</p>
                  <p className="text-sm text-gh-muted">{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Takeaway */}
      <motion.div
        className="glass rounded-2xl py-4 px-8 text-center mt-4 border border-gh-border/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <p className="text-xl font-black">
          <span className="text-gh-muted">لا تبني للدراسة فقط — </span>
          <span className="text-gh-green">انشر.</span>
          <span className="text-gh-muted"> كل مشروع على GitHub هو سطر حقيقي في سيرتك.</span>
        </p>
      </motion.div>
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
  { id: "github-cicd", section: "GitHub", title: "CI/CD من الكود إلى الإنتاج", keywords: ["ci", "cd", "pipeline", "automation"], notes: "اشرح الفرق بين CI و CD بمثال: CI يكتشف المشكلة، CD ينشر الحل.", component: CiCdExplained },
  { id: "github-scenario", section: "GitHub", title: "سيناريو فريق تطبيق ويب", keywords: ["team", "web app"], notes: "هذه الشريحة جسر مباشر إلى lab.", component: TeamWebAppScenario },
  { id: "github-portfolio", section: "GitHub", title: "ملفك على GitHub — سيرتك الذاتية التقنية", keywords: ["portfolio", "cv", "profile", "career"], notes: "ذكّر الطلاب: المجند يفتح GitHub قبل PDF. كل repo منشور هو دليل حقيقي على الكفاءة.", component: GitHubAsPortfolio },
];
