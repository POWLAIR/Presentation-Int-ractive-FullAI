import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Suivi de Livraisons avec IA
          </h1>
          <p className="text-xl md:text-2xl opacity-80 mb-10 max-w-3xl mx-auto">
            Une solution innovante pour optimiser la gestion des expéditions et améliorer l'expérience client
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#contexte" className="glass-button text-lg px-8 py-3">
              Découvrir le projet
            </Link>
            <Link href="https://project-full-ia.vercel.app/" target="_blank" className="glass-button text-lg px-8 py-3">
              Voir la démo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;