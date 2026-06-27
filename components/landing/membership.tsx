import { FadeIn } from "@/components/motion/fade-in";
import { SUBSCRIPTION_PLANS } from "@/lib/subscription";

export function Membership() {
  const { founding, standard } = SUBSCRIPTION_PLANS;

  return (
    <section id="membership" className="bg-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <p className="text-editorial-label text-neutral-500 mb-6">
            Membership
          </p>
          <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Simple pricing. No hidden costs.
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <FadeIn delay={0.1}>
            <article className="flex h-full flex-col border border-neutral-800 p-8 lg:p-10">
              <p className="text-editorial-label text-neutral-500">Women</p>
              <p className="mt-6 text-5xl font-bold tracking-tight">Free</p>
              <p className="mt-2 text-neutral-400">Forever</p>
              <p className="mt-8 flex-1 text-sm leading-relaxed text-neutral-400">
                Full platform access at no cost. Browse, message, and connect
                without limits.
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={0.2}>
            <article className="relative flex h-full flex-col border border-brand bg-neutral-950 p-8 lg:p-10">
              <span className="text-editorial-label bg-brand absolute -top-3 left-8 px-3 py-1 text-white">
                Limited — {founding.cap} spots
              </span>
              <p className="text-editorial-label text-brand">Men · Founding</p>
              <p className="mt-6 text-5xl font-bold tracking-tight">
                £{founding.priceGbp}
                <span className="text-lg font-normal text-neutral-400">
                  /mo
                </span>
              </p>
              <p className="mt-2 text-neutral-400">{founding.description}</p>
              <p className="mt-8 flex-1 text-sm leading-relaxed text-neutral-400">
                Unlimited messages, full profile access, visitors, favourites,
                and private albums when granted.
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={0.3}>
            <article className="flex h-full flex-col border border-neutral-800 p-8 lg:p-10">
              <p className="text-editorial-label text-neutral-500">
                Men · Standard
              </p>
              <p className="mt-6 text-5xl font-bold tracking-tight">
                £{standard.priceGbp}
                <span className="text-lg font-normal text-neutral-400">
                  /mo
                </span>
              </p>
              <p className="mt-2 text-neutral-400">After founding cap fills</p>
              <p className="mt-8 flex-1 text-sm leading-relaxed text-neutral-400">
                Same unlimited access as founding members. One membership, no
                credits or tokens — ever.
              </p>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
