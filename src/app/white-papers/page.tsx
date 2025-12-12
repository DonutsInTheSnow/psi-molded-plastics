// app/white-papers/page.tsx
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import SectionTitle from "@/components/SectionTitle";
import { client } from "@/sanity/client";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";

interface WhitePaper extends SanityDocument {
  title: string;
  slug: string;  // since we projected "slug": slug.current
  excerpt?: string;
}

const WHITEPAPERS_QUERY = `*[
  _type == "whitePaper"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  "slug": slug.current,
  excerpt
}`;

const options = { next: { revalidate: 30 } };

export default async function WhitePapersPage() {
  const whitepapers = await client.fetch<WhitePaper[]>(WHITEPAPERS_QUERY, {}, options);

  return (
    <section id="white-papers" className="mt-24 md:mt-32 py-24 bg-white text-gray-800">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle>White Papers & Resources</SectionTitle>
          <p className="text-xl text-gray-600 text-center mb-16">
            Download in-depth guides and industry insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitepapers.map((wp) => (
            <article
                key={wp._id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition flex flex-col h-full relative overflow-hidden"
                >
                {/* Full-card invisible link */}
                <Link
                    href={`/white-papers/${wp.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Read more about ${wp.title}`}
                />

                <div className="p-8 flex-1 relative z-0">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                    {wp.title}
                    </h2>
                    {wp.excerpt && (
                    <p className="text-gray-600 line-clamp-4 mb-6">{wp.excerpt}</p>
                    )}
                    <ArrowDownOnSquareStackIcon className="size-9 text-blue-600 mx-auto" />
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}