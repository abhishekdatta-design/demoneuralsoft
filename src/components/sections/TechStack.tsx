const stacks = [
  { title: "Frontend", tags: ["React", "Angular", "Vue", "Next.js", "TypeScript"] },
  { title: "Backend", tags: ["Laravel", ".NET", "Node.js", "Python", "Java"] },
  { title: "Mobile", tags: ["Flutter", "Android", "iOS"] },
  { title: "AI", tags: ["OpenAI", "Gemini", "TensorFlow", "PyTorch"] },
];

export function TechStack() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Technology stack</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Modern tools, chosen deliberately
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stacks.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary-dark">{s.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
