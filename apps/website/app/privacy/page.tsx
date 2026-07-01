import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { SITE_NAME } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects your personal information when you join the waitlist or use our services.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        {SITE_NAME} is a private members&apos; club for modern relationships. This
        policy explains how we handle your information when you visit our website,
        join the waitlist, or interact with us before launch.
      </p>

      <section>
        <h2 className="text-xl font-medium">Information we collect</h2>
        <p className="mt-3">
          When you request a place on the waitlist, we may collect your name,
          email address, and any details you choose to share in your application.
          We also collect limited technical data such as browser type and page
          interactions to keep the site secure and improve the experience.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium">How we use your information</h2>
        <p className="mt-3">
          We use your information to review waitlist applications, communicate
          with you about membership, operate and protect our services, and comply
          with legal obligations. We do not sell your personal data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium">Sharing and retention</h2>
        <p className="mt-3">
          We share data only with trusted service providers who help us run the
          website, store applications, and send communications. We retain
          information only for as long as needed for the purposes described in
          this policy or as required by law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium">Your rights</h2>
        <p className="mt-3">
          Depending on where you live, you may have rights to access, correct,
          delete, or restrict use of your personal data. To make a request,
          contact us using the details on this website.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium">Updates</h2>
        <p className="mt-3">
          We may update this policy as {SITE_NAME} evolves. Material changes will
          be reflected on this page with a revised effective date.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Effective date: 1 July 2026
        </p>
      </section>
    </LegalPage>
  );
}
