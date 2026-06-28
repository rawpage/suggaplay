import { FadeIn } from "@/components/motion/fade-in";
import { EditorialKicker } from "@/components/editorial/editorial-section";
import { MANIFESTO_BELIEFS } from "@/lib/constants";

export function Manifesto() {
  return (
    <section className="border-b border-border bg-black py-24 text-white sm:py-32">
      <div className="px-6 lg:px-10 xl:px-14">
        <FadeIn>
          <EditorialKicker className="text-neutral-500">We believe</EditorialKicker>
          <ul className="mt-12 max-w-4xl space-y-10">
            {MANIFESTO_BELIEFS.map((belief) => (
              <li
                key={belief}
                className="text-editorial-headline text-white sm:text-4xl lg:text-5xl"
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
