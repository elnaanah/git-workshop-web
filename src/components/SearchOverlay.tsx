import { useMemo, useState } from "react";
import type { Slide } from "../types";

type SearchOverlayProps = {
  slides: Slide[];
  onClose: () => void;
  onSelect: (index: number) => void;
};

export function SearchOverlay({ slides, onClose, onSelect }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return slides.slice(0, 8).map((slide, index) => ({ slide, index }));
    return slides
      .map((slide, index) => ({ slide, index }))
      .filter(({ slide }) => [slide.title, slide.section, slide.notes, ...slide.keywords].join(" ").toLowerCase().includes(q))
      .slice(0, 10);
  }, [query, slides]);

  return (
    <div className="no-print fixed inset-0 z-50 bg-black/70 p-5 backdrop-blur" onClick={onClose}>
      <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-gh-border bg-gh-card p-5" onClick={(event) => event.stopPropagation()}>
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="ابحث داخل العرض..."
          className="w-full rounded-2xl border border-gh-border bg-black/30 px-5 py-4 text-xl outline-none focus:border-gl-orange"
        />
        <div className="mt-5 space-y-2">
          {results.map(({ slide, index }) => (
            <button
              key={slide.id}
              className="block w-full rounded-2xl border border-gh-border bg-black/20 p-4 text-right hover:border-gh-blue"
              onClick={() => onSelect(index)}
            >
              <div className="font-mono text-sm text-gl-orange">{String(index + 1).padStart(2, "0")} / {slide.section}</div>
              <div className="mt-1 text-lg font-bold">{slide.title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
