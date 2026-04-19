import React from 'react';
import { motion } from 'framer-motion';

export default function Video() {
  return (
    <section id="video" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h2 className="text-4xl text-sahkita-primary font-script mb-2">Video Momen</h2>
          <p className="text-gray-600">Kebahagiaan yang terabadikan dalam lensa.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-sahkita-bg relative"
        >
          {/* Placeholder Video Embed */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/EC0STTaH7nk"
            title="Video Prewedding"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
