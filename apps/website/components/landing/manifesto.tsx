import { FadeIn } from "@/components/motion/fade-in";
import { EditorialKicker } from "@/components/editorial/editorial-section";
import { MANIFESTO_BELIEFS } from "@/lib/constants";

export function Manifesto() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div>
        <FadeIn>
          <EditorialKicker>We believe</EditorialKicker>
          <ul className="mt-12 max-w-4xl space-y-10">
            {MANIFESTO_BELIEFS.map((belief) => (
              <li
                key={belief}
                className="text-editorial-headline sm:text-4xl lg:text-5xl"
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
