"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { LAUNCH_LABEL, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop — W-style left rail */}
      <header className="fixed inset-y-0 left-0 z-50 hidden w-[220px] flex-col bg-background px-8 py-10 lg:flex xl:w-[260px]">
        <Link
          href="/"
          className="font-editorial text-5xl font-normal leading-none tracking-tight"
        >
          {SITE_NAME.slice(0, 1)}
        </Link>

        <p className="text-editorial-label mt-3">{LAUNCH_LABEL}</p>

        <nav className="mt-14 flex flex-1 flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-editorial-nav hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-4 pt-8">
          <Link
            href="#waitlist"
            className="text-editorial-label hover:opacity-70 block transition-opacity"
          >
            Sign In
          </Link>
          <Link
            href="#waitlist"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-brand hover:bg-brand/90 w-full rounded-none text-white",
            )}
          >
            Join waitlist
          </Link>
        </div>
      </header>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-border bg-background/95 pl-[max(2.5rem,env(safe-area-inset-left))] pr-[max(2.5rem,env(safe-area-inset-right))] backdrop-blur-sm sm:pl-12 sm:pr-12 lg:hidden">
        <Link href="/" className="font-editorial text-2xl">
          {SITE_NAME.slice(0, 1)}
        </Link>
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-14 lg:hidden">
          <nav className="flex flex-col gap-6 pl-[max(2.5rem,env(safe-area-inset-left))] pr-[max(2.5rem,env(safe-area-inset-right))] py-10 sm:pl-12 sm:pr-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-editorial-nav"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#waitlist"
              className={cn(
                buttonVariants(),
                "bg-brand hover:bg-brand/90 mt-6 rounded-none text-white",
              )}
              onClick={() => setMobileOpen(false)}
            >
              Join waitlist
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
