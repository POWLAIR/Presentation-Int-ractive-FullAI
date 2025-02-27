import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
  change?: string;
  positive?: boolean;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  icon, 
  label, 
  value, 
  change, 
  positive = true,
  delay = 0
}) => {
  return (
    <motion.div 
      className="glass-card stat-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="stat-icon">{icon}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {change && (
        <div className={`stat-change ${positive ? 'positive' : 'negative'}`}>
          {change}
        </div>
      )}
    </motion.div>
  );
};

export default StatCard;