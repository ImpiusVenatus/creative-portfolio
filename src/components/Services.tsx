import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-[#999999] mb-8">
          01 — Our Services
        </h2>
        <p className="text-4xl text-[#999999] mb-12 max-w-[90%]">
          As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Mobile App Development"
            bgImage="/graphic-design.jpg"
          />
          <ServiceCard
            title="Webapp Development"
            bgImage="/graphic-design.jpg"
          />
          <ServiceCard
            title="Graphic Design Solutions"
            bgImage="/graphic-design.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
