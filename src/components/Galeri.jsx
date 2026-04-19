import React from 'react';
import { motion } from 'framer-motion';
import slide1 from "../assets/img/slide1.jpeg";
import slide2 from "../assets/img/slide2.jpeg";
import slide3 from "../assets/img/slide3.jpeg";
import slide4 from "../assets/img/slide4.jpeg";
import slide5 from "../assets/img/slide5.jpeg";
import slide6 from "../assets/img/slide6.jpeg";

export default function Galeri() {
  const images = [
    slide1,
    slide5,
    slide3,
    slide4,
    slide2,
    slide6
  ];

  return (
    <section id="galeri" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-sahkita-primary font-script mb-2">Galeri Momen</h2>
          <p className="text-gray-600">Terangkai dalam bingkai kenangan</p>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <img src={src} alt={`Gallery ${index}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
