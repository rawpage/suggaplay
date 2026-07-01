import { FadeIn } from "@/components/motion/fade-in";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { EditorialKicker } from "@/components/editorial/editorial-section";
import {
  PERMISSION_DESIRES,
  PERMISSION_HEADLINE,
  PERMISSION_INTRO,
} from "@/lib/constants";
import { sectionAccentImages } from "@/lib/editorial-images";

export function Permission() {
  const images = sectionAccentImages(21, 6);

  return (
    <section id="permission">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_320px] lg:gap-10 xl:gap-14">
        <div className="grid min-w-0 gap-8 2xl:grid-cols-[320px_minmax(0,1fr)] 2xl:gap-14">
          <aside className="grid grid-cols-2 gap-1 2xl:grid-cols-1 2xl:gap-0">
            {images.map((id) => (
              <EditorialImage
                key={id}
                id={id}
                aspect="portrait"
                className="min-h-[180px] lg:min-h-[220px]"
                sizes="(max-width: 1024px) 50vw, 320px"
              />
            ))}
          </aside>

          <div className="@container min-w-0 py-12 sm:py-20 lg:py-32">
            <FadeIn>
              <EditorialKicker>{PERMISSION_HEADLINE}</EditorialKicker>
              <div className="mt-8 max-w-2xl space-y-3">
                {PERMISSION_INTRO.map((line) => (
                  <p key={line} className="text-editorial-headline">
                    {line}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-12">
              <ul className="grid grid-cols-1 gap-3 @md:grid-cols-2 @3xl:grid-cols-3">
                {PERMISSION_DESIRES.map((desire) => (
                  <li
                    key={desire}
                    className="min-w-0 break-words bg-background px-5 py-5 text-base leading-relaxed sm:text-lg"
                  >
                    {desire}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        <div aria-hidden className="hidden lg:block" />
      </div>
    </section>
  );
}
