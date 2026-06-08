import mermaid from "mermaid";
import { useEffect, useId, useRef } from "react";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
  themeVariables: {
    background: "#0d1117",
    primaryColor: "#161b22",
    primaryTextColor: "#f0f6fc",
    primaryBorderColor: "#30363d",
    lineColor: "#58a6ff",
    secondaryColor: "#fc6d26",
    tertiaryColor: "#2ea043",
  },
});

export default function MermaidRenderer({ chart }: { chart: string }) {
  const id = useId().replaceAll(":", "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    mermaid.render(`m-${id}`, chart).then(({ svg }) => {
      if (!cancelled && ref.current) ref.current.innerHTML = svg;
    });
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  return <div ref={ref} className="glass rounded-2xl p-6 [&_svg]:mx-auto [&_svg]:max-h-[62vh]" />;
}
