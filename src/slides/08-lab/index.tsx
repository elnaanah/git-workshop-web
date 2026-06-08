import { motion } from "framer-motion";
import { CheckCircle, ClipboardList, GitPullRequest, Users } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";
import { SlideShell } from "../../components/SlideShell";
import { Timeline } from "../../components/Timeline";
import type { Slide } from "../../types";

function LabObjective() {
  return (
    <SlideShell eyebrow="Practical Lab" title="Lab: Repository جماعي" subtitle="المهمة: كل طالب يضيف مساهمة صغيرة عبر branch و Pull Request ثم يحصل على Review قبل الدمج.">
      <div className="grid h-full items-center gap-6 md:grid-cols-3">
        <div className="glass rounded-3xl p-8">
          <Users className="mb-6 h-14 w-14 text-gh-blue" />
          <h3 className="text-3xl font-black">فرق صغيرة</h3>
          <p className="mt-4 text-xl text-gh-muted">3 إلى 5 طلاب.</p>
        </div>
        <div className="glass rounded-3xl p-8">
          <ClipboardList className="mb-6 h-14 w-14 text-gl-orange" />
          <h3 className="text-3xl font-black">ملف team.md</h3>
          <p className="mt-4 text-xl text-gh-muted">كل طالب يضيف اسمه ودوره.</p>
        </div>
        <div className="glass rounded-3xl p-8">
          <GitPullRequest className="mb-6 h-14 w-14 text-gh-green" />
          <h3 className="text-3xl font-black">PR + Review</h3>
          <p className="mt-4 text-xl text-gh-muted">لا merge بدون مراجعة.</p>
        </div>
      </div>
    </SlideShell>
  );
}

function LabSteps() {
  return (
    <SlideShell eyebrow="Steps" title="خطوات التطبيق العملي" subtitle="هذه الخطوات موجودة أيضاً في /lab بوضع checklist قابل للتنفيذ.">
      <Timeline items={["Create Repository", "Invite Team", "Clone", "Create Branch", "Edit team.md", "Commit", "Push", "Open Pull Request", "Review", "Merge"]} />
    </SlideShell>
  );
}

function LabCommands() {
  return (
    <SlideShell eyebrow="Commands" title="أوامر الطالب أثناء التطبيق" subtitle="كل طالب ينفذ هذه الدورة على branch خاص به.">
      <CodeBlock title="lab.sh" code={`git clone <repository-url>\ncd team-web-demo\ngit switch -c feature/bashar-profile\n# edit team.md\ngit status\ngit add team.md\ngit commit -m "Add Bashar profile to team file"\ngit push origin feature/bashar-profile`} />
    </SlideShell>
  );
}

function ClosingSlide() {
  return (
    <SlideShell eyebrow="Summary" title="الخلاصة: Git طريقة عمل وليست أوامر فقط" subtitle="افهم المشكلة، اعزل التغيير، وثق القرار، راجع قبل الدمج، واجعل GitHub/GitLab مركز تعاون الفريق.">
      <div className="grid gap-4 md:grid-cols-5">
        {["Problem", "Branch", "Commit", "Review", "Merge"].map((item, index) => (
          <motion.div key={item} className="glass rounded-3xl p-7 text-center" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.12 }}>
            <CheckCircle className="mx-auto mb-5 h-12 w-12 text-gh-green" />
            <div className="font-mono text-2xl">{item}</div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

export const labSlides: Slide[] = [
  { id: "lab-objective", section: "Lab", title: "Lab Repository جماعي", keywords: ["lab", "repository"], notes: "قسّم الطلاب إلى فرق وحدد reviewer لكل فريق.", component: LabObjective },
  { id: "lab-steps", section: "Lab", title: "خطوات التطبيق", keywords: ["checklist", "steps"], notes: "وجه الطلاب إلى /lab للمتابعة العملية.", component: LabSteps },
  { id: "lab-commands", section: "Lab", title: "أوامر التطبيق", keywords: ["commands", "lab"], notes: "نفذ الأوامر ببطء واترك وقتاً للحاق.", component: LabCommands },
  { id: "closing-summary", section: "الخلاصة", title: "الخلاصة", keywords: ["summary", "closing"], notes: "اختم بأن Git بنية عمل لتقليل الفوضى ورفع جودة الفريق.", component: ClosingSlide },
];
