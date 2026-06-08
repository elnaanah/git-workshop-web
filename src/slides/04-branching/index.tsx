import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { GitBranch, GitMerge, ShieldCheck, Split } from "lucide-react";
import { GitGraph } from "../../components/GitGraph";
import { SlideShell } from "../../components/SlideShell";
import type { Slide } from "../../types";

function BranchConcept() {
  return (
    <SlideShell eyebrow="Branching" title="Branch = مساحة آمنة للتجربة" subtitle="بدل أن تغيّر main مباشرة، اعزل الميزة الجديدة في فرع مستقل.">
      <div className="glass h-[58vh] rounded-3xl p-8">
        <GitGraph showFeature merged={false} />
      </div>
    </SlideShell>
  );
}

function MainFeatureMerge() {
  return (
    <SlideShell eyebrow="Strategy" title="main + feature + merge" subtitle="main يبقى مستقراً، والميزات تدخل بعد اختبار ومراجعة.">
      <div className="glass h-[58vh] rounded-3xl p-8">
        <GitGraph showFeature merged />
      </div>
    </SlideShell>
  );
}

function StudentFeature() {
  const steps: Array<{ title: string; body: string; Icon: LucideIcon }> = [
    { title: "Branch", body: "feature/contact-page", Icon: Split },
    { title: "Code", body: "تعديل الصفحة", Icon: GitBranch },
    { title: "Commit", body: "رسالة واضحة", Icon: ShieldCheck },
    { title: "Merge", body: "بعد المراجعة", Icon: GitMerge },
  ];

  return (
    <SlideShell eyebrow="Scenario" title="طالب يضيف Feature بدون تخريب المشروع" subtitle="إضافة صفحة Contact تصبح مهمة معزولة بدل تعديل مباشر على main.">
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map(({ title, body, Icon }, index) => (
          <motion.div key={title} className="glass rounded-3xl p-7" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.12 }}>
            <Icon className="mb-7 h-12 w-12 text-gl-orange" />
            <h3 className="text-3xl font-black">{title}</h3>
            <p className="mt-4 text-xl text-gh-muted">{body}</p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function ConflictSlide() {
  return (
    <SlideShell eyebrow="Conflict" title="Merge Conflict ليس كارثة" subtitle="يظهر عندما يعدّل شخصان نفس الجزء. الحل قرار هندسي: أي نسخة نريد؟">
      <div className="code-window mx-auto max-w-4xl p-6 text-left font-mono text-lg" dir="ltr">
        <pre className="text-red-300">{`<<<<<<< HEAD\n<button>Login</button>`}</pre>
        <pre className="text-gh-muted">{`=======`}</pre>
        <pre className="text-gh-blue">{`<button>Sign in</button>\n>>>>>>> feature/login-copy`}</pre>
      </div>
      <p className="mx-auto mt-8 max-w-4xl text-2xl leading-10 text-gh-muted">لا تحذف العلامات عشوائياً. اقرأ السياق، اختر أو ادمج، ثم اعمل commit للحل.</p>
    </SlideShell>
  );
}

export const branchingSlides: Slide[] = [
  { id: "branch-concept", section: "Branching", title: "Branch = مساحة آمنة", keywords: ["branch", "feature"], notes: "اشرح الفرع كمؤشر وليس نسخة كاملة من المشروع.", component: BranchConcept },
  { id: "branch-merge", section: "Branching", title: "main + feature + merge", keywords: ["main", "merge"], notes: "أكد أن main يجب أن يبقى صالحاً للعرض أو النشر.", component: MainFeatureMerge },
  { id: "branch-student", section: "Branching", title: "مثال طالب يضيف Feature", keywords: ["student", "feature"], notes: "اطلب من الطلاب توقع خطر التعديل المباشر على main.", component: StudentFeature },
  { id: "branch-conflict", section: "Branching", title: "Merge Conflict", keywords: ["conflict", "merge"], notes: "اجعل conflict طبيعياً ومفهوماً لا مخيفاً.", component: ConflictSlide },
];
