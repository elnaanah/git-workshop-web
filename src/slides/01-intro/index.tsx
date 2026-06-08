import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, CheckCircle, FileArchive, Users } from "lucide-react";
import { SlideShell } from "../../components/SlideShell";
import { Terminal } from "../../components/Terminal";
import type { Slide } from "../../types";

function HeroSlide() {
  return (
    <section className="slide stage-bg">
      <div className="absolute inset-0 bg-grid bg-[length:54px_54px] opacity-30" />
      <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-8 md:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}>
          <div className="eyebrow">GitHub / GitLab Workshop</div>
          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
            العمل الجماعي وإدارة المشاريع البرمجية
            <span className="block bg-gradient-to-l from-gl-orange via-gl-amber to-gh-blue bg-clip-text text-transparent">
              باستخدام GitHub و GitLab
            </span>
          </h1>
          <div className="mt-8 grid max-w-3xl gap-3 text-xl text-gh-muted md:grid-cols-2">
            <Info label="المحاضر" value="م. بشار نعناع" />
            <Info label="المكان" value="جامعة باشاك شهير - مدينة الباب" />
            <Info label="التاريخ" value="09/06/2026" />
            <Info label="القاعة" value="106" />
          </div>
        </motion.div>
        <Terminal lines={["cd university-workshop", "whoami", "future-developer"]} typing="git init future-developers" />
      </div>
    </section>
  );
}

function WhySlide() {
  return (
    <SlideShell eyebrow="Opening" title="لماذا هذه الورشة مهمة؟" subtitle="Git ليس أمراً للحفظ، بل طريقة عمل جماعية تجعل المشروع قابلاً للفهم والمراجعة والتوسع.">
      <div className="grid h-full items-center gap-5 md:grid-cols-3">
        {[
          ["لغة مشتركة", "كل فريق برمجي يحتاج طريقة موحدة لحفظ التغييرات ومناقشتها."],
          ["سوق العمل", "Pull Requests و Code Review ليست مفاهيم إضافية؛ إنها جزء من العمل اليومي."],
          ["مشاريع الجامعة", "تقلل الفوضى في مشاريع التخرج والواجبات الجماعية."],
        ].map(([title, body], index) => (
          <motion.div key={title} className="glass rounded-3xl p-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 }}>
            <CheckCircle className="mb-8 h-12 w-12 text-gh-green" />
            <h3 className="text-3xl font-black">{title}</h3>
            <p className="mt-4 text-xl leading-9 text-gh-muted">{body}</p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function ChaosStorySlide() {
  const files = ["Student1_final.zip", "Student2_final_final.zip", "project_REAL_FINAL.zip", "backup_before_fix.zip", "presentation_last_last.zip"];
  return (
    <SlideShell eyebrow="Story" title="خمسة طلاب يعملون على مشروع تخرج" subtitle="قبل Git، المشكلة ليست في الكود فقط؛ المشكلة في معرفة النسخة الصحيحة ومن غيّر ماذا.">
      <div className="grid h-full items-center gap-8 md:grid-cols-2">
        <div className="glass rounded-3xl p-7">
          <div className="mb-5 flex items-center gap-3 text-red-400"><AlertTriangle /> قبل Git</div>
          <div className="space-y-3 text-left font-mono" dir="ltr">
            {files.map((file, index) => (
              <motion.div key={file} className="rounded-2xl border border-gh-border bg-black/30 px-5 py-4 text-gh-muted" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.12 }}>
                <FileArchive className="mr-3 inline h-5 w-5 text-gl-orange" /> {file}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div className="glass rounded-3xl p-8" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
          <div className="mb-6 flex items-center gap-3 text-gh-green"><Users /> Git Solution</div>
          <div className="space-y-5 text-2xl">
            <p>Repository واحد</p>
            <p>Branch لكل طالب</p>
            <p>Commit واضح لكل تغيير</p>
            <p>Pull Request قبل الدمج</p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

function JourneySlide() {
  return (
    <SlideShell eyebrow="Learning Journey" title="من لا أعرف لماذا أحتاج Git إلى أستطيع العمل ضمن فريق" subtitle="سنبدأ بالمشكلة، ثم النموذج الذهني، ثم الأوامر، ثم التعاون الحقيقي عبر GitHub و GitLab.">
      <div className="mt-16 grid gap-4 md:grid-cols-5">
        {["المشكلة", "Version Control", "Git عملياً", "GitHub/GitLab", "Lab جماعي"].map((item, index) => (
          <motion.div key={item} className="glass rounded-3xl p-6 text-center" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.12 }}>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gl-orange/15 font-mono text-xl text-gl-orange">{index + 1}</div>
            <div className="text-xl font-bold">{item}</div>
            {index < 4 && <ArrowLeft className="mx-auto mt-5 hidden text-gh-muted md:block" />}
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-gh-border bg-gh-card/70 p-4">
      <div className="font-mono text-sm text-gl-orange">{label}</div>
      <div className="mt-2 text-gh-text">{value}</div>
    </div>
  );
}

export const introSlides: Slide[] = [
  { id: "intro-hero", section: "الافتتاح", title: "غلاف الورشة", keywords: ["hero", "git init"], notes: "ابدأ بسؤال: كم مرة ضاعت نسخة مشروع أو استبدل أحدكم ملفاً مهماً؟", component: HeroSlide },
  { id: "intro-why", section: "الافتتاح", title: "لماذا هذه الورشة مهمة؟", keywords: ["importance", "workflow"], notes: "اربط Git بسوق العمل ومشاريع الجامعة، لا تقدمه كأداة أوامر فقط.", component: WhySlide },
  { id: "intro-story", section: "القصة", title: "خمسة طلاب يعملون على مشروع تخرج", keywords: ["story", "zip", "chaos"], notes: "اعرض أسماء الملفات كمشهد مألوف، ثم قدم Git كحل تنظيمي.", component: ChaosStorySlide },
];
