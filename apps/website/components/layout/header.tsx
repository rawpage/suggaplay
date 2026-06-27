"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { LAUNCH_CITY, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {SITE_NAME}
        </Link>

        <p className="text-editorial-label text-muted-foreground hidden sm:block">
          {LAUNCH_CITY}
        </p>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-editorial-label text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#waitlist"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "text-editorial-label rounded-none px-0 hover:bg-transparent",
            )}
          >
            Sign In
          </Link>
          <Link
            href="#waitlist"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-brand hover:bg-brand/90 rounded-none px-5 text-white",
            )}
          >
            Request Membership
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-editorial-label py-3"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#waitlist"
              className={cn(
                buttonVariants(),
                "bg-brand hover:bg-brand/90 mt-4 rounded-none text-white",
              )}
              onClick={() => setMobileOpen(false)}
            >
              Request Membership
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
