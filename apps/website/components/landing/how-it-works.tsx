import { FadeIn } from "@/components/motion/fade-in";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <p className="text-editorial-label text-muted-foreground mb-6">
            How it works
          </p>
        </FadeIn>

        <div className="divide-y divide-border">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.1}>
              <div className="grid gap-6 py-12 sm:grid-cols-[100px_1fr] sm:gap-12 lg:py-16">
                <p className="text-editorial-label text-brand">{step.step}</p>
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-lg text-muted-foreground">
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
