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
import { interleavedHomepageImages, sectionAccentImages } from "@/lib/editorial-images";

export default function Home() {
  const gallery = interleavedHomepageImages(64);

  return (
    <>
      <Header />
      <div className="lg:pl-[220px] xl:pl-[260px]">
        <main>
          <Hero />

          <section className="border-b border-border px-6 py-12 lg:px-10 xl:px-14">
            <EditorialSectionTitle className="mb-10">
              Members
            </EditorialSectionTitle>
            <EditorialMosaic ids={gallery.slice(0, 24)} columns={6} />
          </section>

          <Intentions />

          <section className="border-b border-border bg-neutral-50 px-6 py-12 lg:px-10 xl:px-14">
            <EditorialMosaic ids={gallery.slice(24, 40)} columns={4} />
          </section>

          <Problem />

          <section className="border-b border-border px-6 py-12 lg:px-10 xl:px-14">
            <EditorialSectionTitle className="mb-10">
              London
            </EditorialSectionTitle>
            <EditorialMosaic ids={gallery.slice(40, 56)} columns={4} />
          </section>

          <Membership />

          <section className="border-b border-border bg-black px-6 py-12 lg:px-10 xl:px-14">
            <EditorialMosaic ids={sectionAccentImages(56, 8)} columns={4} />
          </section>

          <Permission />

          <Manifesto />

          <section className="border-b border-border px-6 py-12 lg:px-10 xl:px-14">
            <EditorialMosaic ids={gallery.slice(0, 12)} columns={6} />
          </section>

          <HowItWorks />
          <WaitlistForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
