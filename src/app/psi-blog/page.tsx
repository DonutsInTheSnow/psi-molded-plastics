import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import SectionTitle from "@/components/SectionTitle";
import Image from 'next/image'

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image{
    alt,
    asset->{
      _id,
      url
    }
  }
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <section id="psi-blog" className="mt-24 md:mt-32 py-24 bg-white text-gray-800">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle>Sanity PSI Blog</SectionTitle>
          <p className="text-xl text-gray-600 text-center mb-16">
            Latest news, capabilities, and industry insights
          </p>
        </div>
        
        <div className="grid md:grid b-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (

            <Link
              key={post._id}
              href={`/psi-blog/${post.slug.current}`}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
            {post.image?.asset?.url && (
              <Image
                src={post.image.asset.url}
                alt={post.image?.alt || post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            )}

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition">
                  {post.title}
                </h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </div>
            </Link>

            ))}
        </div>
      </div>
    </section>
  );
}