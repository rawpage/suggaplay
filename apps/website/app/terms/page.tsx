import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { SITE_NAME } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description: `Terms governing use of the ${SITE_NAME} website, waitlist, and membership services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        These terms govern your use of the {SITE_NAME} website and waitlist. By
        accessing the site or submitting an application, you agree to these
        terms.
      </p>

      <section>
        <h2 className="text-xl font-medium">Membership model</h2>
        <p className="mt-3">
          {SITE_NAME} is a curated members&apos; club. Membership is offered on a
          monthly subscription basis. There are no credits, tokens, pay-per-message
          charges, or wallet systems. Women join free. Men pay a monthly
          membership fee as described on the site.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium">Waitlist and applications</h2>
        <p className="mt-3">
          Submitting a waitlist request does not guarantee membership. We may
          approve, decline, or defer applications at our discretion to maintain
          the quality and safety of the community.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium">Acceptable use</h2>
        <p className="mt-3">
          You agree to use {SITE_NAME} lawfully and respectfully. You must not
          harass other members, misrepresent yourself, attempt to circumvent
          security, or use the service for unlawful activity.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium">Availability</h2>
        <p className="mt-3">
          Features, pricing, and launch timing may change as we prepare for
          release. We will communicate material changes to approved members where
          appropriate.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium">Limitation of liability</h2>
        <p className="mt-3">
          The website and waitlist are provided on an &quot;as is&quot; basis to
          the extent permitted by law. {SITE_NAME} is not liable for indirect
          or consequential losses arising from your use of the site before full
          service launch.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium">Contact</h2>
        <p className="mt-3">
          Questions about these terms can be directed through the contact options
          provided on this website.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Effective date: 1 July 2026
        </p>
      </section>
    </LegalPage>
  );
}
