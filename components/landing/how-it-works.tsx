"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-border/50 bg-muted/30 border-y py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            From waitlist to live in three steps
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Getting started with SuggaPlay is simple. We handle the complexity
            so you can focus on what you do best.
          </p>
        </FadeIn>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div className="bg-border absolute top-12 right-[16%] left-[16%] hidden h-px md:block" />

          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.12}>
              <div className="relative text-center">
                <div className="bg-brand-gradient relative z-10 mx-auto flex size-14 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-lg shadow-primary/30">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
