"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowRight, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { useAITranslation } from "@/components/i18n-provider";
import { Button } from "@/components/ui/button";

const inputClass =
  "mt-1.5 h-11 w-full rounded-md border border-white/10 bg-white/[0.035] px-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-primary/45";

export function LoginView() {
  const { t, locale } = useAITranslation();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [notice, setNotice] = useState("");
  const [resetInfo, setResetInfo] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    try {
      const result = await signIn("credentials", {
        email: form.get("email"),
        password: form.get("password"),
        redirect: false
      });
      if (result?.ok) router.push("/");
      else setError(t("The email or password could not be verified."));
    } catch {
      setError(t("The email or password could not be verified."));
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setNotice("");
    const form = new FormData(event.currentTarget);
    const value = (key: string) => String(form.get(key) ?? "");
    const password = value("password");
    const passwordConfirm = value("passwordConfirm");

    if (password !== passwordConfirm) {
      setError(t("Passwords do not match."));
      setLoading(false);
      return;
    }
    if (password.length < 12 || !/[a-zA-ZçğıöşüÇĞİÖŞÜ]/.test(password) || !/\d/.test(password)) {
      setError(t("Password must be at least 12 characters and include letters and numbers."));
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: value("firstName"),
          lastName: value("lastName"),
          email: value("email"),
          password,
          passwordConfirm,
          companyName: value("companyName"),
          jobTitle: value("jobTitle"),
          country: value("country"),
          city: value("city"),
          phone: value("phone"),
          acceptTerms: form.get("acceptTerms") === "on",
          locale,
          website: value("website")
        })
      });
      const data = (await res.json().catch(() => null)) as
        | { ok: boolean; code?: string; verificationRequired?: boolean }
        | null;

      if (res.ok && data?.ok) {
        if (data.verificationRequired) {
          setNotice(t("Your registration was received. Verify your email, then sign in."));
          setMode("login");
        } else {
          // Immediate activation → sign the user straight in (session rotation
          // handled by NextAuth issuing a fresh JWT).
          const signedIn = await signIn("credentials", {
            email: value("email"),
            password,
            redirect: false
          });
          if (signedIn?.ok) {
            router.push("/");
            return;
          }
          setNotice(t("If this email is available, your account has been created. Try signing in."));
          setMode("login");
        }
      } else if (data?.code === "registration_closed") {
        setError(t("Registration is currently closed."));
      } else if (data?.code === "rate_limited") {
        setError(t("Too many attempts. Please wait a minute and try again."));
      } else if (data?.code === "weak_password") {
        setError(t("Password must be at least 12 characters and include letters and numbers."));
      } else {
        setError(t("Check your details and try again."));
      }
    } catch {
      setError(t("Check your details and try again."));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen bg-[#080808] lg:grid-cols-[minmax(0,1fr)_minmax(480px,.72fr)]">
      <section className="relative hidden overflow-hidden border-r border-white/[0.075] lg:block">
        <Image src="/projects/pekintas.jpg" alt={t("Geotechnical ground improvement project")} fill priority sizes="60vw" className="object-cover grayscale-[30%]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.55),rgba(5,5,5,.15)),linear-gradient(0deg,#080808_0%,transparent_70%)]" />
        <div className="absolute inset-0 app-grid opacity-20" />
        <div className="relative flex h-full flex-col justify-between p-10 xl:p-14">
          <BrandMark />
          <div className="max-w-xl pb-8">
            <p className="technical-label text-primary/75">{t("Engineering intelligence")}</p>
            <h1 className="mt-4 max-w-lg text-4xl font-semibold leading-[1.15] text-white xl:text-5xl">{t("Decisions grounded in subsurface evidence.")}</h1>
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/55">{t("Analyze project files, interrogate design assumptions and move from raw ground data to review-ready engineering outputs.")}</p>
            <div className="mt-8 flex gap-7 border-t border-white/15 pt-6">
              <div><p className="text-lg font-semibold">18</p><p className="mt-1 text-[10px] uppercase text-white/35">{t("Engineering methods")}</p></div>
              <div><p className="text-lg font-semibold">256 MB</p><p className="mt-1 text-[10px] uppercase text-white/35">{t("Per source file")}</p></div>
              <div><p className="text-lg font-semibold">EU</p><p className="mt-1 text-[10px] uppercase text-white/35">{t("Data region")}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10">
        <div className="w-full max-w-sm">
          <BrandMark className="mb-12 lg:hidden" />
          <div className="mb-8"><p className="technical-label text-primary/70">{t("Secure workspace")}</p><h2 className="mt-3 text-2xl font-semibold text-white">{t(mode === "login" ? "Welcome back" : "Create your account")}</h2><p className="mt-2 text-xs leading-5 text-white/38">{t(mode === "login" ? "Sign in with your organization credentials." : "Set up your company workspace in minutes.")}</p></div>
          {notice ? <p role="status" className="mb-4 rounded-md border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-2.5 text-xs text-emerald-300">{notice}</p> : null}
          {mode === "login" ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-xs text-white/52">{t("Work email")}<input required name="email" type="email" autoComplete="email" placeholder="name@company.com" className={inputClass} /></label>
            <label className="block text-xs text-white/52">{t("Password")}<span className="relative mt-1.5 block"><input required name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder={t("Enter your password")} className="h-11 w-full rounded-md border border-white/10 bg-white/[0.035] px-3 pr-11 text-sm text-white outline-none placeholder:text-white/20 focus:border-primary/45" /><button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-0 top-0 grid size-11 place-items-center text-white/28 hover:text-white/55" aria-label={t(showPassword ? "Hide password" : "Show password")}>{showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button></span></label>
            <div className="flex items-center justify-between"><label className="flex items-center gap-2 text-[11px] text-white/36"><input type="checkbox" className="size-3.5 accent-[#e2b54c]" />{t("Remember this device")}</label><button type="button" onClick={() => setResetInfo((value) => !value)} className="text-[11px] text-primary/65 hover:text-primary">{t("Forgot password?")}</button></div>
            {resetInfo ? <p className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[11px] leading-4 text-white/45">{t("Password reset links are sent once an email provider is configured. Please contact your administrator.")}</p> : null}
            {error ? <p role="alert" className="rounded-md border border-red-400/15 bg-red-400/[0.06] px-3 py-2.5 text-xs text-red-300">{error}</p> : null}
            <Button type="submit" size="lg" className="w-full" disabled={loading}>{t(loading ? "Verifying..." : "Sign in")}<ArrowRight className="size-4" /></Button>
            <p className="text-center text-[11px] text-white/36">{t("No account yet?")}{" "}<button type="button" onClick={() => { setMode("register"); setError(""); setNotice(""); }} className="font-semibold text-primary/80 hover:text-primary">{t("Sign up")}</button></p>
          </form>
          ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-xs text-white/52">{t("First name")}<input required name="firstName" autoComplete="given-name" maxLength={80} className={inputClass} /></label>
              <label className="block text-xs text-white/52">{t("Last name")}<input required name="lastName" autoComplete="family-name" maxLength={80} className={inputClass} /></label>
            </div>
            <label className="block text-xs text-white/52">{t("Work email")}<input required name="email" type="email" autoComplete="email" placeholder="name@company.com" className={inputClass} /></label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-xs text-white/52">{t("Password")}<input required name="password" type="password" autoComplete="new-password" minLength={12} maxLength={128} className={inputClass} /></label>
              <label className="block text-xs text-white/52">{t("Password (again)")}<input required name="passwordConfirm" type="password" autoComplete="new-password" minLength={12} maxLength={128} className={inputClass} /></label>
            </div>
            <p className="text-[10px] leading-4 text-white/30">{t("Password must be at least 12 characters and include letters and numbers.")}</p>
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-xs text-white/52">{t("Company name")}<input required name="companyName" autoComplete="organization" maxLength={160} className={inputClass} /></label>
              <label className="block text-xs text-white/52">{t("Job title")}<input required name="jobTitle" autoComplete="organization-title" maxLength={120} className={inputClass} /></label>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-xs text-white/52">{t("Country")}<input required name="country" autoComplete="country-name" maxLength={80} className={inputClass} /></label>
              <label className="block text-xs text-white/52">{t("City")}<input required name="city" autoComplete="address-level2" maxLength={80} className={inputClass} /></label>
            </div>
            <label className="block text-xs text-white/52">{t("Phone (optional)")}<input name="phone" type="tel" autoComplete="tel" maxLength={32} className={inputClass} /></label>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <label className="flex items-start gap-2 text-[11px] leading-4 text-white/45"><input required name="acceptTerms" type="checkbox" className="mt-0.5 size-3.5 accent-[#e2b54c]" />{t("I accept the privacy notice and terms of use.")}</label>
            {error ? <p role="alert" className="rounded-md border border-red-400/15 bg-red-400/[0.06] px-3 py-2.5 text-xs text-red-300">{error}</p> : null}
            <Button type="submit" size="lg" className="w-full" disabled={loading}>{t(loading ? "Creating account..." : "Sign up")}<ArrowRight className="size-4" /></Button>
            <p className="text-center text-[11px] text-white/36">{t("Already have an account?")}{" "}<button type="button" onClick={() => { setMode("login"); setError(""); }} className="font-semibold text-primary/80 hover:text-primary">{t("Sign in")}</button></p>
          </form>
          )}
          <div className="my-6 flex items-center gap-3"><span className="h-px flex-1 bg-white/[0.07]" /><span className="text-[10px] uppercase text-white/20">{t("Preview")}</span><span className="h-px flex-1 bg-white/[0.07]" /></div>
          <Button variant="secondary" className="w-full" asChild>
            <Link href="/demo">{t("Explore demo workspace")}</Link>
          </Button>
          <div className="mt-8 flex items-start gap-2 border-t border-white/[0.065] pt-5 text-[10px] leading-4 text-white/25"><ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-emerald-300/55" /><span>{t("Protected by role-based access, encrypted transport and auditable workspace controls.")}</span></div>
          <p className="mt-8 text-center text-[10px] text-white/18">© 2026 YER6 AI · <Link href="/hakkinda" className="hover:text-white/40">{t("Founder")}</Link> · <Link href="/" className="hover:text-white/40">{t("Privacy")}</Link> · <Link href="/" className="hover:text-white/40">{t("Security")}</Link></p>
        </div>
      </section>
    </main>
  );
}
