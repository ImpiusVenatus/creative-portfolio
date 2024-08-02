import Image from 'next/image';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Menu } from 'lucide-react';

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

  return (
    <nav className="fixed top-8 w-full z-40 bg-transparent">
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
        <div className='flex items-center gap-4'>
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
            <button onClick={() => setMenuOpen(!menuOpen)} className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                <Menu />
              ) : (
                <Menu />
              )}
            </button>
          </div>
        </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="text-black bg-white block px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <a href="#cases" className="text-black bg-white block px-3 py-2 rounded-md text-base font-medium">Cases</a>
            <a href="#reviews" className="text-black bg-white block px-3 py-2 rounded-md text-base font-medium">Reviews</a>
            <a href="#contact" className="text-black bg-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
            <button className="w-full bg-black text-white block px-3 py-2 rounded-md text-base font-medium">+ Become a Client</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
