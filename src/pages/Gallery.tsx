import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGalleryImages } from '../lib/getGalleryImg';

type GalleryImage = {
  id: string;
  url: string;
  alt?: string;
};

export default function ChurchStandard() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await getGalleryImages();
        if (mounted) setImages(res || []);
      } catch (e) {
        console.error('Failed to load gallery images', e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <main className="min-h-screen bg-white py-10">
      <motion.section
        className="max-w-4xl mx-auto px-4 text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Gallery
        </motion.h1>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        >
          Moments of faith, service, and community.
        </motion.p>
      </motion.section>

      <motion.section
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {loading ? (
          <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Loading gallery...
          </motion.div>
        ) : images.length === 0 ? (
          <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            No images found in gallery.
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {images.map((img, idx) => (
              <motion.button
                key={img.id}
                onClick={() => setSelected(img)}
                className="block overflow-hidden rounded-lg bg-gray-100"
                aria-label={img.alt || 'Gallery image'}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.05 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <img src={img.url} alt={img.alt || 'Gallery image'} className="w-full h-56 object-cover" />
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-4xl w-full overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <img src={selected.url} alt={selected.alt || 'Selected image'} className="absolute inset-0 w-full h-full object-contain" />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-gray-700">{selected.alt}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setSelected(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
