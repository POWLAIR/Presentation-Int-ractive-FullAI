import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">PackTrack</div>
            <p className="opacity-70 mt-2">Suivi de Livraisons avec IA</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
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
          
          <div className="mt-6 md:mt-0">
            <Link href="https://project-full-ia.vercel.app/" target="_blank" className="glass-button">
              Voir la démo
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-10 opacity-70">
          <p>© 2025 PackTrack. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;