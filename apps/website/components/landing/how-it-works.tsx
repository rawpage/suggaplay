import { FadeIn } from "@/components/motion/fade-in";
import { EditorialKicker } from "@/components/editorial/editorial-section";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div>
        <FadeIn>
          <EditorialKicker>How it works</EditorialKicker>
        </FadeIn>

        <div className="mt-12">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.1}>
              <div className="grid gap-4 py-12 md:grid-cols-[80px_1fr] md:gap-12 lg:py-16">
                <p className="text-editorial-kicker text-brand">{step.step}</p>
                <div>
                  <h3 className="text-editorial-headline">{step.title}</h3>
                  <p className="mt-4 max-w-lg text-lg">
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
