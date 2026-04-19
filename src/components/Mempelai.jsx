import React from 'react';
import { motion } from 'framer-motion';
import rizki from "../assets/img/rizki.jpeg";
import salsabila from "../assets/img/bila.jpeg";

export default function Mempelai() {
  return (
    <section id="mempelai" className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-script text-sahkita-primary mb-4">Assalamu’alaikum wr. wb. </h2>
          <p className="text-sm md:text-base text-gray-600 mb-12">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Acara Resepsi Pernikahan kami:
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8">

          {/* Mempelai Wanita */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-sahkita-secondary shadow-xl mb-6">
              <img src={salsabila} alt="Salsabila" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-script text-4xl text-sahkita-dark mb-2">Salsabila</h3>
            <p className="font-semibold text-lg text-gray-700">Salsabila Az Zahra Mutmainnah</p>
            <p className="text-sm text-gray-500 mt-2">
              Putri Pertama dari Bapak Hartono <br /> &amp; Ibu Tuti Imadedarti
            </p>
            <a href="https://www.instagram.com/ssalsabilaak?igsh=MWF4bms2YWEyY2cweQ%3D%3D" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline btn-gray rounded-full mt-4">@ssalsabilaak</a>
          </motion.div>

          {/* & */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl font-script text-sahkita-secondary"
          >
            &amp;
          </motion.div>

          {/* Mempelai Pria */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-sahkita-secondary shadow-xl mb-6">
              <img src={rizki} alt="Rizki" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-script text-4xl text-sahkita-dark mb-2">Rizki</h3>
            <p className="font-semibold text-lg text-gray-700">Muhammad Rizki Fadillah</p>
            <p className="text-sm text-gray-500 mt-2">
              Putra Kedua dari Bapak Abdul Rachim<br /> &amp; Ibu Dewi Ratih
            </p>
            <a href="https://www.instagram.com/ikyfdllh______?igsh=MWx6NGUzMXlxZ2o5Zg%3D%3D" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline btn-gray rounded-full mt-4">@ikyfdllh______</a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
