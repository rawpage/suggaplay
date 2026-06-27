"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { LAUNCH_CITY, SITE_TAGLINE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-16">
      <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-neutral-100 lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        <div className="absolute inset-y-0 left-0 w-24 bg-brand" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-end px-6 pb-16 pt-24 lg:px-12 lg:pb-24">
        <FadeIn>
          <p className="text-editorial-label text-muted-foreground mb-8">
            {LAUNCH_CITY} · Invite-only early access
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-editorial-display max-w-4xl">
            Where successful people meet{" "}
            <span className="text-brand">without the games.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {SITE_TAGLINE} Membership, not microtransactions. Women join free
            forever. Men pay one monthly fee for unlimited access.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#waitlist"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-brand hover:bg-brand/90 h-12 rounded-none px-8 text-base text-white",
            )}
          >
            I&apos;m a Woman — Join Free
          </Link>
          <Link
            href="#waitlist"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-none border-black px-8 text-base hover:bg-black hover:text-white",
            )}
          >
            I&apos;m a Man — Founding £9.99/mo
          </Link>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-editorial-label mt-8 text-muted-foreground">
            First 500 men lock founding rate for life
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
