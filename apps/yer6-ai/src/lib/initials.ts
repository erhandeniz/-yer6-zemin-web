/**
 * User initials for the avatar (Package B display rules):
 *   "Erhan Deniz"  → "ED"
 *   "Ahmet Yılmaz" → "AY"
 *   "Mehmet"       → "ME"
 *   empty/invalid  → null (caller renders the generic user icon)
 * Turkish-aware uppercasing (i → İ) via toLocaleUpperCase("tr").
 */
export function userInitials(name: string | null | undefined): string | null {
  const trimmed = (name ?? "").trim().replace(/\s+/g, " ");
  if (!trimmed) return null;
  const parts = trimmed.split(" ").filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toLocaleUpperCase("tr");
  }
  return parts[0].slice(0, 2).toLocaleUpperCase("tr");
}
