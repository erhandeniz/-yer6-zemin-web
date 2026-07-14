import type { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";
import { AdminView } from "@/components/admin/admin-view";
import { isAccessResponse, requireAdmin } from "@/server/auth/workspace-access";

export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } };

export default async function AdminPage() {
  const access = await requireAdmin();
  if (isAccessResponse(access)) redirect(access.status === 401 ? "/login" : "/");
  return <AdminView />;
}
