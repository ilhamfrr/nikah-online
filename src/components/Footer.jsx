import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaCopy, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const [guestName, setGuestName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const generateLink = () => {
    if (!guestName) return;
    const baseUrl = window.location.origin + window.location.pathname;
    const encodedName = encodeURIComponent(guestName);
    const link = `${baseUrl}?to=${encodedName}`;
    setGeneratedLink(link);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWhatsApp = () => {
    const message = encodeURIComponent(`Halo ${guestName}, kami mengundang Anda untuk hadir di pernikahan kami. Buka undangan di sini: ${generatedLink}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-sahkita-dark text-white py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">

        {/* Generator Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 mb-12"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-script text-sahkita-accent mb-2">Buat Undangan Kustom</h3>
            <p className="text-sm text-gray-300">Masukkan nama tamu untuk membuat link undangan khusus.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              className="input input-bordered flex-1 bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-sahkita-accent"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
            />
            <button
              onClick={generateLink}
              className="btn btn-primary bg-sahkita-primary border-none text-white hover:bg-sahkita-accent hover:text-sahkita-dark shadow-lg px-8"
              disabled={!guestName}
            >
              Generate Link
            </button>
          </div>

          {generatedLink && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="mt-6 p-4 bg-white/5 rounded-2xl border border-dashed border-white/20 overflow-hidden"
            >
              <p className="text-xs text-sahkita-accent mb-2 uppercase tracking-widest font-bold">Link Undangan Siap Kirim:</p>
              <div className="flex items-center gap-2 bg-black/20 p-3 rounded-xl break-all text-sm mb-4">
                <FaLink className="shrink-0 text-sahkita-accent" />
                <span className="truncate">{generatedLink}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={copyToClipboard}
                  className={`btn btn-sm flex-1 gap-2 rounded-full ${copied ? 'btn-success text-white' : 'btn-outline border-white/50 text-white hover:bg-white hover:text-sahkita-dark'}`}
                >
                  <FaCopy /> {copied ? 'Tersalin!' : 'Salin Link'}
                </button>
                <button
                  onClick={shareWhatsApp}
                  className="btn btn-sm flex-1 gap-2 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none"
                >
                  <FaWhatsapp /> Share WA
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Brand/Copyright Section */}
        <div className="text-center border-t border-white/10 pt-8 w-full">
          <h2 className="font-script text-3xl text-sahkita-accent mb-4">Salsabila & Rizki</h2>
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            © 2026 NusaDigi. All Rights Reserved.
          </p>
          <p className="text-[10px] text-gray-500 mt-2">
            Build with ❤️ by IlhamFrr
          </p>
        </div>
      </div>
    </footer>
  );
}
