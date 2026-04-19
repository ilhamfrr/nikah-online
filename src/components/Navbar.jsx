import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  FaHome, 
  FaHeart, 
  FaCalendarAlt, 
  FaMapMarkedAlt, 
  FaImages, 
  FaVideo, 
  FaGift, 
  FaEnvelopeOpenText 
} from 'react-icons/fa';

export default function Navbar() {
  const navItems = [
    { id: 'home', icon: <FaHome size={18} />, label: 'Home' },
    { id: 'mempelai', icon: <FaHeart size={18} />, label: 'Couple' },
    { id: 'undangan', icon: <FaCalendarAlt size={18} />, label: 'Date' },
    { id: 'peta', icon: <FaMapMarkedAlt size={18} />, label: 'Map' },
    { id: 'galeri', icon: <FaImages size={18} />, label: 'Gallery' },
    { id: 'video', icon: <FaVideo size={18} />, label: 'Video' },
    { id: 'kadonikah', icon: <FaGift size={18} />, label: 'Gift' },
    { id: 'doa', icon: <FaEnvelopeOpenText size={18} />, label: 'RSVP' }
  ];

  return (
    <motion.nav 
      initial={{ y: 100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 60 }}
      style={{ left: '50%' }}
      className="fixed bottom-6 z-[60] w-max max-w-[92vw] md:max-w-max bg-white/70 backdrop-blur-xl px-4 py-2 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-white/40 flex items-center justify-center overflow-hidden"
    >
      <ul className="flex items-center gap-1 md:gap-4 overflow-x-auto no-scrollbar scroll-smooth px-1">
        {navItems.map((item) => (
          <li key={item.id} className="relative group">
            <Link 
              to={item.id} 
              spy={true} 
              smooth={true} 
              offset={-20} 
              duration={800} 
              activeClass="active-nav"
              className="flex flex-col items-center justify-center text-gray-400 hover:text-sahkita-primary transition-all p-3 cursor-pointer relative z-10"
            >
              <div className="relative z-10">{item.icon}</div>
              
              {/* Tooltip on Desktop */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-sahkita-dark text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Internal Style for Active Class to work with react-scroll */}
      <style dangerouslySetInnerHTML={{ __html: `
        .active-nav {
          color: #526D82 !important;
          background-color: rgba(82, 109, 130, 0.1);
          border-radius: 9999px;
          transform: scale(1.1);
        }
      `}} />
    </motion.nav>
  );
}
