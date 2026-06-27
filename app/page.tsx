import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Manifesto } from "@/components/landing/manifesto";
import { Membership } from "@/components/landing/membership";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Membership />
        <HowItWorks />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
