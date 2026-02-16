import { Target, Eye, CheckCircle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const beliefs = [
  'Jesus Christ is the only Savior and Lord',
  'The Bible is the infallible Word of God',
  'Holiness is not optional but a lifestyle',
  "Deliverance and spiritual freedom are part of Christ's finished work",
  'Every believer is called to live empowered by the Holy Spirit',
];

const missionPoints = [
  "The preaching of God's Word",
  'Deliverance and spiritual warfare',
  'Healing and restoration',
  'Prophetic ministry',
  'Empowerment for godly living',
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6" />
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          >
            Power Embassy Tabernacle (Power Outreach Ministries) is a Bible-based Christian ministry with a divine mandate to restore humanity to God through holiness, righteousness, and truth.
          </motion.p>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <motion.div
              className="bg-blue-50 p-10 rounded-2xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <Eye className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Restoring humanity back to God through the Word of righteousness, holiness, and truth.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 italic">Isaiah 33:15</p>
                <p className="text-sm text-gray-600 italic">Hebrews 12:14</p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="bg-blue-50 p-10 rounded-2xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <Target className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To destroy satanic altars and liberate men from the kingdom of darkness through:
              </p>
              <ul className="space-y-3">
                {missionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5, ease: 'easeOut' }}
                  >
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 space-y-2">
                <p className="text-sm text-gray-600 italic">Exodus 20:4–5, Jeremiah 43:13</p>
                <p className="text-sm text-gray-600 italic">Isaiah 42:1–7, Isaiah 45:1–3</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Beliefs Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            What We Believe
          </motion.h2>
          <div className="space-y-4">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm flex items-start"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
              >
                <CheckCircle className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-800">{belief}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="text-xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            A prophetic and apostolic ministry committed to raising men and women who live holy, walk in truth, and operate in the power of God. Through sound doctrine, deliverance, healing, and empowerment, we confront darkness and establish God's kingdom on earth.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}