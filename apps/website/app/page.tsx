import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Intentions } from "@/components/landing/intentions";
import { Manifesto } from "@/components/landing/manifesto";
import { Membership } from "@/components/landing/membership";
import { Permission } from "@/components/landing/permission";
import { Problem } from "@/components/landing/problem";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { EditorialMosaic } from "@/components/editorial/editorial-mosaic";
import { EditorialSectionTitle } from "@/components/editorial/editorial-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LAUNCH_LABEL } from "@/lib/constants";
import { interleavedHomepageImages, sectionAccentImages } from "@/lib/editorial-images";

export default function Home() {
  const gallery = interleavedHomepageImages(64);

  return (
    <>
      <Header />
      <div className="lg:pl-[220px] xl:pl-[260px]">
        <div className="editorial-gutter overflow-x-hidden lg:mr-[72px] lg:min-h-screen lg:pr-0 xl:mr-[96px]">
          <main>
          <Hero />

          <section className="py-12">
            <EditorialSectionTitle className="mb-10">
              Members
            </EditorialSectionTitle>
            <EditorialMosaic ids={gallery.slice(0, 24)} columns={6} />
          </section>

          <Intentions />

          <section className="bg-neutral-50 py-12">
            <div className="editorial-section-inset">
              <EditorialMosaic ids={gallery.slice(24, 40)} columns={4} />
            </div>
          </section>

          <Problem />

          <section className="py-12">
            <EditorialSectionTitle className="mb-10">
              {LAUNCH_LABEL}
            </EditorialSectionTitle>
            <EditorialMosaic ids={gallery.slice(40, 56)} columns={4} />
          </section>

          <Membership />

          <section className="py-12">
            <EditorialMosaic ids={sectionAccentImages(56, 8)} columns={4} />
          </section>

          <Permission />

          <Manifesto />

          <section className="py-12">
            <EditorialMosaic ids={gallery.slice(0, 12)} columns={6} />
          </section>

          <HowItWorks />
          <WaitlistForm />
        </main>
        <Footer />
        </div>
      </div>
      <div
        aria-hidden
        className="fixed inset-y-0 right-0 z-40 hidden w-[72px] bg-background lg:block xl:w-[96px]"
      />
    </>
  );
}
