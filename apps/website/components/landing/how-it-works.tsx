import { FadeIn } from "@/components/motion/fade-in";
import { EditorialKicker } from "@/components/editorial/editorial-section";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border py-24 sm:py-32">
      <div className="px-6 lg:px-10 xl:px-14">
        <FadeIn>
          <EditorialKicker>How it works</EditorialKicker>
        </FadeIn>

        <div className="mt-12 divide-y divide-border">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.1}>
              <div className="grid gap-6 py-12 sm:grid-cols-[100px_1fr] sm:gap-12 lg:py-16">
                <p className="text-editorial-kicker text-brand">{step.step}</p>
                <div>
                  <h3 className="text-editorial-headline">{step.title}</h3>
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
