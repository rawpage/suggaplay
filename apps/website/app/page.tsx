import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Intentions } from "@/components/landing/intentions";
import { Manifesto } from "@/components/landing/manifesto";
import { Membership } from "@/components/landing/membership";
import { Permission } from "@/components/landing/permission";
import { Problem } from "@/components/landing/problem";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intentions />
        <Problem />
        <Membership />
        <Permission />
        <Manifesto />
        <HowItWorks />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
