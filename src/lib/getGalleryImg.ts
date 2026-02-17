// Client-safe gallery loader: returns a curated list of public image URLs.
// Avoids using the Node Cloudinary SDK in the browser.

export type GalleryImage = {
  id: string;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

const FALLBACK_IMAGES: GalleryImage[] = [
  {
    id: 'g-1',
    url: 'https://res.cloudinary.com/duhpmbxst/image/upload/v1770838871/WhatsApp_Image_2026-02-10_at_10.02.10_PM_orvbev.jpg',
    alt: 'Service session',
  },
  {
    id: 'g-2',
    url: 'https://res.cloudinary.com/duhpmbxst/image/upload/v1770838871/WhatsApp_Image_2026-02-10_at_10.02.10_PM_1_ykxzfv.jpg',
    alt: 'Community outreach',
  },
  {
    id: 'g-3',
    url: 'https://res.cloudinary.com/duhpmbxst/image/upload/v1770838870/WhatsApp_Image_2026-02-10_at_10.02.11_PM_acpec9.jpg',
    alt: 'Worship moment',
  },
];

export async function getGalleryImages(): Promise<GalleryImage[]> {
  // Use Next API route; client-visible folder via NEXT_PUBLIC_GALLERY_FOLDER
  const folder = (process.env.NEXT_PUBLIC_GALLERY_FOLDER as string) || (process.env.GALLERY_FOLDER as string) || '';

  try {
    const url = new URL('/api/gallery', location.origin);
    if (folder) url.searchParams.append('folder', folder);

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('Gallery API returned ' + res.status);
    const data = await res.json();

    if (!Array.isArray(data)) throw new Error('Invalid gallery response');
    const arr = data as Array<Record<string, unknown>>;
    const images: GalleryImage[] = arr.map((d) => ({
      id: String(d.id),
      url: String(d.url),
      alt: typeof d.alt === 'string' ? d.alt : undefined,
      width: typeof d.width === 'number' ? d.width : undefined,
      height: typeof d.height === 'number' ? d.height : undefined,
    }));
    
    return images.length > 0 ? images : FALLBACK_IMAGES;
  } catch (err) {
    console.warn('Failed to fetch remote gallery, falling back to curated list:', err);
    return FALLBACK_IMAGES;
  }
}