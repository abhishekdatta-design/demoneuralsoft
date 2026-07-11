import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { NodeMotif } from "@/components/layout/NodeMotif";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background">
      <NodeMotif
        className="pointer-events-none absolute inset-0 h-full w-full text-primary"
        opacity={0.07}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-dark">
            Custom Software · AI · Enterprise
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Custom Software Solutions for Growing Businesses
          </h1>
          <p className="mt-4 text-xl font-semibold text-primary sm:text-2xl">
            Build the Future with AI & Enterprise Software
          </p>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We build scalable web, mobile, cloud, AI, and enterprise solutions
            for organizations worldwide — with measurable outcomes, not
            promises.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary-dark"
            >
              Book a Consultation <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
