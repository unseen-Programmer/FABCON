"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Download } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 px-6 flex flex-col items-center text-center bg-gradient-to-b from-[#0c2b63] via-[#0e3475] to-[#123e8a] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/20 blur-[140px] rounded-full" />

      {/* Hex Pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/hexellence.png')",
        }}
      />

      {/* Date Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-white text-xs md:text-sm mb-8 shadow-lg"
      >
        <Calendar size={16} />
        16 – 17 March 2026
      </motion.div>

      {/* FABCON LOGO */}
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.05 }}
        src="/fabcon-logo.jpeg"
        alt="FABCON Logo"
        className="w-28 h-28 md:w-36 md:h-36 object-contain mb-8 drop-shadow-xl"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
      >
        FABCON <span className="text-blue-300">2026</span>
      </motion.h1>

      <p className="text-base md:text-xl text-gray-200 mb-2 max-w-xl">
        National Symposium on the Confluence of
      </p>

      <p className="text-lg md:text-2xl font-semibold text-blue-200 mb-8">
        Food • Biotechnology • Automation
      </p>

      {/* Organized By Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg mb-8"
      >
        <p className="uppercase tracking-widest text-xs md:text-sm text-blue-200 mb-3">
          Organized By
        </p>

        <p className="text-lg md:text-xl font-semibold text-white leading-snug mb-2">
          Department of Food Engineering & Technology
        </p>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Central Institute of Technology Kokrajhar
          <span className="block">(Deemed to be University)</span>
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Ministry of Education, Government of India
        </p>
      </motion.div>

      {/* Venue */}
      <div className="flex items-center gap-2 text-gray-300 text-sm md:text-base mb-10 max-w-md text-center">
        <MapPin size={18} className="text-blue-300" />
        BKB Seminar Hall, CIT Kokrajhar, Assam, India
      </div>

      {/* Download Brochure Button */}
      <div className="flex flex-col sm:flex-row gap-4">

        <motion.a
          href="/FABCON_Brochure.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center justify-center gap-3 px-7 py-3 rounded-xl border border-white/40 text-white font-semibold backdrop-blur hover:bg-white/10 transition"
        >
          Download Brochure
          <Download
            size={18}
            className="transition-transform group-hover:translate-y-1"
          />
        </motion.a>

      </div>

    </section>
  )
}