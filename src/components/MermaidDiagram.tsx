import { lazy, Suspense } from "react";

export function MermaidDiagram({ chart }: { chart: string }) {
  return (
    <Suspense fallback={<div className="glass min-h-[280px] rounded-2xl p-6 font-mono text-gh-muted">Loading diagram...</div>}>
      <MermaidRenderer chart={chart} />
    </Suspense>
  );
}

const MermaidRenderer = lazy(() => import("./MermaidRenderer"));
