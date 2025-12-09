
import React from 'react';
import { notFound } from 'next/navigation';
import { LexicalRichText } from '@payloadcms/richtext-lexical';

const BeritaDetailPage = async ({ params }: { params: { slug: string } }) => {
  let beritaItem = null;
  try {
    const response = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/berita?where[slug][equals]=${params.slug}`, { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error(`Failed to fetch berita item: ${response.statusText}`);
    }
    const data = await response.json();
    beritaItem = data.docs[0];
  } catch (error) {
    console.error(error);
    return notFound();
  }

  if (!beritaItem) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{beritaItem.title}</h1>
      <p className="text-gray-600 mb-8">
        By {beritaItem.author} on {new Date(beritaItem.publishedDate).toLocaleDateString()}
      </p>
      {beritaItem.image && (
        <img
          src={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}${beritaItem.image.url}`}
          alt={beritaItem.image.alt}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
      )}
      <div className="prose lg:prose-xl">
        <LexicalRichText content={beritaItem.content} />
      </div>
    </div>
  );
};

export default BeritaDetailPage;

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/berita?limit=100`, { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error(`Failed to fetch slugs: ${response.statusText}`);
    }
    const data = await response.json();
    return data.docs.map((doc) => ({
      slug: doc.slug,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
