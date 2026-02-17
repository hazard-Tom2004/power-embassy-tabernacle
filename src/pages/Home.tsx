import { BookOpen, Heart, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const navigate = (path: string) => router.push(path).finally(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  return (
    <div className="min-h-screen">
      <motion.section
        className="relative bg-gradient-to-br from-black via-white to-blue-50 pt-32 pb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
            >
              Welcome to Power Embassy Tabernacle
            </motion.h1>
            <p className="text-xl text-gray-600 mb-4">
              Also known as Power Outreach Ministries
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Power Embassy Tabernacle is a Christ-centered ministry commissioned to restore humanity back to God through the Word of righteousness, holiness, and truth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We are a prophetic and apostolic ministry committed to raising men and women who live holy, walk in truth, and operate in the power of God. Through sound doctrine, deliverance, healing, and empowerment, we confront darkness and establish God's kingdom on earth.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/about')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More About Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              className="bg-blue-50 p-8 rounded-xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <p className="text-gray-800 italic leading-relaxed">
                "He that walketh righteously, and speaketh uprightly…"
              </p>
              <p className="text-sm text-gray-600 mt-2">— Isaiah 33:15</p>
            </motion.div>
            <motion.div
              className="bg-blue-50 p-8 rounded-xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <Heart className="h-12 w-12 text-blue-600 mb-4" />
              <p className="text-gray-800 italic leading-relaxed">
                "Follow peace with all men, and holiness, without which no man shall see the Lord."
              </p>
              <p className="text-sm text-gray-600 mt-2">— Hebrews 12:14</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Flame className="h-16 w-16 mx-auto mb-6" />
          </motion.div>
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Join us as God transforms lives, families, and destinies.
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Connected
          </motion.button>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Service Times
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm text-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sunday Service</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">8:00 AM</p>
              <p className="text-gray-600">Join us for worship and the Word</p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm text-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Midweek Service</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">5:00 PM</p>
              <p className="text-gray-600">Wednesday - Prayer & Bible Study</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
