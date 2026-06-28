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
    <section id="permission" className="border-b border-border">
      <div className="grid lg:grid-cols-[340px_1fr]">
        <aside className="grid grid-cols-2 gap-1 border-b border-border lg:grid-cols-1 lg:border-b-0 lg:border-r">
          {images.map((id) => (
            <EditorialImage
              key={id}
              id={id}
              aspect="portrait"
              className="min-h-[180px] lg:min-h-[220px]"
              sizes="(max-width: 1024px) 50vw, 340px"
            />
          ))}
        </aside>

        <div className="px-6 py-24 sm:py-32 lg:px-10 xl:px-14">
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
            <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {PERMISSION_DESIRES.map((desire) => (
                <li
                  key={desire}
                  className="bg-background px-4 py-5 text-lg text-muted-foreground"
                >
                  {desire}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
