"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { SITE_DESCRIPTION } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-brand-glow absolute top-0 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,var(--background)_65%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <Badge variant="secondary" className="mb-6 px-3 py-1">
              Now accepting early access signups
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-brand-gradient">Play.</span> Create.
              Connect.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
              {SITE_DESCRIPTION}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#waitlist"
                className={cn(buttonVariants({ size: "lg" }), "h-12 px-8 text-base")}
              >
                Join the Waitlist
                <ArrowRight className="ml-1 size-4" />
              </Link>
              <Link
                href="#how-it-works"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 px-8 text-base",
                )}
              >
                <Play className="mr-1 size-4" />
                See How It Works
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-16 sm:mt-20">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="border-border/60 bg-card/50 relative mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-2xl shadow-primary/10 backdrop-blur-sm"
          >
            <div className="border-border/50 flex items-center gap-2 border-b px-4 py-3">
              <span className="size-3 rounded-full bg-red-400/80" />
              <span className="size-3 rounded-full bg-yellow-400/80" />
              <span className="size-3 rounded-full bg-green-400/80" />
              <span className="text-muted-foreground ml-2 text-xs">
                suggaplay.studio
              </span>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
              {[
                { label: "Live Viewers", value: "12.4K", trend: "+18%" },
                { label: "Engagement", value: "94%", trend: "+6%" },
                { label: "Revenue", value: "$8.2K", trend: "+32%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-muted/40 rounded-xl p-4 text-center sm:text-left"
                >
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-2xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-emerald-500">
                    {stat.trend}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
