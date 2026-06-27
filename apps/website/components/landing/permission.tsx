import { FadeIn } from "@/components/motion/fade-in";
import {
  PERMISSION_DESIRES,
  PERMISSION_HEADLINE,
  PERMISSION_INTRO,
} from "@/lib/constants";

export function Permission() {
  return (
    <section id="permission" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <p className="text-editorial-label text-muted-foreground mb-6">
            {PERMISSION_HEADLINE}
          </p>
          <div className="max-w-2xl space-y-3">
            {PERMISSION_INTRO.map((line) => (
              <p key={line} className="text-2xl font-medium tracking-tight sm:text-3xl">
                {line}
              </p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12">
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {PERMISSION_DESIRES.map((desire) => (
              <li
                key={desire}
                className="border-b border-border py-4 text-lg text-muted-foreground last:border-0"
              >
                {desire}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
