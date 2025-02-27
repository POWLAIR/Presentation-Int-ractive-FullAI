import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, delay = 0 }) => {
  return (
    <motion.div 
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default FeatureCard;