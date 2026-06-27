import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/use-session";

export default function MembershipReviewScreen() {
  const { accessState, signOut } = useSession();
  const { applicationStatus } = accessState;

  const title =
    applicationStatus === "rejected"
      ? "Application not approved"
      : applicationStatus === "waitlisted"
        ? "You are on the waitlist"
        : "Membership under review";

  const body =
    applicationStatus === "rejected"
      ? "Thank you for applying. Our curation team was unable to approve your application at this time."
      : applicationStatus === "waitlisted"
        ? "Your application meets our standards. We will notify you when a membership spot opens."
        : "Our curation team is reviewing your application. You will hear from us soon.";

  return (
    <Screen className="justify-center px-6">
      <Text variant="label">Status</Text>
      <Text variant="title" className="mt-4">
        {title}
      </Text>
      <Text variant="muted" className="mt-2">
        {body}
      </Text>
      <Button label="Sign out" variant="secondary" className="mt-10" onPress={signOut} />
    </Screen>
  );
}
