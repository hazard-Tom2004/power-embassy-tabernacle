import { Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface Trustee {
  name: string;
  position?: string;
  image?: string;
  bio?: string;
}

const trustees: Trustee[] = [
  {
    name: "APOSTLE DR JACKSON CHRIS IYANG",
    position: "President and Founder",
    image:
      "https://res.cloudinary.com/duhpmbxst/image/upload/v1770838871/WhatsApp_Image_2026-02-10_at_10.02.10_PM_orvbev.jpg",
    bio: "An end-time Army, a Deliverance/ Healing Minister, a holiness Preacher, Teacher and a Philanthropist.",
  },
  {
    name: "PASTOR OMINU SAMUEL OHIOLE",
    position: "Secretary",
    image:"https://res.cloudinary.com/duhpmbxst/image/upload/v1770838871/WhatsApp_Image_2026-02-10_at_10.02.10_PM_1_ykxzfv.jpg",
    bio: "A trustworthy church secretary."
  },
  {
    name: "PASTOR JACKSON JANE PRECIOUS",
    position: "Vice-president",
    image:"https://res.cloudinary.com/duhpmbxst/image/upload/v1770838870/WhatsApp_Image_2026-02-10_at_10.02.11_PM_acpec9.jpg",
    bio: "Dedicated to facilitating spiritual growth and ensuring the church's mission is executed effectively.",
  }
];


export default function Trustees() {
  const responsibilities = [
    'Upholding the vision and mission of the ministry',
    'Ensuring transparency and accountability',
    'Providing counsel and spiritual oversight',
    'Supporting the growth and sustainability of the church',
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            <Users className="h-16 w-16 mx-auto mb-6" />
          </motion.div>
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            Board of Trustees
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          >
            Spiritual and administrative oversight committed to maintaining doctrinal purity and accountability
          </motion.p>
        </div>
      </motion.section>

      {/* Purpose Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            >
              Our Purpose
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            >
              The Board of Trustees of Power Embassy Tabernacle serves as the spiritual and administrative oversight body of the ministry. They are entrusted with maintaining doctrinal purity, ensuring accountability, and safeguarding the vision God has committed to this ministry.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-10 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            >
              Our Trustees are Committed To
            </motion.h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {responsibilities.map((responsibility, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.08 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">{responsibility}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Board Members Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Meet Our Board Members
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees.map((trustee, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.15 }}
              >
                {/* Image Container */}
                {trustee.image && (
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-200 to-blue-100">
                    <img
                      src={trustee.image}
                      alt={trustee.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {trustee.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-4 block">
                    {trustee.position}
                  </p>
                  {trustee.bio && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {trustee.bio}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Closing Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Our trustees are men and women of integrity, wisdom, and spiritual maturity who are committed to serving God's people with excellence.
          </motion.p>
          <div className="border-t border-gray-300 pt-6">
            <motion.p
              className="text-gray-800 italic text-lg mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            >
              "Moreover it is required in stewards, that a man be found faithful."
            </motion.p>
            <motion.p
              className="text-sm text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
            >
              — 1 Corinthians 4:2
            </motion.p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
