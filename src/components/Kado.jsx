import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaUniversity, FaGift } from 'react-icons/fa';

export default function Kado() {
  const [copied, setCopied] = useState(null);

  const bankAccounts = [
    { name: 'Salsabila Az Zahra Mutmainnah', bank: 'BCA', number: '1234567890' },
    { name: 'Muhammad Rizki Fadillah', bank: 'Mandiri', number: '0987654321' }
  ];

  const handleCopy = (num) => {
    navigator.clipboard.writeText(num);
    setCopied(num);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="kadonikah" className="py-16 px-6 bg-sahkita-bg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex justify-center mb-4">
            <FaGift className="text-4xl text-gray-600" />
          </div>
          <h2 className="text-4xl text-gray-600 font-script mb-2">Kado Nikah</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Doa restu Anda merupakan hadiah terindah bagi pernikahan kami. Namun jika Anda ingin memberikan hadiah, kami menyediakan fitur Kado Digital berikut ini:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bankAccounts.map((acc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card bg-white shadow-xl border border-gray-100"
            >
              <div className="card-body items-center text-center p-8">
                <FaUniversity className="text-3xl text-sahkita-primary mb-2" />
                <h3 className="font-bold text-xl text-sahkita-dark">{acc.bank}</h3>
                <p className="text-lg font-mono text-sahkita-primary my-2">{acc.number}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">a.n {acc.name}</p>

                <button
                  onClick={() => handleCopy(acc.number)}
                  className={`btn btn-sm rounded-full px-6 flex items-center gap-2 ${copied === acc.number ? 'btn-gray-600 text-gray-600' : 'btn-outline btn-gray-600'}`}
                >
                  <FaCopy /> {copied === acc.number ? 'Berhasil Disalin!' : 'Salin Nomor Rekening'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-white rounded-2xl border-2 border-dashed border-sahkita-primary/30 inline-block"
        >
          <p className="text-sm text-gray-600">
            Anda juga dapat mengirimkan kado fisik ke alamat berikut:<br />
            <strong className="text-sahkita-dark">Jalan Akad Nikah 1, Kota Depok</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
