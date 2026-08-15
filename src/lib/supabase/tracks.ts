import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getBeatsBySlug(
  slug: string,
  type: "genre" | "type-beat"
) {
  // Replace hyphens with spaces for multi-word genre matching (e.g. "boom-bap" -> "boom bap")
  const normalizedSlug = slug.toLowerCase().trim();
  const searchPhrase = normalizedSlug.replace(/-/g, " ");

  let query = supabase
    .from("tracks")
    .select("*")
    .eq("is_active", true);

  if (type === "genre") {
    // Case-insensitive match on genre column (handles both "Boom Bap" and "boom-bap")
    query = query.ilike("genre", `%${searchPhrase}%`);
  } else {
    // Checks array column for exact tag match OR title match
    query = query.contains("tags", [normalizedSlug]);
  }

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) {
    console.error(`Error fetching ${type} beats for ${slug}:`, error);
    return [];
  }

  return data || [];
}