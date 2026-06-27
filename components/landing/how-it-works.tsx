import { FadeIn } from "@/components/motion/fade-in";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <p className="text-editorial-label text-muted-foreground mb-6">
            How it works
          </p>
          <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
            Three steps to early access
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-0 divide-y divide-border">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.1}>
              <div className="grid gap-6 py-12 sm:grid-cols-[120px_1fr] sm:gap-12">
                <p className="text-editorial-label text-brand">{step.step}</p>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
