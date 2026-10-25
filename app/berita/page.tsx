import { BeritaSection } from "@/components/berita-section";
import { ContactSection } from "@/components/contact-section";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getBerita() {
  const serverURL =
    process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000";
  const url = `${serverURL}/api/berita`;

  try {
    const response = await fetch(url, { next: { revalidate: 60 } });

    if (!response.ok) {
      console.error(
        `Failed to fetch berita. Status: ${response.status} ${response.statusText}`,
      );
      return [];
    }

    const data = await response.json();

    if (data && Array.isArray(data.docs)) {
      return data.docs;
    } else {
      console.error("Fetched data does not have 'docs' array:", data);
      return [];
    }
  } catch (error) {
    console.error("An error occurred while fetching berita:", error);
    return [];
  }
}

export default async function BeritaPage() {
  const berita = await getBerita();
  const serverURL =
    process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000";

  return (
    <div className="min-h-screen">
      {berita && berita.length > 0 ? (
        <BeritaSection berita={berita} serverURL={serverURL} />
      ) : (
        <div className="container mx-auto px-4 py-20 text-center min-h-screen flex flex-col justify-center items-center">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full border border-primary/20 mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Berita
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Berita dan Kegiatan Terbaru
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ikuti terus informasi terbaru mengenai kegiatan, acara, dan berita
              seputar panti jompo kami.
            </p>
          </header>
          <h2 className="text-2xl font-bold mb-4">Segera Hadir</h2>
          <p className="text-muted-foreground">
            Berita dan informasi terbaru akan segera kami tampilkan di sini.
          </p>
        </div>
      )}
      <ContactSection />
    </div>
  );
}
