// app/api/whitepaper-pdf/route.ts
import { NextResponse } from "next/server";
import { client } from "@/sanity/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  if (!title) {
    return NextResponse.json({ error: "Missing title" }, { status: 400 });
  }

  const result = await client.fetch<{ pdfUrl: string } | null>(
    `*[_type == "whitePaper" && title == $title][0]{ "pdfUrl": pdf.asset->url }`,
    { title }
  );

  return NextResponse.json({ pdfUrl: result?.pdfUrl || null });
}