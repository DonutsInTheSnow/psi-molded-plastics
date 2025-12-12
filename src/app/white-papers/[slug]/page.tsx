// // app/white-papers/[slug]/page.tsx
// import { notFound } from "next/navigation";
// import { type SanityDocument } from "next-sanity";
// import { client } from "@/sanity/client";
// import SectionTitle from "@/components/SectionTitle";
// import EmailGateForm from "@/components/EmailGateForm";

// const WHITEPAPER_QUERY = `*[
//   _type == "whitePaper" && slug.current == $slug
// ][0]{
//   _id,
//   title,
//   excerpt,
//   "pdfUrl": pdf.asset->url
// }`;

// const options = { next: { revalidate: 30 } };

// export default async function WhitePaperPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const whitepaper = await client.fetch<SanityDocument & { pdfUrl?: string }>(
//     WHITEPAPER_QUERY,
//     { slug },
//     options
//   );

//   if (!whitepaper) notFound();

//   return (
//     <section className="mt-24 md:mt-32 py-24 bg-white">
//       <div className="container max-w-3xl mx-auto px-6 text-center">
//         <SectionTitle>{whitepaper.title}</SectionTitle>

//         {whitepaper.excerpt && (
//           <p className="mt-8 text-xl text-gray-700 leading-relaxed">
//             {whitepaper.excerpt}
//           </p>
//         )}

//         <div className="mt-16">
//           {/* Replace this with your actual EmailGateForm component */}
//           {/* It should accept whitepaper.title and whitepaper.pdfUrl as props */}
//           <EmailGateForm
//             title={whitepaper.title}
//             pdfUrl={whitepaper.pdfUrl || ""}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }




// app/white-papers/[slug]/page.tsx
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import SectionTitle from "@/components/SectionTitle";
import HubSpotForm from "@/components/HubSpotForm";  // ← new import

const WHITEPAPER_QUERY = `*[
  _type == "whitePaper" && slug.current == $slug
][0]{
  _id,
  title,
  excerpt,
  "pdfUrl": pdf.asset->url
}`;

const options = { next: { revalidate: 30 } };

export default async function WhitePaperPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const whitepaper = await client.fetch(WHITEPAPER_QUERY, { slug }, options);

  if (!whitepaper) notFound();

  return (
    <section className="mt-24 md:mt-32 py-24 bg-white">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <SectionTitle>{whitepaper.title}</SectionTitle>

        {whitepaper.excerpt && (
          <p className="mt-8 text-xl text-gray-700 leading-relaxed">{whitepaper.excerpt}</p>
        )}

        <div className="mt-16">
          <HubSpotForm whitePaperTitle={whitepaper.title} />
        </div>

        {/* Optional: auto-download after HubSpot success */}
        <p className="mt-8 text-sm text-gray-500">
          The PDF will download automatically after you submit the form.
        </p>
      </div>
    </section>
  );
}