import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HoverButtonProps {
  onClick?: () => void;
}

const HoverButton: React.FC<HoverButtonProps> = ({ onClick }) => {
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

  const buttonEffect = useHoverEffect();

  return (
    <div
      className="relative block text-[#2e2f30] px-3 py-2 rounded-md font-semibold"
      onMouseEnter={buttonEffect.handleMouseEnter}
      onMouseLeave={buttonEffect.handleMouseLeave}
    >
      <motion.button
        className="relative overflow-hidden bg-white text-[#2e2f30] px-10 py-4 rounded-full text-md font-semibold"
        initial={{ backgroundColor: '#ffffff' }}
        onHoverStart={() => {
          setIsHovered(true);
          controls.start({ scaleX: 1 });
        }}
        onHoverEnd={() => {
          setIsHovered(false);
          controls.start({ scaleX: 0 });
        }}
        onClick={onClick}
      >
        <motion.span
          className="absolute inset-0 bg-black rounded-full"
          style={{ transformOrigin: 'right' }}
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
            Become a client <ArrowRight />
          </motion.span>
          <motion.span
            className="w-full h-full flex items-center justify-center"
            initial={{ y: '100%' }}
            animate={buttonEffect.controls}
            transition={{ duration: 0.3 }}
          >
            Become a client <ArrowRight />
          </motion.span>
        </span>
      </motion.button>
    </div>
  );
};

export default HoverButton;
