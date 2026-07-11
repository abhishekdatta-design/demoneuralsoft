import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Neural Soft rebuilt our HR operations end-to-end. Six months in, our processing time is down 70% and payroll disputes are practically gone.",
    name: "Rashid Karim",
    role: "Head of People",
    company: "National NGO",
  },
  {
    quote: "They shipped an ERP that our factory managers actually use every day. That's a first for us.",
    name: "Sadia Rahman",
    role: "COO",
    company: "Manufacturing Group",
  },
  {
    quote: "The team's AI engineering was the difference between a demo and a production system. Careful, thorough, and honest about trade-offs.",
    name: "James Okoye",
    role: "VP Engineering",
    company: "International SaaS",
  },
];

export function Testimonials() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Client voices</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            What partners say after the go-live
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <Quote className="size-8 text-accent" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
