import React from 'react';
import { motion } from 'framer-motion';
import { FaMap } from 'react-icons/fa';

export default function Lokasi() {
  return (
    <section id="peta" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl text-sahkita-primary font-script mb-2">Lokasi Acara</h2>
          <p className="text-gray-600 mb-8">
            Berikut adalah detail lokasi penyelenggaraan acara pernikahan kami:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl border-4 border-sahkita-bg h-96 relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126938.81881883393!2d106.74516335198952!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a9!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1689252329380!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi"
            className="absolute inset-0"
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="https://goo.gl/maps/xyz"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-gray-600 rounded-full px-8 border-2"
          >
            <FaMap /> Buka di Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
