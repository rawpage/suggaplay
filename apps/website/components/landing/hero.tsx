"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { EditorialKicker } from "@/components/editorial/editorial-section";
import { buttonVariants } from "@/components/ui/button";
import {
  BRAND_DESCRIPTOR,
  LAUNCH_CITY,
  SITE_HEADLINE,
  SITE_HERO_BODY,
} from "@/lib/constants";
import { heroFeatureImages } from "@/lib/editorial-images";
import { cn } from "@/lib/utils";

export function Hero() {
  const { hero, rail } = heroFeatureImages();

  return (
    <section className="border-b border-border pt-14 lg:pt-0">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_320px]">
        {/* Center feature — W Magazine hero column */}
        <div className="px-6 py-10 lg:px-10 lg:py-16 xl:px-14">
          <FadeIn>
            <EditorialImage
              id={hero}
              priority
              aspect="portrait"
              className="max-h-[72vh] w-full lg:max-h-[78vh]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </FadeIn>

          <FadeIn delay={0.08} className="mt-8 max-w-xl">
            <EditorialKicker>
              {BRAND_DESCRIPTOR} · {LAUNCH_CITY}
            </EditorialKicker>
            <h1 className="text-editorial-display mt-5">{SITE_HEADLINE}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {SITE_HERO_BODY}
            </p>
          </FadeIn>

          <FadeIn delay={0.16} className="mt-10 flex flex-col gap-4 sm:flex-row">
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

        {/* Right rail — stacked editorial tiles */}
        <aside className="hidden border-l border-border lg:block">
          <div className="flex flex-col">
            {rail.map((id, index) => (
              <FadeIn key={id} delay={0.06 * index}>
                <EditorialImage
                  id={id}
                  priority={index === 0}
                  aspect="portrait"
                  className="min-h-[28vh] w-full border-b border-border"
                  sizes="320px"
                />
              </FadeIn>
            ))}
          </div>
        </aside>
      </div>

      {/* Mobile rail strip */}
      <div className="grid grid-cols-3 gap-1 border-t border-border lg:hidden">
        {rail.map((id) => (
          <EditorialImage key={id} id={id} aspect="portrait" sizes="33vw" />
        ))}
      </div>
    </section>
  );
}
