import { useState } from "react";
import type { CommandInfo } from "../types";
import { CodeBlock } from "./CodeBlock";

const commands: CommandInfo[] = [
  { command: "git init", explanation: "يحوّل مجلداً عادياً إلى repository محلي.", when: "عند بدء مشروع جديد من الصفر.", example: "git init future-developers", output: "Initialized empty Git repository in .git/" },
  { command: "git clone", explanation: "ينزّل نسخة كاملة من مشروع موجود.", when: "عند الانضمام لمشروع فريق.", example: "git clone https://github.com/team/app.git", output: "Cloning into 'app'..." },
  { command: "git add", explanation: "ينقل تغييرات مختارة إلى staging area.", when: "قبل commit لاختيار ما تريد حفظه.", example: "git add src/App.tsx", output: "file staged for commit" },
  { command: "git commit", explanation: "يحفظ snapshot موثقة برسالة.", when: "بعد اكتمال تغيير منطقي صغير.", example: "git commit -m \"Add login validation\"", output: "[feature/login abc123] Add login validation" },
  { command: "git push", explanation: "يرفع commits إلى remote.", when: "لمشاركة عملك أو فتح Pull Request.", example: "git push origin feature/login", output: "remote: Create a pull request for feature/login" },
  { command: "git pull", explanation: "يجلب تحديثات الفريق ويدمجها محلياً.", when: "قبل بداية العمل أو قبل push.", example: "git pull origin main", output: "Already up to date." },
  { command: "git branch", explanation: "يعرض أو ينشئ فروعاً.", when: "لعزل ميزة أو تجربة.", example: "git branch feature/profile", output: "branch created" },
  { command: "git merge", explanation: "يدمج تغييرات فرع في فرع آخر.", when: "بعد انتهاء feature واختبارها.", example: "git merge feature/login", output: "Merge made by the 'ort' strategy." },
];

export function CommandExplorer() {
  const [active, setActive] = useState(commands[0]);

  return (
    <div className="grid h-full gap-5 md:grid-cols-[280px_1fr]">
      <div className="glass rounded-3xl p-4">
        <div className="mb-4 font-mono text-sm text-gh-muted">Git Command Explorer</div>
        <div className="grid gap-2">
          {commands.map((cmd) => (
            <button
              key={cmd.command}
              onClick={() => setActive(cmd)}
              className={`rounded-2xl px-4 py-3 text-left font-mono transition ${
                active.command === cmd.command
                  ? "bg-gl-orange text-white shadow-glow"
                  : "border border-gh-border bg-black/20 text-gh-muted hover:border-gh-blue hover:text-gh-text"
              }`}
              dir="ltr"
            >
              {cmd.command}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-5">
        <div className="glass rounded-3xl p-7">
          <h3 className="font-mono text-3xl text-gl-orange" dir="ltr">{active.command}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Info title="ماذا يفعل؟" value={active.explanation} />
            <Info title="متى يستخدم؟" value={active.when} />
            <Info title="الناتج المتوقع" value={active.output} />
          </div>
        </div>
        <CodeBlock title="example.sh" code={`$ ${active.example}\n# ${active.output}`} />
      </div>
    </div>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-gh-border bg-black/20 p-4">
      <div className="text-sm text-gh-muted">{title}</div>
      <p className="mt-2 text-lg leading-8">{value}</p>
    </div>
  );
}
