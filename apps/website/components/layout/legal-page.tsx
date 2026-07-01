import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SITE_NAME } from "@/lib/constants";

type LegalPageProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <>
      <Header />
      <div className="lg:pl-[220px] xl:pl-[260px]">
        <div className="editorial-gutter overflow-x-hidden lg:mr-[72px] lg:min-h-screen lg:pr-0 xl:mr-[96px]">
          <main className="py-16 pt-24 lg:pt-16">
            <p className="text-editorial-label">Legal</p>
            <h1 className="text-editorial-display mt-4 max-w-3xl">{title}</h1>
            <div className="prose-legal mt-10 max-w-3xl space-y-6 text-base leading-relaxed">
              {children}
            </div>
            <p className="mt-12 text-sm">
              <Link href="/" className="transition-colors hover:opacity-70">
                Back to {SITE_NAME}
              </Link>
            </p>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
