"use client";

import {
  BarChart3,
  Radio,
  Shield,
  Sparkles,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Radio,
  Sparkles,
  Users,
  BarChart3,
  Trophy,
  Shield,
};

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to play at the next level
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Powerful tools for creators, delightful experiences for fans, and
            infrastructure that scales with your ambition.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? Sparkles;

            return (
              <FadeIn key={feature.id} delay={index * 0.08}>
                <Card className="border-border/60 bg-card/60 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader>
                    <div className="bg-primary/10 text-primary mb-2 flex size-11 items-center justify-center rounded-xl">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
