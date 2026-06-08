type CodeBlockProps = {
  code: string;
  language?: string;
  title?: string;
};

export function CodeBlock({ code, language = "bash", title = "terminal" }: CodeBlockProps) {
  const lines = code.trim().split("\n");

  return (
    <div className="code-window overflow-hidden text-left" dir="ltr">
      <div className="flex items-center justify-between border-b border-gh-border bg-gh-card px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-gl-amber" />
          <span className="h-3 w-3 rounded-full bg-gh-green" />
        </div>
        <span className="font-mono text-xs text-gh-muted">{title} / {language}</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-sm leading-8 md:text-base">
        {lines.map((line, index) => (
          <div key={`${line}-${index}`}>
            <span className="mr-4 select-none text-gh-muted">{String(index + 1).padStart(2, "0")}</span>
            <span className={line.startsWith("#") ? "text-gh-muted" : line.startsWith("$") || line.startsWith("git") ? "text-gh-green" : "text-gh-text"}>
              {line}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}
