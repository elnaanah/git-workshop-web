import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { Check, Clock, Maximize, Presentation, RotateCcw } from "lucide-react";
import { PresenterChrome } from "./components/PresenterChrome";
import { SearchOverlay } from "./components/SearchOverlay";
import { slides } from "./slides";

const storageKey = "git-workshop-slide-index";

export function App() {
  const path = window.location.pathname;
  if (path === "/lab") return <LabMode />;
  if (path === "/speaker") return <SpeakerMode />;
  return <DeckMode />;
}

function DeckMode() {
  const [index, setIndex] = useState(() => Number(localStorage.getItem(storageKey) ?? 0));
  const [dim, setDim] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const safeIndex = Math.min(Math.max(index, 0), slides.length - 1);
  const slide = slides[safeIndex];
  const SlideComponent = slide.component;

  const go = (next: number) => setIndex(Math.min(Math.max(next, 0), slides.length - 1));

  useEffect(() => {
    localStorage.setItem(storageKey, String(safeIndex));
    window.history.replaceState(null, "", `/#${safeIndex + 1}`);
  }, [safeIndex]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") go(safeIndex + 1);
      if (event.key === "ArrowLeft") go(safeIndex - 1);
      if (event.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
      if (event.key.toLowerCase() === "d") setDim((value) => !value);
      if (event.key.toLowerCase() === "s") setNotesOpen((value) => !value);
      if (event.key === "/") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key.toLowerCase() === "e") window.print();
      if (event.key === "Escape") {
        setSearchOpen(false);
        setNotesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [safeIndex]);

  return (
    <div className={dim ? "brightness-50" : ""}>
      <AnimatePresence mode="wait">
        <motion.div key={slide.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
          <SlideComponent />
        </motion.div>
      </AnimatePresence>
      <PresenterChrome
        slide={slide}
        index={safeIndex}
        total={slides.length}
        notesOpen={notesOpen}
        onSearch={() => setSearchOpen(true)}
        onExport={() => window.print()}
      />
      {notesOpen && (
        <div className="no-print fixed left-1/2 top-6 z-50 max-w-2xl -translate-x-1/2 rounded-3xl border border-gh-border bg-gh-card/95 p-5 text-right shadow-2xl backdrop-blur">
          <div className="font-mono text-sm text-gl-orange">Speaker Notes</div>
          <h3 className="mt-2 text-xl font-black">{slide.title}</h3>
          <p className="mt-3 leading-8 text-gh-muted">{slide.notes}</p>
        </div>
      )}
      {searchOpen && (
        <SearchOverlay
          slides={slides}
          onClose={() => setSearchOpen(false)}
          onSelect={(next) => {
            go(next);
            setSearchOpen(false);
          }}
        />
      )}
    </div>
  );
}

function LabMode() {
  const steps = [
    "Create Repository",
    "Invite Team",
    "Clone",
    "Create Branch",
    "Commit",
    "Push",
    "Pull Request",
    "Merge",
  ];
  const [done, setDone] = useState<boolean[]>(() => JSON.parse(localStorage.getItem("git-workshop-lab") ?? "[]"));
  const count = done.filter(Boolean).length;
  const progress = (count / steps.length) * 100;

  useEffect(() => {
    localStorage.setItem("git-workshop-lab", JSON.stringify(done));
  }, [done]);

  return (
    <main className="min-h-screen overflow-auto bg-gh-bg stage-bg p-5 text-gh-text md:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="eyebrow">Practical Lab Mode</div>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">Repository جماعي</h1>
            <p className="mt-4 text-xl text-gh-muted">تابع خطوات التطبيق العملي مع الفريق.</p>
          </div>
          <button
            className="rounded-2xl border border-gh-border bg-gh-card px-5 py-3 text-gh-muted hover:text-gh-text"
            onClick={() => setDone([])}
          >
            <RotateCcw className="ml-2 inline h-5 w-5" />
            Reset
          </button>
        </div>
        <div className="glass mb-6 rounded-3xl p-5">
          <div className="mb-3 flex justify-between font-mono text-sm text-gh-muted">
            <span>{count}/{steps.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-black/40">
            <div className="h-full bg-gradient-to-l from-gl-orange to-gh-green transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <button
              key={step}
              className={`rounded-3xl border p-6 text-right text-2xl transition ${
                done[index] ? "border-gh-green bg-gh-green/10" : "border-gh-border bg-gh-card/70 hover:border-gl-orange"
              }`}
              onClick={() => setDone((prev) => {
                const next = [...prev];
                next[index] = !next[index];
                return next;
              })}
            >
              <Check className={`ml-3 inline h-6 w-6 ${done[index] ? "text-gh-green" : "text-gh-muted"}`} />
              {step}
            </button>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-gh-border bg-black/30 p-6 font-mono text-left text-gh-muted" dir="ltr">
          git clone &lt;repository-url&gt;<br />
          git switch -c feature/student-name<br />
          git add team.md && git commit -m "Add student profile"<br />
          git push origin feature/student-name
        </div>
      </div>
    </main>
  );
}

function SpeakerMode() {
  const [startTime, setStartTime] = useState(Date.now());
  const [tick, setTick] = useState(Date.now());
  const [index, setIndex] = useState(() => Number(localStorage.getItem(storageKey) ?? 0));
  const current = slides[Math.min(index, slides.length - 1)];
  const next = slides[Math.min(index + 1, slides.length - 1)];
  const elapsed = useMemo(() => Math.floor((tick - startTime) / 1000), [startTime, tick]);

  useEffect(() => {
    const sync = window.setInterval(() => setIndex(Number(localStorage.getItem(storageKey) ?? 0)), 500);
    const timer = window.setInterval(() => setTick(Date.now()), 1000);
    return () => {
      window.clearInterval(sync);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-auto bg-gh-bg p-6 text-gh-text">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="eyebrow">Speaker Mode</div>
          <h1 className="mt-2 text-3xl font-black">لوحة المحاضر</h1>
        </div>
        <div className="flex gap-3">
          <Badge icon={<Presentation size={18} />} text={`${index + 1}/${slides.length}`} />
          <Badge icon={<Clock size={18} />} text={`${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, "0")}`} />
          <button className="rounded-2xl border border-gh-border bg-gh-card px-4 py-2 text-gh-muted" onClick={() => setStartTime(Date.now())}>
            <RotateCcw className="inline h-5 w-5" />
          </button>
          <button className="rounded-2xl border border-gh-border bg-gh-card px-4 py-2" onClick={() => document.documentElement.requestFullscreen?.()}>
            <Maximize className="inline h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <Panel title="Current Slide" slide={current} />
        <Panel title="Next Slide" slide={next} compact />
      </div>
      <section className="glass mt-5 rounded-3xl p-6">
        <div className="font-mono text-sm text-gl-orange">Notes</div>
        <p className="mt-3 text-2xl leading-10 text-gh-muted">{current.notes}</p>
      </section>
    </main>
  );
}

function Panel({ title, slide, compact = false }: { title: string; slide: (typeof slides)[number]; compact?: boolean }) {
  const Component = slide.component;
  return (
    <section className="glass overflow-hidden rounded-3xl">
      <div className="border-b border-gh-border px-5 py-3 font-mono text-sm text-gh-muted">{title}: {slide.title}</div>
      <div className={`origin-top-right overflow-hidden ${compact ? "h-[320px]" : "h-[520px]"}`}>
        <div className="pointer-events-none h-screen w-screen scale-[.42] origin-top-right md:scale-[.48]">
          <Component />
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="rounded-2xl border border-gh-border bg-gh-card px-4 py-2 font-mono text-gh-muted">
      <span className="ml-2 inline-block align-middle">{icon}</span>
      {text}
    </div>
  );
}
