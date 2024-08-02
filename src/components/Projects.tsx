import React from 'react';
import { motion } from "framer-motion";
import InfiniteText from './infiniteText/page';
import Image from 'next/image';

const ProjectsSection: React.FC = () => {
  return (
    <section className="pt-16 pb-[35rem] bg-[#0D0F11] relative">
      <div className="mx-auto px-4 md:px-8 lg:px-16">
        <div className='flex justify-between items-center'>
            <h2 className="text-8xl font-normal text-white mb-8 w-[50%]">
            {'{Smart}'} DEVELOPMENT
            </h2>
            <h2 className='text-[10rem] text-white'>
                **
            </h2>
        </div>
        <p className="text-4xl font-light text-[#999999] mb-12 max-w-[90%]">
          As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.
        </p>
        <InfiniteText
        text="Data driven user focused value based"
        textColor="text-[#FFFFFF15]" 
      />
      <div>
      <motion.div
        className="absolute top-[30rem] left-[30%]"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Image
          src="/projects/phone-01.webp"
          alt="Phone"
          width={350}
          height={350}
        />
      </motion.div>

      <motion.div
        className="absolute top-[40rem] left-[50%]"
        animate={{ y: [0, -40, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Image
          src="/projects/phone-02.webp"
          alt="Phone"
          width={350}
          height={350}
        />
      </motion.div>
    </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
