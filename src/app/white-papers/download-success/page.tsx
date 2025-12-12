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
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-xl text-red-600">Missing white paper title.</p>
      </div>
    );
  }

  // Fetch the PDF URL using the exact title
  const result = await client.fetch<{ pdfUrl: string } | null>(
    `*[_type == "whitePaper" && title == $title][0]{
      "pdfUrl": pdf.asset->url
    }`,
    { title }
  );

  if (result?.pdfUrl) {
    redirect(result.pdfUrl);  // ← this triggers the download
  }

  // Fallback if something went wrong
  return (
    <div className="container mx-auto py-20 text-center">
      <p className="text-xl">Could not start download. Please try again.</p>
    </div>
  );
}