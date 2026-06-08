import { BookOpen, HelpCircle, Link, Search } from "lucide-react";
import { useMemo, useState } from "react";

const cheat = [
  ["git status", "اعرض حالة الملفات"],
  ["git add <file>", "جهز ملف للحفظ"],
  ["git commit -m \"msg\"", "احفظ لقطة واضحة"],
  ["git branch", "اعرض الفروع"],
  ["git switch -c name", "أنشئ وانتقل إلى فرع"],
  ["git merge name", "ادمج فرعا في الفرع الحالي"],
  ["git push", "ارفع التغييرات إلى remote"],
];

const labSteps = ["Clone repository", "Create feature branch", "Edit team.md", "Commit with clear message", "Push branch", "Open Pull Request", "Request review", "Merge after approval"];

export function StudentMode() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => cheat.filter(([cmd, desc]) => `${cmd} ${desc}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <main className="min-h-screen overflow-auto bg-gh-bg p-4 text-gh-text md:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <div className="eyebrow">Student Companion</div>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">Git Workshop Companion</h1>
          <p className="mt-3 max-w-3xl text-lg text-gh-muted">مرجع سريع للتطبيق العملي أثناء المحاضرة وبعدها.</p>
        </header>
        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-gh-border bg-gh-card/70 px-4 py-3">
          <Search className="h-5 w-5 text-gl-orange" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search commands..."
            className="w-full bg-transparent font-mono outline-none"
          />
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <section className="rounded-2xl border border-gh-border bg-gh-card/60 p-5">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold"><BookOpen className="text-gh-blue" /> Git Cheat Sheet</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {filtered.map(([cmd, desc]) => (
                <div key={cmd} className="rounded-xl border border-gh-border bg-black/25 p-4">
                  <code className="font-mono text-gl-orange">{cmd}</code>
                  <p className="mt-2 text-gh-muted">{desc}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="rounded-2xl border border-gh-border bg-gh-card/60 p-5">
            <h2 className="mb-4 text-2xl font-bold">Lab Steps</h2>
            <ol className="space-y-3">
              {labSteps.map((step, index) => (
                <li key={step} className="rounded-xl border border-gh-border bg-black/25 p-3">
                  <span className="mr-3 font-mono text-gl-orange">{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
          <section className="rounded-2xl border border-gh-border bg-gh-card/60 p-5">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold"><Link className="text-gh-green" /> Useful Links</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                ["Git Handbook", "https://guides.github.com/introduction/git-handbook/"],
                ["GitHub Docs", "https://docs.github.com/"],
                ["GitLab Docs", "https://docs.gitlab.com/"],
                ["Git Cheatsheet", "https://education.github.com/git-cheat-sheet-education.pdf"],
              ].map(([label, href]) => (
                <a key={href} className="rounded-xl border border-gh-border bg-black/25 p-4 text-gh-blue hover:border-gh-blue" href={href}>
                  {label}
                </a>
              ))}
            </div>
          </section>
          <section className="rounded-2xl border border-gh-border bg-gh-card/60 p-5">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold"><HelpCircle className="text-gl-amber" /> FAQ</h2>
            <div className="space-y-3 text-gh-muted">
              <p><strong className="text-gh-text">هل commit يرفع الكود؟</strong> لا، الرفع يتم باستخدام push.</p>
              <p><strong className="text-gh-text">متى أستخدم branch؟</strong> عند العمل على ميزة أو تجربة مستقلة.</p>
              <p><strong className="text-gh-text">ماذا أفعل عند conflict؟</strong> افتح الملفات المتعارضة، اختر النسخة الصحيحة، ثم commit.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
