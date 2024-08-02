import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowDown, Star } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import HireMe from './HireMe';

const HeroSection: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    const handleMouseEnter = () => {
        setIsHovered(true);
        controls.start({ y: '-160%' });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        controls.start({ y: '0%' });
    };

    const words = [
        {
          text: "Design",
          className: "text-4xl md:text-9xl font-normal mb-4 text-[#A57BD8]",
        },
      ];
    

    return (
        <section className="relative h-screen overflow-hidden rounded-lg mx-4 my-4">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
            >
                <source src="/herobg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 flex flex-col justify-end w-full h-full pb-32">
                <div className="text-white px-4 md:px-8">
                    <h1 className="text-4xl md:text-9xl font-bold mb-4 text-[#A57BD8]">WE CREATE</h1>
                    <div className='flex items-center'>
                        <div className="relative flex justify-center items-center w-24 h-24">
                            <motion.button
                                className="relative overflow-hidden text-[#2e2f30] w-16 h-16 rounded-full text-md font-semibold bg-white transition-all duration-300 ease-in-out hover:bg-transparent hover:border-4 border-transparent hover:border-white"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="flex flex-col gap-4 pt-3 h-[3em] overflow-hidden relative z-10">
                                    <motion.span
                                        className="w-full h-full flex items-center justify-center"
                                        initial={{ y: 0 }}
                                        animate={controls}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ArrowDown />
                                    </motion.span>
                                    <motion.span
                                        className="w-full h-full flex items-center justify-center"
                                        initial={{ y: '100%' }}
                                        animate={controls}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ArrowDown />
                                    </motion.span>
                                </span>
                            </motion.button>
                            <span className="absolute w-24 h-24 rounded-full border-4 border-[#FFFFFF] animate-pulse-expand"></span>
                        </div>
                        <h1 className="text-4xl md:text-9xl font-normal mb-4 text-[#A57BD8]">AWESOME</h1>
                    </div>
                   <div className='text-4xl md:text-9xl font-bold mb-4 text-[#A57BD8]'>
                   <Typewriter
                        options={{
                            strings: ['DESIGN', 'DEVELOPMENT', 'BRANDING'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                   </div>
                   <div className="relative text-center my-6 max-w-[60rem]">
                        <div className="relative">
                            <hr className="border-t-2 border-white" />
                        </div>
                    </div>
                    <div className='inline-block'>
                    <div className='flex items-center gap-4 cursor-pointer group hover:bg-white transition-all duration-300 px-8 py-2 rounded-full'>
                        <div className='bg-white inline-block rounded-full px-4 py-2 group-hover:bg-[#2E2F30] transition-all duration-300'>
                            <div className='flex justify-center items-center text-yellow-500'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <span className='text-[#2E2F30] font-bold pl-2 group-hover:text-white transition-all duration-300'>4.6</span>
                            </div>
                        </div>
                        <h2 className='text-lg text-[#A57BD8] group-hover:text-[#2E2F30] transition-all duration-300 font-normal'>Our customers love to work with us</h2>
                    </div>
                    </div>
                </div>
            </div>
            <div className='absolute -bottom-32 right-0 cursor-pointer z-40'>
                <HireMe />
            </div>
        </section>
    );
};

export default HeroSection;
