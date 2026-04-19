import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: "Awal Bertemu",
    date: "Juni 2018",
    desc: "Berawal dari pertemuan sederhana, dua hati yang berbeda kini berjalan seirama. Kami bertemu pertama kali di sebuah acara kampus."
  },
  {
    year: "Menjalin Kasih",
    date: "Agustus 2018",
    desc: "Salsabila dan Rizki belajar bahwa cinta bukan hanya tentang menemukan, tetapi tentang saling memahami, menguatkan, dan tumbuh bersama."
  },
  {
    year: "Lamaran",
    date: "Oktober 2022",
    desc: "Kini, dengan restu keluarga dan ridho Allah SWT, kami siap melangkah menuju babak baru — kehidupan sebagai suami dan istri."
  }
];

export default function Cerita() {
  return (
    <section id="cerita" className="py-16 px-6 bg-sahkita-bg">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-gray-600 font-script mb-2">Cerita Cinta</h2>
          <p className="text-gray-600">
            Perjalanan kasih sayang yang membawa kami sampai pada titik ini.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-sahkita-secondary ml-4 md:ml-1/2">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10 ml-6 relative"
            >
              <div className="absolute w-4 h-4 bg-sahkita-primary rounded-full -left-[35px] top-1.5 border-4 border-sahkita-bg"></div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                <span className="inline-block px-3 py-1 bg-sahkita-accent text-sahkita-primary text-xs font-semibold rounded-full mb-2">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-sahkita-dark mb-2">{item.year}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
