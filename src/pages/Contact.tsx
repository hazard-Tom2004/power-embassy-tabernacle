import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
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
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
              >
                <Mail className="h-16 w-16 mx-auto mb-6" />
              </motion.div>
              <motion.h1
                className="text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
              >
                Contact Us
              </motion.h1>
              <motion.p
                className="text-xl max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
              >
                We would love to hear from you. Whether you need prayers, counseling, deliverance, or have questions about the ministry, please reach out.
              </motion.p>
            </div>
          </motion.section>

          {/* Info Grid Section */}
          <motion.section
            className="py-20 bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-blue-50 p-8 rounded-2xl"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <MapPin className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">No 6 Iriekpen Street Ukpafisi Quarter Uhonmora Ora Owan West Local Government Edo State Nigeria.</p>
                </motion.div>
                <motion.div
                  className="bg-blue-50 p-8 rounded-2xl"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                >
                  <Phone className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <div className="text-gray-700"> +2348032237627
                    <p>+2347035277444</p>
                    <p>+2348114595898</p></div>
                </motion.div>
                <motion.div
                  className="bg-blue-50 p-8 rounded-2xl"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                >
                  <Mail className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-700">powerembassytabernacle6@gmail.com</p>
                </motion.div>
                <motion.div
                  className="bg-blue-50 p-8 rounded-2xl"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                >
                  <Clock className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Times</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Sundays: 8:00 AM</p>
                    <p>Wednesdays: 5:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Prayer & Counseling Section */}
          <motion.section
            className="py-16 bg-gray-50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="bg-white p-10 rounded-2xl shadow-sm text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <motion.h2
                  className="text-2xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
                >
                  Prayer & Counseling
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-700 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                >
                  Available by appointment
                </motion.p>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
                >
                  Contact us to schedule a session with our pastoral team
                </motion.p>
              </motion.div>
            </div>
          </motion.section>
        </div>
  );
}
