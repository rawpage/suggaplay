import { FadeIn } from "@/components/motion/fade-in";
import {
  MEMBERSHIP_FOUNDING,
  MEMBERSHIP_HEADLINE,
  MEMBERSHIP_INTRO,
  MEMBERSHIP_INTRO_CLOSING,
  MEMBERSHIP_PRIVILEGES,
  MEMBERSHIP_STANDARD,
  MEMBERSHIP_WOMEN,
} from "@/lib/constants";

function TierDivider() {
  return <hr className="border-border" />;
}

export function Membership() {
  return (
    <section id="membership" className="border-t border-border bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Intro */}
        <FadeIn>
          <p className="text-editorial-label text-muted-foreground mb-6">
            Membership
          </p>
          <h2 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {MEMBERSHIP_HEADLINE}
          </h2>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-14 max-w-3xl">
          <div className="space-y-4">
            {MEMBERSHIP_INTRO.map((line) => (
              <p key={line} className="text-xl font-medium sm:text-2xl">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {MEMBERSHIP_INTRO_CLOSING}
          </p>
        </FadeIn>

        {/* Tiers */}
        <div className="mt-20 space-y-0 divide-y divide-border border-y border-border">
          {/* Women */}
          <FadeIn delay={0.1}>
            <article className="grid gap-8 py-14 lg:grid-cols-[220px_1fr] lg:gap-16 lg:py-16">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {MEMBERSHIP_WOMEN.title}
                </h3>
                <p className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  {MEMBERSHIP_WOMEN.price}
                </p>
              </div>
              <div className="max-w-2xl space-y-6">
                <p className="text-lg leading-relaxed">
                  {MEMBERSHIP_WOMEN.description}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {MEMBERSHIP_WOMEN.note}
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Founding */}
          <FadeIn delay={0.15}>
            <article className="grid gap-8 bg-neutral-50 py-14 lg:grid-cols-[220px_1fr] lg:gap-16 lg:py-16 lg:pl-8">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {MEMBERSHIP_FOUNDING.title}
                </h3>
                <p className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  {MEMBERSHIP_FOUNDING.priceLabel}
                </p>
                <p className="mt-4 text-sm font-semibold leading-snug sm:text-base">
                  {MEMBERSHIP_FOUNDING.limitNote}
                </p>
              </div>
              <div className="max-w-2xl space-y-6">
                <p className="text-lg leading-relaxed">
                  {MEMBERSHIP_FOUNDING.description}
                </p>
                <p className="text-lg leading-relaxed">
                  {MEMBERSHIP_FOUNDING.features}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {MEMBERSHIP_FOUNDING.closing}
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Standard */}
          <FadeIn delay={0.2}>
            <article className="grid gap-8 py-14 lg:grid-cols-[220px_1fr] lg:gap-16 lg:py-16">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {MEMBERSHIP_STANDARD.title}
                </h3>
                <p className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  {MEMBERSHIP_STANDARD.priceLabel}
                </p>
              </div>
              <div className="max-w-2xl">
                <ul className="space-y-3">
                  {MEMBERSHIP_STANDARD.features.map((feature) => (
                    <li key={feature} className="text-lg leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        </div>

        {/* Privileges */}
        <FadeIn delay={0.25} className="mt-24 lg:mt-32">
          <TierDivider />
          <div className="pt-16 lg:pt-20">
            <h3 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {MEMBERSHIP_PRIVILEGES.headline}
            </h3>
            <div className="mt-12 max-w-3xl space-y-8">
              {MEMBERSHIP_PRIVILEGES.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-xl leading-relaxed sm:text-2xl"
                      : "text-lg leading-relaxed text-muted-foreground sm:text-xl"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
