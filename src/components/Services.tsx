import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-xl font-normal text-[#999999] mb-8">
          01 — Our Services
        </h2>
        <p className="text-4xl font-light text-[#999999] mb-12 max-w-[90%]">
          As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServiceCard
            title="Mobile App Development"
            backgroundImage="/services/mob-dev.webp"
            description={`Many years of expertise in mobile development 
            allow us to design architecture and create 
            bespoke native applications for Apple iOS and 
            Google Android.`}
            tools={['React Native', 'Flutter']}
          />
          <ServiceCard
            title="Webapp Development"
            backgroundImage="/services/web-dev.webp"
            description="We're driven by user-centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements."
            tools={['Figma', 'Adobe AfterEffects', 'Adobe Illustrator', 'Blender', 'Cinema 4D']}
          />
          <ServiceCard
            title="Graphic Design Solutions"
            backgroundImage="/services/design-solutions.webp"
            description="Our adaptive design components are built using perfectly structured and readable code. We make sure that the development solutions are well-optimized and work flawlessly across devices and browsers."
            tools={['ReactJS', 'NextJS', 'VueJS', 'NodeJS']}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
