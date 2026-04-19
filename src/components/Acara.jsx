import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Acara() {
  return (
    <section id="undangan" className="py-16 px-6 bg-sahkita-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-gray-600 font-script mb-4">Jadwal Acara</h2>
          <p className="text-gray-600">Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami:</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">

          {/* Akad Nikah / Pemberkatan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 card bg-white shadow-xl shadow-gray/10 border-t-4 border-gray-500"
          >
            <div className="card-body items-center text-center">
              <h3 className="card-title text-2xl text-sahkita-dark">Akad Nikah</h3>
              <div className="divider my-0"></div>

              <div className="w-full flex flex-col gap-4 mt-2">
                <div className="flex items-center justify-center gap-3 text-gray-600">
                  <FaCalendarAlt size={20} />
                  <span className="font-semibold text-lg">Sabtu, 24 Desember 2022</span>
                </div>

                <div className="flex items-center justify-center gap-3 text-gray-600">
                  <FaClock size={20} />
                  <span>13:00 WIB - Selesai</span>
                </div>

                <div className="flex items-start justify-center gap-3 text-sahkita-primarytext-left mt-2 text-sm text-gray-600">
                  <FaMapMarkerAlt size={20} className="text-gray-500 mt-1 shrink-0" />
                  <span>Jalan akad Nikah 1 <br /> Kota Depok</span>
                </div>
              </div>

              <div className="card-actions justify-center mt-6 w-full">
                <a
                  href="http://www.google.com/calendar/event?action=TEMPLATE&text=Akad+Nikah+Ilham+Widya&dates=20221224T130000/20221224T184500&location=Jalan+akad+Nikah+1"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gray bg-gray-600 border-none w-full text-white hover:bg-sahkita-dark rounded-full"
                >
                  <FaCalendarAlt /> Add to Calendar
                </a>
              </div>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 card bg-white shadow-xl shadow-gray/10 border-t-4 border-gray-600"
          >
            <div className="card-body items-center text-center">
              <h3 className="card-title text-2xl text-sahkita-dark">Resepsi</h3>
              <div className="divider my-0"></div>

              <div className="w-full flex flex-col gap-4 mt-2">
                <div className="flex items-center justify-center gap-3 text-gray-600">
                  <FaCalendarAlt size={20} />
                  <span className="font-semibold text-lg">Sabtu, 24 Desember 2022</span>
                </div>

                <div className="flex items-center justify-center gap-3 text-gray-600">
                  <FaClock size={20} />
                  <span>09:00 WIB - 13:00 WIB</span>
                </div>

                <div className="flex items-start justify-center gap-3 text-left mt-2 text-sm text-gray-600">
                  <FaMapMarkerAlt size={20} className="text-gray-600 mt-1 shrink-0" />
                  <span>Jalan akad Nikah 2 <br /> Kota Depok</span>
                </div>
              </div>

              <div className="card-actions justify-center mt-6 w-full">
                <a
                  href="http://www.google.com/calendar/event?action=TEMPLATE&text=Resepsi+Pernikahan+Ilham+Widya&dates=20221225T100000/20221225T174500&location=Jalan+akad+Nikah+2"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gray bg-gray-600 border-none w-full text-white hover:bg-sahkita-dark rounded-full"
                >
                  <FaCalendarAlt /> Add to Calendar
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
