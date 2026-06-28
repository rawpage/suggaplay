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
} from "@/lib/constants";
import { sectionAccentImages } from "@/lib/editorial-images";

export function Membership() {
  const portraits = sectionAccentImages(18, 3);

  return (
    <section id="membership" className="bg-white">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_320px] lg:gap-10 xl:gap-14 lg:pb-12 xl:pb-16">
        <div className="py-16 sm:py-24 lg:py-32">
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
            <p className="mt-8 text-lg leading-relaxed sm:text-xl">
              {MEMBERSHIP_INTRO_CLOSING}
            </p>
          </FadeIn>
        </div>

        <aside className="hidden lg:block lg:pt-32">
          <div className="flex h-full flex-col">
            {portraits.map((id) => (
              <EditorialImage
                key={id}
                id={id}
                aspect="portrait"
                className="flex-1"
                sizes="280px"
              />
            ))}
          </div>
        </aside>
      </div>

      <div className="lg:pr-10 xl:pr-14">
        <div>
          <FadeIn delay={0.1}>
            <article className="grid gap-8 bg-neutral-50 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)] lg:gap-16 lg:px-0 lg:py-16">
              <div className="lg:pr-4">
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
              <div className="max-w-2xl space-y-6 lg:pr-6 xl:pr-8">
                <p className="text-lg leading-relaxed">
                  {MEMBERSHIP_FOUNDING.description}
                </p>
                <p className="text-lg leading-relaxed">
                  {MEMBERSHIP_FOUNDING.features}
                </p>
                <p className="text-base leading-relaxed">
                  {MEMBERSHIP_FOUNDING.closing}
                </p>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.15}>
            <article className="grid gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)] lg:gap-16 lg:px-0 lg:py-16">
              <div className="lg:pr-4">
                <h3 className="text-editorial-headline">
                  {MEMBERSHIP_STANDARD.title}
                </h3>
                <p className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  {MEMBERSHIP_STANDARD.priceLabel}
                </p>
              </div>
              <div className="max-w-2xl lg:pr-6 xl:pr-8">
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

        <FadeIn delay={0.25} className="pt-12 lg:pt-16 lg:pr-6 xl:pr-8">
          <div>
            <h3 className="text-editorial-section max-w-3xl">
              {MEMBERSHIP_PRIVILEGES.headline}
            </h3>
            <div className="mt-8 max-w-3xl space-y-6">
              {MEMBERSHIP_PRIVILEGES.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed sm:text-xl">
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
