// app/api/capture-email/route.ts
import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const { email, title } = await request.json();

    if (!email || !title) {
      return NextResponse.json(
        { error: "Email and title are required" },
        { status: 400 }
      );
    }

    const supabaseAdmin = createSupabaseAdmin();

    const { error } = await supabaseAdmin
      .from("resource_downloads")
      .insert({
        email,
        resource_id: null, // using title as identifier since no Supabase resource ID
        // name & company optional — not collected in new form
      });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
    }

    console.log("Lead captured:", { email, title });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Capture email error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}