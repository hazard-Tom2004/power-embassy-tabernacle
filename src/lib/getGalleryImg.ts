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
  const apiBase = (import.meta.env.VITE_API_URL as string) || `${location.protocol}//${location.hostname}:3002`;
  const folder = (import.meta.env.VITE_GALLERY_FOLDER as string) || '';
  
  try {
    const url = new URL(`${apiBase}/api/gallery`);
    if (folder) url.searchParams.append('folder', folder);
    
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('Gallery API returned ' + res.status);
    const data = await res.json();
    
    if (!Array.isArray(data)) throw new Error('Invalid gallery response');
    const images = data.map((d: any) => ({
      id: d.id,
      url: d.url,
      alt: d.alt,
      width: d.width,
      height: d.height,
    }));
    
    return images.length > 0 ? images : FALLBACK_IMAGES;
  } catch (err) {
    console.warn('Failed to fetch remote gallery, falling back to curated list:', err);
    return FALLBACK_IMAGES;
  }
}