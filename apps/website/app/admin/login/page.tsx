import { Suspense } from "react";
import AdminLoginForm from "./login-form";

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<p className="text-sm text-neutral-600">Loading…</p>}>
      <AdminLoginForm />
    </Suspense>
  );
}
