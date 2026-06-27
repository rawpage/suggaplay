import { FadeIn } from "@/components/motion/fade-in";
import { COMPARISON, MEMBERSHIP_POINTS } from "@/lib/constants";

export function Manifesto() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <p className="text-editorial-label text-muted-foreground mb-6">
              The difference
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Membership,
              <br />
              not microtransactions.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div className="border-l-2 border-neutral-300 pl-6">
                <p className="text-sm text-muted-foreground">Typical apps</p>
                <p className="mt-2 text-lg">{COMPARISON.them}</p>
              </div>
              <div className="border-l-2 border-brand pl-6">
                <p className="text-editorial-label text-brand">SuggaPlay</p>
                <p className="mt-2 text-lg font-medium">{COMPARISON.us}</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-24 grid gap-px bg-border sm:grid-cols-3">
          {MEMBERSHIP_POINTS.map((point, index) => (
            <FadeIn key={point.title} delay={index * 0.1}>
              <div className="bg-background p-8 lg:p-10">
                <p className="text-editorial-label text-muted-foreground mb-4">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-semibold tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
