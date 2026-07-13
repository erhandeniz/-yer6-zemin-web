import type { Metadata } from "next";
import { LoginView } from "@/components/auth/login-view";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to the YER6 AI engineering workspace.",
  robots: { index: false, follow: false }
};

export default function LoginPage() {
  return <LoginView />;
}
