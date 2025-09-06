import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, index, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`card group hover:scale-105 transition-transform duration-300 h-full ${className}`}
    >
      <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-lg mb-4 group-hover:bg-primary-200 transition-colors duration-300">
        <div className="text-primary-600 text-xl sm:text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
