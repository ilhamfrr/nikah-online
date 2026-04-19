import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function Ucapan() {
  const [messages, setMessages] = useState([
    { name: 'Budi Santoso', text: 'Selamat menempuh hidup baru Salsabila dan Rizki. Semoga samawa!', time: '1 hari yang lalu' },
    { name: 'Siti Aminah', text: 'Alhamdulillah, lancar sampai hari H yaa', time: '2 hari yang lalu' }
  ]);

  return (
    <section id="doa" className="py-16 px-6 bg-sahkita-bg pb-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl text-gray-600 font-script mb-2">Doa &amp; Ucapan</h2>
          <p className="text-gray-600">Terima kasih atas doa restu yang telah diberikan.</p>
        </motion.div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-sahkita-primary/10">
          <form className="flex flex-col gap-4 mb-8" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <label className="label"><span className="label-text text-sahkita-dark font-medium">Nama</span></label>
              <input type="text" placeholder="   Nama Anda" className="input input-bordered focus:border-sahkita-primary bg-sahkita-bg w-full" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text text-sahkita-dark font-medium">Ucapan & Doa</span></label>
              <textarea className="textarea textarea-bordered focus:border-sahkita-primary bg-sahkita-bg h-24" placeholder="Tuliskan harapan dan doa terbaik Anda..."></textarea>
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text text-sahkita-dark font-medium">Kehadiran</span></label>
              <select className="select select-bordered focus:border-sahkita-primary bg-sahkita-bg w-full">
                <option>Hadir</option>
                <option>Mungkin Hadir</option>
                <option>Tidak Hadir</option>
              </select>
            </div>
            <button className="btn bg-sahkita-primary hover:bg-sahkita-dark text-white border-none mt-2">
              <FaPaperPlane /> Kirim Ucapan
            </button>
          </form>

          <div className="h-64 overflow-y-auto pr-2 no-scrollbar space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className="bg-sahkita-bg p-4 rounded-xl border border-gray-200">
                <h4 className="font-bold text-sahkita-dark">{msg.name}</h4>
                <p className="text-xs text-gray-500 mb-2">{msg.time}</p>
                <p className="text-sm text-gray-700">{msg.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
