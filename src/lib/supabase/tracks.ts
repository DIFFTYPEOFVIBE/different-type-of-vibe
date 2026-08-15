import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getBeatsBySlug(slug: string, type: "genre" | "type-beat") {
  // Normalize slug (e.g., "boom-bap" or "drake")
  const formattedTag = slug.toLowerCase();

  const query = supabase
    .from("tracks")
    .select("*")
    .eq("is_active", true);

  if (type === "genre") {
    query.eq("genre", formattedTag);
  } else {
    // Looks for slug match inside a tags array column (e.g., tags: ["drake", "hip-hop"])
    query.contains("tags", [formattedTag]);
  }

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) {
    console.error(`Error fetching ${type} beats for ${slug}:`, error);
    return [];
  }

  return data || [];
}