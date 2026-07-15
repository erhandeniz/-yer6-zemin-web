/** SHA-256 helpers built on Web Crypto (available in Node 20+ and Workers). */

export async function sha256Hex(data: Uint8Array): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", data as unknown as ArrayBuffer);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function sha256Short(data: Uint8Array, length = 12): Promise<string> {
  return (await sha256Hex(data)).slice(0, length);
}
