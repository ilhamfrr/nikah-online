import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCompactDisc, FaPause } from 'react-icons/fa';
import bgsound from "../assets/backsound/bgsound.mp3";

export default function AudioPlayer({ isOpened }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isOpened && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Autoplay prevented", err);
      });
    }
  }, [isOpened]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={bgsound} type="audio/mpeg" />
      </audio>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpened ? 1 : 0 }}
        transition={{ delay: 0.5, type: 'spring' }}
        onClick={togglePlay}
        className="fixed bottom-28 right-6 z-[60] bg-white/70 backdrop-blur-md p-3 rounded-full shadow-lg border border-white/40 text-sahkita-primary hover:bg-sahkita-primary hover:text-white transition-all active:scale-95"
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          {isPlaying ? <FaCompactDisc size={24} /> : <FaPause size={24} />}
        </motion.div>
      </motion.button>
    </>
  );
}
