import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  delay?: number;
}

const Card = ({ children, className = '', borderColor = 'border-burgundy', delay = 0 }: CardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`bg-surface rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl border-t-4 ${borderColor} hover:-translate-y-2 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
