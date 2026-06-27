import { FadeIn } from "@/components/motion/fade-in";
import { MANIFESTO_BELIEFS } from "@/lib/constants";

export function Manifesto() {
  return (
    <section className="border-t border-border bg-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <p className="text-editorial-label text-neutral-500 mb-10">We believe</p>
          <ul className="max-w-3xl space-y-8">
            {MANIFESTO_BELIEFS.map((belief) => (
              <li
                key={belief}
                className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-4xl"
              >
                {belief}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
