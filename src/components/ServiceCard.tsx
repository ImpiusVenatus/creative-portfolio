import React from 'react';

interface ServiceCardProps {
  title: string;
  bgImage: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, bgImage }) => {
  return (
    <div
      className="cursor-pointer relative flex items-center justify-center h-64 rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
        <h3 className="text-white text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
