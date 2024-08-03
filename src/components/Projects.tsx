import React from 'react';
import { motion } from "framer-motion";
import InfiniteText from './infiniteText/page';
import Image from 'next/image';

const ProjectsSection: React.FC = () => {
  return (
    <section className="pt-16 bg-[#0D0F11] relative">
      <div className="mx-auto">
        <div className='flex justify-between items-center px-32'>
            <h2 className="text-8xl font-normal text-white mb-8 w-[50%]">
            {'{Smart}'} DEVELOPMENT
            </h2>
            <h2 className='text-[10rem] text-[#ffffff66]'>
                **
            </h2>
        </div>
        <p className="px-32 text-4xl font-light text-[#999999] mb-12 max-w-[90%]">
          As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.
        </p>
        <InfiniteText
          text="Data driven user focused value based"
          textColor="text-[#FFFFFF15]" 
        />
        <div>
          <motion.div
            className="absolute top-[30rem] left-[calc(50%-300px)]"
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
            animate={{ y: [0, -20, 0] }}
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
        <div className='flex justify-between items-center mt-64 mb-32 px-32'>
          <div className='w-[50%]'>
            <h6 className='text-white w-[75%] text-2xl'>Making your business outstanding is a science. We take it (a) seriously and (b) creatively.</h6>
          </div>
          <div className='flex flex-wrap justify-end gap-4 w-[50%]'>
            <button className='bg-white px-8 rounded-full py-2 max-h-[2.5rem]'>Check Our Portfolio</button>
            <button className='bg-[#505050] text-white px-8 rounded-full py-2 max-h-[2.5rem]'>Get in touch</button>
          </div>
        </div>
        <div className="relative w-full pt-[400px]">
          <div className="max-w-full overflow-hidden flex justify-center">
            <div className="pb-[115px]">
              <ul className="flex">
                <li className="m-3 ml-0">
                  <div className="w-[365px] h-[770px]">
                    <Image
                      src="/projects/screen1-1.webp"
                      alt="Project"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="rounded-3xl"
                    />
                  </div>
                </li>
                <li className="m-3">
                  <div className="w-[365px] h-[770px]">
                    <Image
                      src="/projects/screen1-2.webp"
                      alt="Project"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="rounded-3xl"
                    />
                  </div>
                </li>
                <li className="m-3">
                  <div className="w-[365px] h-[770px]"></div>
                </li>
                <li className="m-3">
                  <div className="w-[365px] h-[770px]">
                    <Image
                      src="/projects/screen1-3.webp"
                      alt="Project"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="rounded-3xl"
                    />
                  </div>
                </li>
                <li className="m-3">
                  <div className="w-[365px] h-[770px]">
                    <Image
                      src="/projects/screen1-4.webp"
                      alt="Project"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="rounded-3xl"
                    />
                  </div>
                </li>
              </ul>
              <ul className="flex">
                <li className="m-3 ml-0">
                  <div className="w-[365px] h-[770px]">
                    <Image
                      src="/projects/screen2-1.webp"
                      alt="Project"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="rounded-3xl"
                    />
                  </div>
                </li>
                <li className="m-3">
                  <div className="w-[365px] h-[770px]">
                    <Image
                      src="/projects/screen2-2.webp"
                      alt="Project"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="rounded-3xl"
                    />
                  </div>
                </li>
                <li className="m-3">
                  <div className="w-[365px] h-[770px]"></div>
                </li>
                <li className="m-3">
                  <div className="w-[365px] h-[770px]">
                    <Image
                      src="/projects/screen2-3.webp"
                      alt="Project"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="rounded-3xl"
                    />
                  </div>
                </li>
                <li className="m-3">
                  <div className="w-[365px] h-[770px]">
                    <Image
                      src="/projects/screen2-4.webp"
                      alt="Project"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="rounded-3xl"
                    />
                  </div>
                </li>
              </ul>
              <ul className="flex">
                <li className="m-3 ml-0">
                  <div className="w-[365px] h-[770px]">
                    <Image
                      src="/projects/screen3-1.webp"
                      alt="Project"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="rounded-3xl"
                    />
                  </div>
                </li>
                <li className="m-3">
                  <div className="w-[365px] h-[770px]">
                    <Image
                      src="/projects/screen3-2.webp"
                      alt="Project"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="rounded-3xl"
                    />
                  </div>
                </li>
                <li className="m-3">
                  <div className="w-[365px] h-[770px]"></div>
                </li>
                <li className="m-3">
                  <div className="w-[365px] h-[770px]">
                    <Image
                      src="/projects/screen3-3.webp"
                      alt="Project"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="rounded-3xl"
                    />
                  </div>
                </li>
                <li className="m-3">
                  <div className="w-[365px] h-[770px]">
                    <Image
                      src="/projects/screen3-4.webp"
                      alt="Project"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="rounded-3xl"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>

           <div className="absolute inset-0 w-full h-full flex flex-col items-center">
            <div className="w-full flex items-start justify-center overflow-hidden sticky top-0">
              <Image
                src="/projects/hand.webp"
                alt="Project"
                width={100}
                height={100}
                layout="responsive"
                className="min-w-[1870px] w-[1870px] flex-shrink-0 h-auto relative object-cover object-[center_top]"
              />
              <div className="absolute w-[348px] h-[761px] top-[60px]">
                <video
                  className="w-full h-full object-cover object-center rounded-[2.5rem]"
                  autoPlay
                  muted
                  loop
                >
                  <source
                    src="/projects/Creative Design and Development Agency_3.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
         </div>
        </div>

        <div>
          Hello
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
