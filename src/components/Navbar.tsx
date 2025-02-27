import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold">PackTrack</div>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="#contexte" className="hover:text-white/80 transition-colors">
            Contexte
          </Link>
          <Link href="#technologies" className="hover:text-white/80 transition-colors">
            Technologies
          </Link>
          <Link href="#architecture" className="hover:text-white/80 transition-colors">
            Architecture
          </Link>
          <Link href="#dashboard" className="hover:text-white/80 transition-colors">
            Dashboard
          </Link>
          <Link href="#ia" className="hover:text-white/80 transition-colors">
            IA
          </Link>
          <Link href="#resultats" className="hover:text-white/80 transition-colors">
            Résultats
          </Link>
        </div>
        
        <Link href="https://project-full-ia.vercel.app/" target="_blank" className="glass-button">
          Voir la démo
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;