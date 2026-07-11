import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Awards } from "@/components/sections/Awards";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Target, Compass, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Neural Soft — Enterprise Software Partner in Dhaka" },
      { name: "description", content: "50+ engineers delivering AI, ERP, HRMS and cloud systems for enterprises across three continents." },
      { property: "og:title", content: "About Neural Soft" },
      { property: "og:description", content: "Who we are and how we deliver." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Outcome-first", desc: "We commit to metrics, not activities. Every engagement ties to a business KPI." },
  { icon: Compass, title: "Engineering rigour", desc: "Code reviews, CI/CD, and observability are non-negotiable defaults." },
  { icon: Users, title: "Long partnerships", desc: "Most of our clients renew — because we operate as their in-house team." },
  { icon: Sparkles, title: "Applied AI", desc: "We ship AI that changes P&L, not slideware demos." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="An enterprise software partner engineered for outcomes"
        description="Neural Soft is a Dhaka-headquartered engineering company building custom software, AI systems, and enterprise platforms for organizations across Bangladesh, the Middle East, and beyond."
      />
      <StatsStrip />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Our mission</h2>
              <p className="mt-4 text-muted-foreground">
                Give growing organizations the software leverage that only global enterprises used to have — with predictable delivery, honest scoping, and long-term operational support.
              </p>
              <h2 className="mt-10 text-3xl font-bold text-foreground">How we work</h2>
              <p className="mt-4 text-muted-foreground">
                Small senior teams, weekly demos, transparent estimates, and production access from week one. No offshore black boxes.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                  <v.icon className="size-7 text-primary" />
                  <h3 className="mt-4 text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awards />
      <ContactCTA />
    </>
  );
}
