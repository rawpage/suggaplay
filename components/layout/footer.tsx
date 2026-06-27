import Link from "next/link";
import { LAUNCH_CITY, NAV_LINKS, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-lg font-semibold tracking-tight">{SITE_NAME}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
              {SITE_DESCRIPTION}
            </p>
            <p className="text-editorial-label mt-8 text-neutral-500">
              Launching in {LAUNCH_CITY}
            </p>
          </div>

          <div>
            <p className="text-editorial-label text-neutral-500">Navigate</p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-800 pt-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
