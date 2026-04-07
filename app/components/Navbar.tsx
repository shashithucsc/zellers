"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-[#0B041C]/80 border-b border-white/10"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-extrabold tracking-widest bg-linear-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent select-none">
          ZELLERS
        </span>
        <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-yellow-400 mt-0.5" />
        <span className="hidden sm:block text-xs tracking-[0.3em] text-yellow-400/60 uppercase mt-0.5">
          Chocolates
        </span>
      </div>

      {/* Nav Actions */}
      <div className="flex items-center gap-3">
        <button className="text-sm font-semibold tracking-widest text-gray-300 hover:text-yellow-400 transition-colors duration-200 px-4 py-2 rounded-full hover:bg-white/5">
          VOTE
        </button>
        <button className="text-sm font-bold tracking-wide text-black bg-linear-to-r from-yellow-500 to-amber-400 rounded-full px-6 py-2 hover:scale-105 transition-transform duration-200 glow-gold-box shadow-lg">
          ENTER NOW
        </button>
      </div>
    </motion.nav>
  );
}
