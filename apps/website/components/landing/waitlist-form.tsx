"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { submitWaitlistAction } from "@/actions/waitlist.actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/motion/fade-in";
import { WAITLIST_BODY, WAITLIST_HEADLINE } from "@/lib/constants";
import { waitlistSchema, type WaitlistFormInput } from "@/lib/waitlist-schema";
import { cn } from "@/lib/utils";

type WaitlistFormValues = WaitlistFormInput;

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { name: "", email: "", city: "", gender: undefined },
  });

  const gender = watch("gender");

  const onSubmit = async (values: WaitlistFormValues) => {
    setServerError(null);
    const result = await submitWaitlistAction(values);

    if (result.success) {
      setSubmitted(true);
      reset();
      return;
    }

    setServerError(result.error ?? "Something went wrong. Please try again.");
  };

  return (
    <section
      id="waitlist"
      className="bg-neutral-50 py-24 sm:py-32"
    >
      <div>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <p className="text-editorial-kicker">Join</p>
            <h2 className="text-editorial-section mt-6">{WAITLIST_HEADLINE}</h2>
            <p className="mt-6 max-w-md leading-relaxed">{WAITLIST_BODY}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            {submitted ? (
              <div className="flex flex-col items-start border border-border bg-background p-10">
                <CheckCircle2 className="size-10 text-brand" />
                <p className="mt-6 text-2xl font-semibold tracking-tight">
                  You&apos;re on the waitlist
                </p>
                <p className="mt-3 text-sm">
                  We&apos;ll review your request and be in touch when your
                  membership is ready.
                </p>
                <Button
                  variant="outline"
                  className="mt-8 rounded-none"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="border border-border bg-background p-8 sm:p-10"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-editorial-label">
                      Full name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="rounded-none border-black/20 focus-visible:border-black"
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
                    <Label htmlFor="email" className="text-editorial-label">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="rounded-none border-black/20 focus-visible:border-black"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-editorial-label">
                      City
                    </Label>
                    <Input
                      id="city"
                      placeholder="Where are you based?"
                      className="rounded-none border-black/20 focus-visible:border-black"
                      aria-invalid={!!errors.city}
                      {...register("city")}
                    />
                    {errors.city && (
                      <p className="text-destructive text-sm">
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label className="text-editorial-label">I am a</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {(["woman", "man"] as const).map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() =>
                            setValue("gender", value, { shouldValidate: true })
                          }
                          className={cn(
                            "border px-4 py-3 text-sm font-medium transition-colors",
                            gender === value
                              ? "border-black bg-black text-white"
                              : "border-border bg-background hover:border-black",
                          )}
                        >
                          {value === "woman" ? "Woman" : "Man"}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" {...register("gender")} />
                    {errors.gender && (
                      <p className="text-destructive text-sm">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>

                  {serverError && (
                    <p className="text-destructive text-sm">{serverError}</p>
                  )}

                  <Button
                    type="submit"
                    className="bg-brand hover:bg-brand/90 h-12 w-full rounded-none text-base text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Join the waitlist"
                    )}
                  </Button>

                  <p className="text-center text-xs">Discreet. No spam.</p>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
