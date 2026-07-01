import Link from "next/link";
import {
  BRAND_DESCRIPTOR,
  LAUNCH_LABEL,
  NAV_LINKS,
  SITE_NAME,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="font-editorial text-3xl font-normal uppercase leading-none tracking-[0.04em]">
              Sugga Play
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              {BRAND_DESCRIPTOR}
            </p>
            <p className="text-editorial-label mt-8">{LAUNCH_LABEL}</p>
          </div>

          <div>
            <p className="text-editorial-label">Navigate</p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE_NAME}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:opacity-70">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:opacity-70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
