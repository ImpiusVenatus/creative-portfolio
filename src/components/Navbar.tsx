"use client"

import Image from 'next/image';
import { useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import MenuComponent from './Menu';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const useHoverEffect = () => {
    const controls = useAnimation();

    const handleMouseEnter = () => {
      controls.start({ y: '-100%' });
    };

    const handleMouseLeave = () => {
      controls.start({ y: '0%' });
    };

    return { controls, handleMouseEnter, handleMouseLeave };
  };

  const aboutEffect = useHoverEffect();
  const casesEffect = useHoverEffect();
  const reviewsEffect = useHoverEffect();
  const contactEffect = useHoverEffect();
  const buttonEffect = useHoverEffect();

  if (menuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <nav className="fixed top-8 w-full z-[60] bg-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image src="/logo.png" alt="Logo" width={100} height={100} />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline bg-white rounded-full px-8 py-4 space-x-4">
                <button
                  className="relative block text-[#2e2f30] px-3 py-2 rounded-md text-md font-semibold"
                  onMouseEnter={aboutEffect.handleMouseEnter}
                  onMouseLeave={aboutEffect.handleMouseLeave}
                >
                  <span className="h-[1em] overflow-hidden flex flex-col">
                    <motion.span
                      className="w-full h-full flex items-center justify-center"
                      initial={{ y: 0 }}
                      animate={aboutEffect.controls}
                      transition={{ duration: 0.3 }}
                    >
                      About Us
                    </motion.span>
                    <motion.span
                      className="w-full h-full flex items-center justify-center"
                      initial={{ y: '100%' }}
                      animate={aboutEffect.controls}
                      transition={{ duration: 0.3 }}
                    >
                      About Us
                    </motion.span>
                  </span>
                </button>
                <button
                  className="relative block text-[#2e2f30] px-3 py-2 rounded-md text-md font-semibold"
                  onMouseEnter={casesEffect.handleMouseEnter}
                  onMouseLeave={casesEffect.handleMouseLeave}
                >
                  <span className="h-[1em] overflow-hidden flex flex-col">
                    <motion.span
                      className="w-full h-full flex items-center justify-center"
                      initial={{ y: 0 }}
                      animate={casesEffect.controls}
                      transition={{ duration: 0.3 }}
                    >
                      Cases
                    </motion.span>
                    <motion.span
                      className="w-full h-full flex items-center justify-center"
                      initial={{ y: '100%' }}
                      animate={casesEffect.controls}
                      transition={{ duration: 0.3 }}
                    >
                      Cases
                    </motion.span>
                  </span>
                </button>
                <button
                  className="relative block text-[#2e2f30] px-3 py-2 rounded-md text-md font-semibold"
                  onMouseEnter={reviewsEffect.handleMouseEnter}
                  onMouseLeave={reviewsEffect.handleMouseLeave}
                >
                  <span className="h-[1em] overflow-hidden flex flex-col">
                    <motion.span
                      className="w-full h-full flex items-center justify-center"
                      initial={{ y: 0 }}
                      animate={reviewsEffect.controls}
                      transition={{ duration: 0.3 }}
                    >
                      Reviews
                    </motion.span>
                    <motion.span
                      className="w-full h-full flex items-center justify-center"
                      initial={{ y: '100%' }}
                      animate={reviewsEffect.controls}
                      transition={{ duration: 0.3 }}
                    >
                      Reviews
                    </motion.span>
                  </span>
                </button>
                <button
                  className="relative block text-[#2e2f30] px-3 py-2 rounded-md text-md font-semibold"
                  onMouseEnter={contactEffect.handleMouseEnter}
                  onMouseLeave={contactEffect.handleMouseLeave}
                >
                  <span className="h-[1em] overflow-hidden flex flex-col">
                    <motion.span
                      className="w-full h-full flex items-center justify-center"
                      initial={{ y: 0 }}
                      animate={contactEffect.controls}
                      transition={{ duration: 0.3 }}
                    >
                      Contact Us
                    </motion.span>
                    <motion.span
                      className="w-full h-full flex items-center justify-center"
                      initial={{ y: '100%' }}
                      animate={contactEffect.controls}
                      transition={{ duration: 0.3 }}
                    >
                      Contact Us
                    </motion.span>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className="md:block relative block text-[#2e2f30] px-3 py-2 rounded-md font-semibold"
                onMouseEnter={buttonEffect.handleMouseEnter}
                onMouseLeave={buttonEffect.handleMouseLeave}
              >
                <motion.button
                  className="relative overflow-hidden bg-white text-[#2e2f30] px-3 py-4 rounded-full text-md font-semibold"
                  initial={{ backgroundColor: '#ffffff' }}
                  onHoverStart={() => {
                    setIsHovered(true);
                    controls.start({ scaleX: 1 });
                  }}
                  onHoverEnd={() => {
                    setIsHovered(false);
                    controls.start({ scaleX: 0 });
                  }}
                >
                  <motion.span
                    className="absolute inset-0 bg-[#4541f1] rounded-full"
                    style={{ transformOrigin: 'left' }}
                    initial={{ scaleX: 0 }}
                    animate={controls}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                  <span
                    className={`flex flex-col h-[1em] overflow-hidden relative z-10 ${isHovered ? 'text-white' : 'text-[#2e2f30]'}`}
                  >
                    <motion.span
                      className="w-full h-full flex items-center justify-center"
                      initial={{ y: 0 }}
                      animate={buttonEffect.controls}
                      transition={{ duration: 0.3 }}
                    >
                      Become a Client
                    </motion.span>
                    <motion.span
                      className="w-full h-full flex items-center justify-center"
                      initial={{ y: '100%' }}
                      animate={buttonEffect.controls}
                      transition={{ duration: 0.3 }}
                    >
                      Become a Client
                    </motion.span>
                  </span>
                </motion.button>
              </div>
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full p-2 cursor-pointer">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                >
                  <Menu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && <MenuComponent closeMenu={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
