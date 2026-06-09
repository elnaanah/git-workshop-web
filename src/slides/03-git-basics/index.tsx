import { motion } from "framer-motion";
import { AlertTriangle, BookOpen, Check, CheckCircle2, GitCommitHorizontal, History, ListChecks, RotateCcw, Siren, TerminalSquare } from "lucide-react";
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

function GitRescue() {
  const timeline = [
    { icon: AlertTriangle, color: "text-red-400", bg: "bg-red-400/10 border-red-400/30", label: "الكارثة", desc: "المطور أو الذكاء الاصطناعي عدّل كوداً وكسر كل شيء" },
    { icon: History, color: "text-gh-blue", bg: "bg-gh-blue/10 border-gh-blue/30", label: "git log", desc: "شاهد تاريخ المشروع — كل commit موثق بالتاريخ والسبب" },
    { icon: RotateCcw, color: "text-gl-orange", bg: "bg-gl-orange/10 border-gl-orange/30", label: "git revert", desc: "أنشئ commit جديد يلغي التغيير الخاطئ بأمان" },
    { icon: CheckCircle2, color: "text-gh-green", bg: "bg-gh-green/10 border-gh-green/30", label: "المشروع بخير", desc: "عاد كما كان — الفريق لم يفقد شيئاً" },
  ];

  return (
    <SlideShell
      eyebrow="Git Rescue"
      title="عندما يتوقف المشروع عن العمل — Git يتذكر كل شيء"
      subtitle="سواء أخطأ مطور أو اقترح الذكاء الاصطناعي تعديلاً كسر المشروع، لديك مخرج دائماً."
    >
      <div className="flex flex-col gap-6">
        {/* Timeline */}
        <div className="grid gap-3 md:grid-cols-4">
          {timeline.map(({ icon: Icon, color, bg, label, desc }, i) => (
            <motion.div
              key={label}
              className={`glass rounded-3xl p-5 border ${bg} flex flex-col gap-3`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-2 ${bg}`}>
                  <Icon className={`h-7 w-7 ${color}`} />
                </div>
                <span className={`font-mono text-sm font-black ${color}`}>{label}</span>
              </div>
              <p className="text-lg leading-7 text-gh-muted">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Commands */}
        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            className="glass rounded-3xl p-5 border border-gh-border/60"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Siren className="h-5 w-5 text-red-400" />
              <span className="font-mono text-sm text-red-400 font-bold">السيناريو الحقيقي</span>
            </div>
            <div className="font-mono text-sm leading-7 text-gh-muted space-y-1" dir="ltr">
              <p><span className="text-gl-orange"># AI اقترح refactor وكسر الـ API</span></p>
              <p><span className="text-gh-green">$ git log --oneline</span></p>
              <p className="text-gh-text">a3f9c12 <span className="text-red-400">refactor: AI-suggested changes</span></p>
              <p className="text-gh-text">b1d4e87 feat: add contact form ✓</p>
              <p className="text-gh-text">c8a2f01 fix: mobile layout ✓</p>
            </div>
          </motion.div>

          <motion.div
            className="glass rounded-3xl p-5 border border-gh-green/30"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="h-5 w-5 text-gh-green" />
              <span className="font-mono text-sm text-gh-green font-bold">الإنقاذ بسطر واحد</span>
            </div>
            <div className="font-mono text-sm leading-7 text-gh-muted space-y-1" dir="ltr">
              <p><span className="text-gl-orange"># أعِد الحالة الآمنة</span></p>
              <p><span className="text-gh-green">$ git revert a3f9c12</span></p>
              <p className="text-gh-text">Revert "refactor: AI-suggested changes"</p>
              <p><span className="text-gh-green">$ git push origin main</span></p>
              <p className="text-gh-text">✓ المشروع عاد — بدون حذف أي تاريخ</p>
            </div>
          </motion.div>
        </div>

        {/* Takeaway */}
        <motion.div
          className="glass rounded-2xl py-4 px-8 text-center border border-gh-border/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xl font-black text-gh-muted">
            كل <span className="text-gh-blue">commit</span> هو نقطة إنقاذ. Git لا يحذف — <span className="text-gh-green">يتراجع بأمان.</span>
          </p>
        </motion.div>
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
  { id: "git-rescue", section: "Git عملياً", title: "عندما يتوقف المشروع عن العمل — Git ينقذ المشروع", keywords: ["revert", "rescue", "ai", "mistake", "recovery"], notes: "اذكر أن هذا الموقف حقيقي: سواء كان المطور أو الذكاء الاصطناعي. git revert آمن لأنه لا يحذف التاريخ.", component: GitRescue },
  { id: "git-pull-push", section: "Git عملياً", title: "git pull و git push", keywords: ["pull", "push", "remote"], notes: "اشرح remote كنسخة مشتركة لا كبديل عن Git المحلي.", component: PullPush },
  { id: "git-command-explorer", section: "Git عملياً", title: "Git Command Explorer", keywords: ["interactive", "commands"], notes: "استخدم هذه الشريحة للتفاعل مع الطلاب وسؤالهم متى يستخدم كل أمر.", component: CommandExplorerSlide },
];
