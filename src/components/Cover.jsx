import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelopeOpenText } from 'react-icons/fa';

export default function Cover({ isOpened, onOpen, guestName }) {
  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-sahkita-bg overflow-hidden"
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80)' }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center text-white min-h-screen">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm md:text-base font-medium tracking-[0.2em] mb-6 uppercase"
            >
              Pernikahan
            </motion.p>

            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-script text-5xl md:text-8xl mb-4 drop-shadow-lg"
            >
              Salsabila &amp; Rizki
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 mb-12"
            >
              <p className="text-sm md:text-base">Kpd Yth. Bapak/Ibu/Saudara/i:</p>
              <h2 className="text-xl md:text-2xl font-semibold mt-2 border-b border-white/50 pb-2 inline-block">
                {guestName || 'Tamu Undangan'}
              </h2>
              <p className="text-xs text-gray-300 mt-2">*Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              onClick={onOpen}
              className="btn btn-primary rounded-full px-8 bg-sahkita-primary border-none hover:bg-sahkita-dark text-white shadow-lg flex items-center gap-2"
            >
              <FaEnvelopeOpenText />
              Buka Undangan
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
