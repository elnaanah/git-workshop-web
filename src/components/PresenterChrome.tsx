import { Search, FileDown, Monitor, QrCode, Command, Timer, StickyNote, Crosshair, CircleOff } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import type { Slide } from "../types";

type PresenterChromeProps = {
  slide: Slide;
  index: number;
  total: number;
  onSearch: () => void;
  onExport: () => void;
  onCommand: () => void;
  notesOpen: boolean;
  laserOn: boolean;
  timerOn: boolean;
  blackoutOn: boolean;
};

export function PresenterChrome({ slide, index, total, onSearch, onExport, onCommand, notesOpen, laserOn, timerOn, blackoutOn }: PresenterChromeProps) {
  const progress = ((index + 1) / total) * 100;

  return (
    <>
      <div className="no-print pointer-events-none fixed inset-x-0 top-0 z-40 h-1 bg-gh-border">
        <div className="h-full bg-gradient-to-l from-gl-orange to-gh-blue" style={{ width: `${progress}%` }} />
      </div>
      <div className="no-print fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-2xl border border-gh-border bg-gh-card/85 px-3 py-2 text-xs text-gh-muted backdrop-blur">
        <span className="font-mono">{index + 1}/{total}</span>
        <span>{slide.section}</span>
      </div>
      <div className="no-print fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button className="rounded-xl border border-gh-border bg-gh-card/85 p-3 text-gh-muted backdrop-blur hover:text-gh-text" onClick={onCommand} title="Command Center">
          <Command size={18} />
        </button>
        <button className="rounded-xl border border-gh-border bg-gh-card/85 p-3 text-gh-muted backdrop-blur hover:text-gh-text" onClick={onSearch} title="Search">
          <Search size={18} />
        </button>
        <button className="rounded-xl border border-gh-border bg-gh-card/85 p-3 text-gh-muted backdrop-blur hover:text-gh-text" onClick={onExport} title="Export PDF">
          <FileDown size={18} />
        </button>
        <div className="group relative rounded-xl border border-gh-border bg-gh-card/85 p-3 text-gh-muted backdrop-blur">
          <QrCode size={18} />
          <div className="absolute bottom-14 right-0 hidden rounded-2xl border border-gh-border bg-white p-3 group-hover:block">
            <QRCodeCanvas value={window.location.origin + "/lab"} size={120} />
          </div>
        </div>
        <span className="kbd hidden md:inline-flex">F</span>
        <Monitor className="hidden text-gh-muted md:block" size={18} />
        <span className={`kbd hidden md:inline-flex ${blackoutOn ? "border-gl-orange text-gl-orange" : ""}`}>B</span>
        <CircleOff className="hidden text-gh-muted md:block" size={18} />
        <span className={`kbd hidden md:inline-flex ${timerOn ? "border-gl-orange text-gl-orange" : ""}`}>T</span>
        <Timer className="hidden text-gh-muted md:block" size={18} />
        <span className={`kbd hidden md:inline-flex ${notesOpen ? "border-gl-orange text-gl-orange" : ""}`}>N</span>
        <StickyNote className="hidden text-gh-muted md:block" size={18} />
        <span className={`kbd hidden md:inline-flex ${laserOn ? "border-gl-orange text-gl-orange" : ""}`}>L</span>
        <Crosshair className="hidden text-gh-muted md:block" size={18} />
      </div>
    </>
  );
}
