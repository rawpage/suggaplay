import { FadeIn } from "@/components/motion/fade-in";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { EditorialKicker } from "@/components/editorial/editorial-section";
import {
  MEMBERSHIP_FOUNDING,
  MEMBERSHIP_HEADLINE,
  MEMBERSHIP_INTRO,
  MEMBERSHIP_INTRO_CLOSING,
  MEMBERSHIP_PRIVILEGES,
  MEMBERSHIP_STANDARD,
  MEMBERSHIP_WOMEN,
} from "@/lib/constants";
import { sectionAccentImages } from "@/lib/editorial-images";

function TierDivider() {
  return <hr className="border-border" />;
}

export function Membership() {
  const portraits = sectionAccentImages(18, 3);

  return (
    <section id="membership" className="border-b border-border bg-white">
      <div className="grid border-b border-border lg:grid-cols-[1fr_280px]">
        <div className="px-6 py-24 sm:py-32 lg:px-10 xl:px-14">
          <FadeIn>
            <EditorialKicker>Membership</EditorialKicker>
            <h2 className="text-editorial-section mt-6 max-w-4xl">
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
        </div>

        <aside className="hidden border-l border-border lg:block">
          {portraits.map((id) => (
            <EditorialImage
              key={id}
              id={id}
              aspect="portrait"
              className="min-h-[33%] border-b border-border last:border-b-0"
              sizes="280px"
            />
          ))}
        </aside>
      </div>

      <div className="px-6 lg:px-10 xl:px-14">
        <div className="divide-y divide-border border-b border-border">
          <FadeIn delay={0.1}>
            <article className="grid gap-8 py-14 lg:grid-cols-[220px_1fr] lg:gap-16 lg:py-16">
              <div>
                <h3 className="text-editorial-headline">{MEMBERSHIP_WOMEN.title}</h3>
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

          <FadeIn delay={0.15}>
            <article className="grid gap-8 bg-neutral-50 py-14 lg:grid-cols-[220px_1fr] lg:gap-16 lg:py-16 lg:pl-8">
              <div>
                <h3 className="text-editorial-headline">
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

          <FadeIn delay={0.2}>
            <article className="grid gap-8 py-14 lg:grid-cols-[220px_1fr] lg:gap-16 lg:py-16">
              <div>
                <h3 className="text-editorial-headline">
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

        <FadeIn delay={0.25} className="py-24 lg:py-32">
          <TierDivider />
          <div className="pt-16 lg:pt-20">
            <h3 className="text-editorial-section max-w-3xl">
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
