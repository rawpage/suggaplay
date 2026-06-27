"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/motion/fade-in";
import { submitWaitlistEntry } from "@/services/waitlist.service";

const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = async (values: WaitlistFormValues) => {
    const result = await submitWaitlistEntry(values);

    if (result.success) {
      setSubmitted(true);
      reset();
    }
  };

  return (
    <section id="waitlist" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <FadeIn>
            <Card className="border-border/60 overflow-hidden shadow-xl shadow-primary/5">
              <div className="bg-brand-gradient h-1.5 w-full" />
              <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl">
                  Get early access
                </CardTitle>
                <CardDescription className="text-base">
                  Join thousands of creators and fans on the waitlist. Be first
                  when we launch.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center py-6 text-center">
                    <CheckCircle2 className="size-12 text-emerald-500" />
                    <p className="mt-4 text-lg font-semibold">
                      You&apos;re on the list!
                    </p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      We&apos;ll reach out with your exclusive early access
                      invite soon.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit another email
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input
                        id="name"
                        placeholder="Alex Rivera"
                        aria-invalid={!!errors.name}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 size-4 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        "Join the Waitlist"
                      )}
                    </Button>

                    <p className="text-muted-foreground text-center text-xs">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
