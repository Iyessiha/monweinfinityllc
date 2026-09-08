/**
 * Waitlist service — stores entries in-memory for dev.
 * Replace the in-memory store with Supabase/PostgreSQL in production:
 *
 *   import { createClient } from "@supabase/supabase-js";
 *   const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
 *
 *   export async function addToWaitlist(data) {
 *     const { error } = await supabase.from("waitlist").insert(data);
 *     if (error) throw error;
 *   }
 */

interface WaitlistEntry {
  email: string;
  product: string;
  lang: string;
  joinedAt: string;
}

const store: WaitlistEntry[] = [];

export async function addToWaitlist(data: {
  email: string;
  product: string;
  lang: string;
}): Promise<void> {
  const exists = store.some((e) => e.email === data.email && e.product === data.product);
  if (exists) return; // idempotent
  store.push({ ...data, joinedAt: new Date().toISOString() });
  console.info(`[Waitlist] +1 for ${data.product} (${data.email}) — total: ${store.length}`);
}

export async function countWaitlist(): Promise<number> {
  return store.length;
}
