import { motion } from "framer-motion";
import { BookOpen, Check, GitCommitHorizontal, ListChecks, TerminalSquare } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";
import { CommandExplorer } from "../../components/CommandExplorer";
import { SlideShell } from "../../components/SlideShell";
import { Terminal } from "../../components/Terminal";
import type { Slide } from "../../types";

function InitClone() {
  return (
    <SlideShell eyebrow="Git Basics" title="git init أم git clone؟" subtitle="ابدأ مشروعاً جديداً بـ init، وانضم إلى مشروع موجود بـ clone.">
      <div className="grid h-full items-center gap-6 md:grid-cols-2">
        <CodeBlock title="new-project.sh" code={`mkdir graduation-app\ncd graduation-app\ngit init`} />
        <CodeBlock title="join-team.sh" code={`git clone https://github.com/team/graduation-app.git\ncd graduation-app\ngit status`} />
      </div>
    </SlideShell>
  );
}

function StatusAdd() {
  return (
    <SlideShell eyebrow="Observe then Stage" title="git status و git add" subtitle="لا تحفظ شيئاً قبل أن تعرف ماذا تغيّر.">
      <div className="grid h-full items-center gap-8 md:grid-cols-[1.1fr_.9fr]">
        <Terminal lines={["git status", "modified: src/Login.tsx", "untracked: secrets.env", "git add src/Login.tsx"]} />
        <div className="glass rounded-3xl p-8">
          <ListChecks className="mb-7 h-14 w-14 text-gh-green" />
          <h3 className="text-4xl font-black">قاعدة عملية</h3>
          <p className="mt-5 text-2xl leading-10 text-gh-muted">استخدم staging لاختيار التغييرات المنطقية فقط. تجنب `git add .` إذا لم تراجع الملفات.</p>
        </div>
      </div>
    </SlideShell>
  );
}

function CommitLog() {
  return (
    <SlideShell eyebrow="Snapshots" title="git commit و git log" subtitle="commit الجيد لا يقول فقط ماذا تغيّر، بل لماذا كان التغيير ضرورياً.">
      <div className="grid h-full items-center gap-6 md:grid-cols-2">
        <CodeBlock title="good-commit.sh" code={`git add src/Login.tsx\ngit commit -m "Fix login validation for empty password"\ngit log --oneline`} />
        <div className="space-y-4">
          {[
            ["سيئ", "update"],
            ["أفضل", "Fix login validation error"],
            ["احترافي", "Fix empty password validation in login form"],
          ].map(([label, text], index) => (
            <motion.div key={text} className="glass rounded-2xl p-5" initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.12 }}>
              <div className="font-mono text-sm text-gl-orange">{label}</div>
              <div className="mt-2 text-2xl">{text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

function PullPush() {
  return (
    <SlideShell eyebrow="Collaboration Commands" title="git pull و git push" subtitle="pull يجلب تحديثات الفريق، و push يشارك عملك مع remote.">
      <div className="grid h-full items-center gap-6 md:grid-cols-2">
        <div className="glass rounded-3xl p-8">
          <TerminalSquare className="mb-6 h-14 w-14 text-gh-blue" />
          <h3 className="text-3xl font-black">قبل أن تدفع</h3>
          <p className="mt-4 text-xl leading-9 text-gh-muted">اسحب تحديثات الفريق حتى لا تبني عملك فوق نسخة قديمة.</p>
        </div>
        <CodeBlock title="sync.sh" code={`git pull origin main\ngit push origin feature/contact-page`} />
      </div>
    </SlideShell>
  );
}

function CommandExplorerSlide() {
  return (
    <SlideShell eyebrow="Interactive" title="Git Command Explorer" subtitle="اضغط على الأمر لترى ماذا يفعل، متى يستخدم، ومثالاً واقعياً.">
      <CommandExplorer />
    </SlideShell>
  );
}

function CheatMap() {
  const items = ["clone/init", "status", "add", "commit", "pull", "push", "branch", "merge"];
  return (
    <SlideShell eyebrow="Daily Map" title="خريطة أوامر Git اليومية" subtitle="الأوامر ليست قائمة للحفظ؛ إنها مراحل في دورة عمل واحدة.">
      <div className="grid gap-4 md:grid-cols-4">
        {items.map((item, index) => (
          <motion.div key={item} className="glass rounded-3xl p-6 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
            <GitCommitHorizontal className="mx-auto mb-4 h-10 w-10 text-gl-orange" />
            <div className="font-mono text-xl">{item}</div>
            <Check className="mx-auto mt-4 h-5 w-5 text-gh-green" />
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function CommonMistakesGit() {
  return (
    <SlideShell eyebrow="Quality" title="أخطاء Git الشائعة" subtitle="معظم مشاكل Git ليست لأن الأداة صعبة، بل لأن سير العمل غير منظم.">
      <div className="grid h-full items-center gap-5 md:grid-cols-3">
        {["رفع secrets.env", "رسائل commit غامضة", "حل conflict بحذف كود الآخرين", "عدم عمل pull", "إضافة ملفات build", "تجميع تغييرات كثيرة في commit واحد"].map((item, index) => (
          <motion.div key={item} className="glass rounded-3xl p-6 text-xl" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.08 }}>
            <BookOpen className="mb-5 h-10 w-10 text-red-400" />
            {item}
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

export const gitBasicsSlides: Slide[] = [
  { id: "git-init-clone", section: "Git عملياً", title: "git init و git clone", keywords: ["init", "clone"], notes: "اعط مثال مشروع جديد ومثال الانضمام لمشروع فريق.", component: InitClone },
  { id: "git-status-add", section: "Git عملياً", title: "git status و git add", keywords: ["status", "add", "staging"], notes: "أكد أن staging قرار واع وليس خطوة ميكانيكية.", component: StatusAdd },
  { id: "git-commit-log", section: "Git عملياً", title: "git commit و git log", keywords: ["commit", "log"], notes: "قارن رسائل commit السيئة والجيدة.", component: CommitLog },
  { id: "git-pull-push", section: "Git عملياً", title: "git pull و git push", keywords: ["pull", "push", "remote"], notes: "اشرح remote كنسخة مشتركة لا كبديل عن Git المحلي.", component: PullPush },
  { id: "git-command-explorer", section: "Git عملياً", title: "Git Command Explorer", keywords: ["interactive", "commands"], notes: "استخدم هذه الشريحة للتفاعل مع الطلاب وسؤالهم متى يستخدم كل أمر.", component: CommandExplorerSlide },
];
