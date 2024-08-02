import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  backgroundImage: string;
  title: string;
  description: string;
  tools: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ backgroundImage, title, description, tools }) => {
  return (
    <div className="relative bg-orange-200 text-white p-8 rounded-lg shadow-md mx-auto cursor-pointer overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      ></motion.div>
      <div className="relative z-10">
        <h2 className="text-6xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal mb-32">{title}</h2>
        <p className="mb-6">
          {description}
        </p>
        <hr className='py-2'/>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span key={tool} className="bg-white/25 text-white py-2 px-4 rounded-full text-sm">
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
    </div>
  );
};

export default ServiceCard;
