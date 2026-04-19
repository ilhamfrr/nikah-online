import React from 'react';
import { motion } from 'framer-motion';
import cover from "../assets/img/cover.jpeg";

export default function Hero() {
  return (
    <section id="home" className="relative text-center min-h-screen flex flex-col items-center justify-center pt-10 pb-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-sm md:text-base font-semibold tracking-widest text-sahkita-dark uppercase mb-4">
          The Wedding Of
        </p>
        <h1 className="font-script text-5xl md:text-7xl text-sahkita-primary mb-2">
          Salsabila &amp; Rizki
        </h1>
        <p className="text-sm md:text-base text-sahkita-dark/80 font-medium mb-8">
          Sabtu, 24 Desember 2022
        </p>

        {/* Hero Image */}
        <div className="relative w-64 h-80 md:w-80 md:h-96 mx-auto rounded-t-full overflow-hidden border-[6px] border-white shadow-2xl mb-8">
          <img
            src={cover}
            alt="Salsabila & Rizki"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic text-sm md:text-base leading-relaxed text-gray-600">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
          <p className="font-semibold text-sahkita-dark mt-4 not-italic">(QS. Ar-Rum: 21)</p>
        </div>
      </motion.div>
    </section>
  );
}
