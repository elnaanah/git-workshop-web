import { useMemo, useState } from "react";
import { Maximize, Search, Timer, FlaskConical, Mic2 } from "lucide-react";
import type { Slide } from "../types";

type CommandCenterProps = {
  slides: Slide[];
  onClose: () => void;
  onGoToSlide: (index: number) => void;
  onToggleFullscreen: () => void;
  onToggleTimer: () => void;
};

export function CommandCenter({ slides, onClose, onGoToSlide, onToggleFullscreen, onToggleTimer }: CommandCenterProps) {
  const [query, setQuery] = useState("");
  const commands = useMemo(
    () => [
      {
        id: "lab",
        title: "Go to Lab",
        hint: "/lab",
        icon: FlaskConical,
        action: () => {
          window.location.href = "/lab";
        },
      },
      {
        id: "speaker",
        title: "Open Speaker Mode",
        hint: "/speaker",
        icon: Mic2,
        action: () => {
          window.open("/speaker", "_blank", "noopener,noreferrer");
        },
      },
      { id: "fullscreen", title: "Toggle Fullscreen", hint: "F", icon: Maximize, action: onToggleFullscreen },
      { id: "timer", title: "Timer", hint: "T", icon: Timer, action: onToggleTimer },
      ...slides.map((slide, index) => ({
        id: slide.id,
        title: slide.title,
        hint: `${String(index + 1).padStart(2, "0")} / ${slide.section}`,
        icon: Search,
        action: () => onGoToSlide(index),
      })),
    ],
    [onGoToSlide, onToggleFullscreen, onToggleTimer, slides],
  );

  const results = commands
    .filter((command) => `${command.title} ${command.hint}`.toLowerCase().includes(query.trim().toLowerCase()))
    .slice(0, 12);

  return (
    <div className="no-print fixed inset-0 z-[70] bg-black/65 p-4 backdrop-blur-md" onClick={onClose}>
      <div
        className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-gh-border bg-[#0d1117]/95 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-gh-border bg-gh-card/70 p-4">
          <div className="mb-3 flex items-center justify-between font-mono text-xs text-gh-muted">
            <span>Command Center</span>
            <span>Ctrl + K</span>
          </div>
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search slides or commands..."
            className="w-full rounded-xl border border-gh-border bg-black/35 px-4 py-3 text-lg outline-none focus:border-gl-orange"
          />
        </div>
        <div className="max-h-[62vh] overflow-auto p-2">
          {results.map((command) => {
            const Icon = command.icon;
            return (
              <button
                key={command.id}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left hover:bg-gh-card"
                onClick={() => {
                  command.action();
                  onClose();
                }}
              >
                <Icon className="h-5 w-5 text-gl-orange" />
                <span className="min-w-0 flex-1 truncate font-semibold">{command.title}</span>
                <span className="font-mono text-xs text-gh-muted">{command.hint}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
