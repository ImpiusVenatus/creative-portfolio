import { motion } from 'framer-motion';

type MenuComponentProps = {
  closeMenu: () => void;
};

const MenuComponent: React.FC<MenuComponentProps> = ({ closeMenu }) => {
  const slideDown = {
    hidden: { y: '-100%' },
    visible: { y: 0, transition: { duration: 1 } },
    exit: { y: '-100%', transition: { duration: 1 } },
  };

  const slideUp = {
    hidden: { y: '100%' },
    visible: { y: 0, transition: { duration: 1 } },
    exit: { y: '100%', transition: { duration: 1 } },
  };

  return (
    <div className="fixed z-50 right-0 left-0 top-0 bottom-0">
      <div className="flex h-screen">
        <motion.div
          className="w-1/4 bg-[#2722DF] p-8"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideDown}
        >
        </motion.div>
        <motion.div
          className="w-3/4 bg-[#4541F1] p-8 flex justify-between items-end"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideUp}
        >
          <div className="mb-4">
            <h2 className="text-white text-sm mb-2">Navigation</h2>
            <ul className="text-6xl text-white space-y-12">
              <li className='cursor-pointer'>Home <span className="text-xs">01</span></li>
              <li className='cursor-pointer'>Our Services <span className="text-xs">02</span></li>
              <li className='cursor-pointer'>About Us <span className="text-xs">03</span></li>
              <li className='cursor-pointer'>Portfolio <span className="text-xs">04</span></li>
              <li className='cursor-pointer'>Reviews <span className="text-xs">05</span></li>
              <li className='cursor-pointer'>Contact Us <span className="text-xs">06</span></li>
            </ul>
          </div>
          <div className="text-white text-right">
            <p className="text-sm">WhatsApp</p>
            <p className="text-sm">Telegram</p>
            <a href="mailto:info@hunky.com" className="text-sm underline">info@hunky.com</a>
            <p className="text-sm">Privacy Policy & Cookies</p>
            <p className="text-sm">&copy; Hunky {new Date().getFullYear()}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuComponent;
