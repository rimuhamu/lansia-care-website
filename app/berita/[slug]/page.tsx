import { notFound } from "next/navigation";
import { RichText } from "@/components/RichText";
import { ContactSection } from "@/components/contact-section";
import React from "react";
import type { SerializedEditorState } from "lexical";

type Berita = {
  id: string;
  title: string;
  slug: string;
  content: SerializedEditorState;
  publishedDate: string;
  images: {
    url: string;
    alt: string;
  }[];
};

type Props = {
  params: Promise<{ slug: string }>;
};

const BeritaDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  let beritaItem: Berita | null = null;
  const serverURL =
    process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000";

  try {
    const response = await fetch(
      `${serverURL}/api/berita?where[slug][equals]=${slug}&depth=1`,
      { next: { revalidate: 60 } },
    );
    if (!response.ok) {
      console.error(`Failed to fetch berita item: ${response.statusText}`);
      return notFound();
    }
    const data = await response.json();
    if (data.docs.length === 0) {
      return notFound();
    }
    beritaItem = data.docs[0];
  } catch (error) {
    console.error(error);
    return notFound();
  }

  if (!beritaItem) {
    return notFound();
  }

  const imageUrl =
    beritaItem.images && beritaItem.images.length > 0
      ? `${serverURL}${beritaItem.images[0].url}`
      : "/placeholder.jpg";
  const imageAlt =
    beritaItem.images && beritaItem.images.length > 0
      ? beritaItem.images[0].alt
      : "Placeholder Image";

  return (
    <div className="bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto max-w-4xl px-4 py-16 lg:py-20">
        <article>
          <header className="mb-12 text-center">
            <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Berita
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {beritaItem.title}
            </h1>
            <p className="text-muted-foreground">
              Dipublikasikan pada{" "}
              {new Date(beritaItem.publishedDate).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </header>

          <div className="my-8">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none mx-auto text-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
            <RichText content={beritaItem.content} />
          </div>
        </article>
      </div>
      <ContactSection />
    </div>
  );
};

export default async function BeritaPage({ params }: Props) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BeritaDetailPage params={params} />
    </React.Suspense>
  );
}

export async function generateStaticParams() {
  try {
    const serverURL =
      process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000";
    const response = await fetch(`${serverURL}/api/berita?limit=100`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch slugs: ${response.statusText}`);
    }
    const data = await response.json();
    return data.docs.map((doc: { slug: string }) => ({
      slug: doc.slug,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
