"use client";

import { Card, CardContent } from "@/components/ui/card";
import { beritaContent } from "@/lib/content/berita";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type Berita = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  image: {
    url: string;
    alt: string;
  };
};

type BeritaSectionProps = {
  berita: Berita[];
  serverURL: string;
};

export function BeritaSection({ berita, serverURL }: BeritaSectionProps) {
  return (
    <section
      id="berita"
      className="py-16 lg:py-20 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/30"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              {beritaContent.hero.badge}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {beritaContent.hero.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {beritaContent.hero.description}
          </p>
        </header>

        {/* Berita Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {berita.map((item) => (
            <Card
              key={item.id}
              className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1 overflow-hidden"
            >
              <Link href={`/berita/${item.slug}`}>
                <div>
                  {item.image && (
                    <img
                      src={`${serverURL}${item.image.url}`}
                      alt={item.image.alt}
                      className="w-full h-48 object-cover"
                    />
                  )}
                </div>
              </Link>
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    <Link href={`/berita/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/berita/${item.slug}`}
                    className="text-primary font-semibold hover:underline"
                  >
                    Baca Selengkapnya &rarr;
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
