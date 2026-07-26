"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useAITranslation } from "@/components/i18n-provider";
import { userInitials } from "@/lib/initials";

type RegisteredUser = {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
  title: string | null;
  location: string;
  organizationName: string | null;
  verified: boolean;
  createdAt: string;
};

/**
 * ADMIN — real registered-user roster (replaces the sample member table).
 * Uses the existing panel/table styling so the admin layout is unchanged.
 */
export function RegisteredUsers() {
  const { t, locale } = useAITranslation();
  const [users, setUsers] = useState<RegisteredUser[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let active = true;
    fetch("/api/admin/users")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data) => {
        if (active) setUsers(data.items ?? []);
      })
      .catch(() => {
        if (active) setFailed(true);
      });
    return () => {
      active = false;
    };
  }, []);

  const filtered = (users ?? []).filter((user) => {
    if (!query.trim()) return true;
    const haystack = `${user.name ?? ""} ${user.email ?? ""} ${user.organizationName ?? ""}`.toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  });

  const dateFormat = (value: string) => {
    try {
      return new Date(value).toLocaleDateString(locale === "ar" ? "ar" : locale === "en" ? "en-GB" : "tr-TR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    } catch {
      return "—";
    }
  };

  return (
    <section className="panel mt-6 overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-white/[0.065] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-white/85">{t("Registered users")}</h2>
          <p className="mt-1 text-[11px] text-white/28">
            {users ? `${users.length}` : "—"} · {t("Roles and workspace access")}
          </p>
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-9 w-full rounded-md border border-white/[0.075] bg-white/[0.025] px-3 text-xs outline-none placeholder:text-white/22 sm:w-56"
          placeholder={t("Search members")}
          aria-label={t("Search members")}
        />
      </div>

      {failed ? (
        <p className="px-5 py-8 text-center text-xs text-white/35">{t("Could not load users.")}</p>
      ) : users === null ? (
        <p className="px-5 py-8 text-center text-xs text-white/35">{t("Loading...")}</p>
      ) : filtered.length === 0 ? (
        <p className="px-5 py-8 text-center text-xs text-white/35">{t("No registered users yet.")}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left">
            <thead className="border-b border-white/[0.055] text-[10px] uppercase text-white/22">
              <tr>
                <th className="px-5 py-3 font-medium">{t("Member")}</th>
                <th className="px-4 py-3 font-medium">{t("Company")}</th>
                <th className="px-4 py-3 font-medium">{t("Role")}</th>
                <th className="px-4 py-3 font-medium">{t("Status")}</th>
                <th className="px-4 py-3 font-medium">{t("Registered")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.055]">
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-white/[0.02]">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="grid size-8 place-items-center rounded-md bg-white/[0.06] text-[10px] font-semibold text-white/60">
                        {userInitials(user.name) ?? "—"}
                      </span>
                      <div>
                        <p className="text-xs font-medium text-white/68">{user.name ?? "—"}</p>
                        <p className="mt-0.5 text-[10px] text-white/24">{user.email ?? "—"}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 text-[11px] text-white/42">
                    {user.organizationName ?? "—"}
                    {user.location ? <span className="block text-[10px] text-white/22">{user.location}</span> : null}
                  </td>
                  <td className="px-4 text-[11px] text-white/42">{user.role}</td>
                  <td className="px-4">
                    <Badge tone={user.verified ? "green" : "gold"}>
                      {t(user.verified ? "Verified" : "Pending verification")}
                    </Badge>
                  </td>
                  <td className="px-4 text-[11px] text-white/28">{dateFormat(user.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
