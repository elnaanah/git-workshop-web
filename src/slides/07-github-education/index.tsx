import { motion } from "framer-motion";
import { Cloud, Code, GraduationCap, Globe, Library, Sparkles } from "lucide-react";
import { SlideShell } from "../../components/SlideShell";
import { Timeline } from "../../components/Timeline";
import type { Slide } from "../../types";

function EducationIntro() {
  return (
    <SlideShell eyebrow="GitHub Education" title="GitHub Education" subtitle="برنامج للطلاب والمدرسين يوفر أدوات تساعد على بناء مشاريع حقيقية و portfolio تقني.">
      <div className="mx-auto mt-12 max-w-4xl glass rounded-[2rem] p-10 text-center">
        <GraduationCap className="mx-auto mb-8 h-20 w-20 text-gl-orange" />
        <h3 className="text-5xl font-black">Student Developer Pack</h3>
        <p className="mt-6 text-2xl leading-10 text-gh-muted">استخدم المزايا لبناء مشروع منشور وموثق، لا لجمع حسابات مجانية فقط.</p>
      </div>
    </SlideShell>
  );
}

function PackCards() {
  const cards = [
    ["Cloud", "خدمات استضافة وتجربة نشر", Cloud],
    ["Developer Tools", "أدوات IDE و APIs", Code],
    ["Learning Resources", "منصات تعلم وتدريب", Library],
    ["Domains", "نطاقات وتجارب نشر", Globe],
  ] as const;
  return (
    <SlideShell eyebrow="Benefits" title="ماذا يحصل الطالب؟" subtitle="الأدوات تتغير بمرور الوقت، لكن الفئات الأساسية تساعد في التعلم والبناء والنشر.">
      <div className="grid h-full items-center gap-5 md:grid-cols-4">
        {cards.map(([title, body, Icon], index) => (
          <motion.div key={title} className="glass rounded-3xl p-7" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.12 }}>
            <Icon className="mb-7 h-14 w-14 text-gh-blue" />
            <h3 className="text-3xl font-black">{title}</h3>
            <p className="mt-4 text-xl leading-8 text-gh-muted">{body}</p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

function RegistrationSteps() {
  return (
    <SlideShell eyebrow="How to Apply" title="خطوات التسجيل العامة" subtitle="قد تتغير التفاصيل الرسمية، لكن المنطق ثابت: إثبات أنك طالب ثم انتظار التحقق.">
      <Timeline items={["أنشئ حساب GitHub باسم مهني", "جهز بريد جامعي أو إثبات دراسة", "قدّم طلب GitHub Education", "انتظر التحقق", "ابدأ مشروعاً موثقاً يستفيد من الأدوات"]} />
    </SlideShell>
  );
}

function StudyBenefit() {
  return (
    <SlideShell eyebrow="Use It Well" title="كيف تستفيد منها خلال دراستك؟" subtitle="حوّل الأدوات إلى نتيجة قابلة للعرض: مشروع منشور، README واضح، Issues، Pull Requests، وتوثيق.">
      <div className="grid h-full items-center gap-6 md:grid-cols-3">
        {["مشروع تخرج منشور", "Portfolio على GitHub", "تجربة Cloud و CI/CD"].map((item, index) => (
          <motion.div key={item} className="glass rounded-3xl p-8 text-center" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.12 }}>
            <Sparkles className="mx-auto mb-6 h-14 w-14 text-gl-amber" />
            <div className="text-3xl font-black">{item}</div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

export const educationSlides: Slide[] = [
  { id: "edu-intro", section: "GitHub Education", title: "ما هو GitHub Education؟", keywords: ["education", "student"], notes: "اذكر أن التفاصيل الرسمية قد تتغير، لذلك نركز على الفكرة والخطوات العامة.", component: EducationIntro },
  { id: "edu-pack", section: "GitHub Education", title: "Student Developer Pack", keywords: ["pack", "tools"], notes: "اعرض الفئات لا قائمة خدمات قد تتغير.", component: PackCards },
  { id: "edu-register", section: "GitHub Education", title: "طريقة التسجيل", keywords: ["register", "apply"], notes: "شجع على حساب GitHub باسم مهني وREADME جيد.", component: RegistrationSteps },
];
