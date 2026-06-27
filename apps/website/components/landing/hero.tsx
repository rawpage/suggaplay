"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";
import {
  BRAND_DESCRIPTOR,
  LAUNCH_CITY,
  SITE_HEADLINE,
  SITE_HERO_BODY,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-16 lg:grid lg:grid-cols-[1fr_42%]">
      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-end bg-white px-6 pb-20 pt-28 lg:px-12 lg:pb-28 xl:px-16">
        <FadeIn>
          <p className="text-editorial-label text-muted-foreground mb-10">
            {BRAND_DESCRIPTOR} · {LAUNCH_CITY}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="text-editorial-display max-w-2xl">{SITE_HEADLINE}</h1>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {SITE_HERO_BODY}
          </p>
        </FadeIn>

        <FadeIn delay={0.24} className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#waitlist"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-brand hover:bg-brand/90 h-12 rounded-none px-10 text-base text-white",
            )}
          >
            Request Membership
          </Link>
          <Link
            href="#intentions"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-none border-black px-10 text-base hover:bg-black hover:text-white",
            )}
          >
            Explore Preferences
          </Link>
        </FadeIn>
      </div>

      <div className="relative hidden min-h-[calc(100svh-4rem)] bg-neutral-950 lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        <div className="absolute inset-y-0 left-0 w-16 bg-brand" />
      </div>
    </section>
  );
}
