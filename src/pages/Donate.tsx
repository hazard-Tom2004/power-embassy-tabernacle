import { Heart, CreditCard, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Donate() {
  return (
    <div className="min-h-screen pt-20">
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
            <Heart className="h-16 w-16 mx-auto mb-6" />
          </motion.div>
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            Support the Work of God
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          >
            Your giving helps us fulfill God's mandate of restoring lives, destroying satanic altars, and spreading the gospel of truth and holiness.
          </motion.p>
        </div>
      </motion.section>

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
            <div className="bg-blue-50 p-8 rounded-2xl inline-block">
              <motion.p
                className="text-2xl text-gray-800 italic mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
              >
                "Give, and it shall be given unto you…"
              </motion.p>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
              >
                — Luke 6:38
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-lg border border-blue-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-6">
              <CreditCard className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Bank Transfer Details
            </h2>

            <div className="space-y-6 max-w-md mx-auto">
              <motion.div
                className="bg-white p-6 rounded-lg border border-gray-200"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <p className="text-sm text-gray-600 mb-1">Account Name</p>
                <p className="text-lg font-semibold text-gray-900">Power Embassy Tabernacle</p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg border border-gray-200"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              >
                <p className="text-sm text-gray-600 mb-1">Bank Name</p>
                <p className="text-lg font-semibold text-gray-900">Access Bank Plc</p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg border border-gray-200"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              >
                <p className="text-sm text-gray-600 mb-1">Account Number</p>
                <p className="text-2xl font-bold text-blue-600">1927680788</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Thank You for Your Partnership
          </motion.h3>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            May God bless you abundantly as you sow into His kingdom work
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
