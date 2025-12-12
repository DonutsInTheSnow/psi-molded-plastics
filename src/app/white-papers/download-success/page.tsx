// app/white-papers/download-success/page.tsx
import { redirect } from "next/navigation";
import { client } from "@/sanity/client";

export default async function DownloadSuccess({
  searchParams,
}: {
  searchParams: Promise<{ title?: string }>;
}) {
  const { title } = await searchParams;

  if (!title) {
    return <p>Missing white paper title.</p>;
  }

  const { pdfUrl } = await client.fetch<{ pdfUrl: string }>(
    `*[_type == "whitePaper" && title == $title][0]{ "pdfUrl": pdf.asset->url }`,
    { title }
  );

  if (pdfUrl) {
    redirect(pdfUrl);
  }

  return <p>Download starting…</p>;
}