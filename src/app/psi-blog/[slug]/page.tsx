// import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import type { SanityDocument, PortableTextBlock } from "next-sanity";
import ProseableText from "@/components/ProseableText";

// ---- Correct typed post interface ----
interface Post extends SanityDocument {
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: PortableTextBlock[];
  image?: {
    alt?: string;
    asset?: {
      _ref: string;
      url?: string;
    };
  };
}

// ---- GROQ: ensure we project the URL ----
const POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,

    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->{
          _id,
          url
        }
      }
    },

    image {
      alt,
      asset->{
        _id,
        url
      }
    }
  }
`;


const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;   // ← REQUIRED for Next.js 16
}) {
  // unwrap the params Promise
  const { slug } = await params;

  // perform typed fetch with real slug
  const post = await client.fetch<Post>(POST_QUERY, { slug }, options);

  if (!post) {
    return (
      <main className="container mx-auto max-w-3xl p-8">
        <h1 className="text-3xl font-bold">Post not found</h1>
      </main>
    );
  }

  const imageUrl = post.image?.asset?.url ?? null;

  return (
    <main className="py-44 bg-gray-800">
      <div className="max-w-3xl mx-auto min-h-screen p-8 flex flex-col gap-6">   
        <Link href="/psi-blog" className="hover:underline">
          ← Back to posts
        </Link>

        {imageUrl && (
          <Image
            src={imageUrl}
            alt={post.image?.alt || post.title}
            width={1200}
            height={675}
            className="w-full rounded-xl object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        )}

        <h1 className="text-5xl font-bold text-center">{post.title}</h1>

        <time className="text-gray-400 text-center">
          {new Date(post.publishedAt).toLocaleDateString()}
        </time>

        <article className="mx-auto w-full">
          <ProseableText value={post.body} />
        </article>

      </div>
    </main>
  );
}

