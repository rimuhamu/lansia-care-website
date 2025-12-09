
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const BeritaPage = async () => {
  let berita = [];
  try {
    const response = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/berita`, { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error(`Failed to fetch berita: ${response.statusText}`);
    }
    const data = await response.json();
    berita = data.docs;
  } catch (error) {
    console.error(error);
    // Return a friendly error message or a fallback component
    return <div>Gagal memuat berita. Silakan coba lagi nanti.</div>;
  }

  if (!berita || berita.length === 0) {
    return <div>Tidak ada berita tersedia.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Berita Terkini</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {berita.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden">
            {item.image && (
              <Link href={`/berita/${item.slug}`}>
                
                  <img
                    src={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}${item.image.url}`}
                    alt={item.image.alt}
                    className="w-full h-48 object-cover"
                  />
                
              </Link>
            )}
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/berita/${item.slug}`}>
                  {item.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{item.summary}</p>
              <Link href={`/berita/${item.slug}`} className="text-blue-500 hover:underline">
                Baca Selengkapnya
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeritaPage;
