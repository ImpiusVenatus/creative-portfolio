import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Awsmd ability to create a high-quality user interface stands out. It’s something we placed a premium on.",
    author: "Eric Duffy",
    title: "Founder & CEO, Visia",
    image: "/logo.png",
  },
  {
    text: "Awsmd transformed our digital presence and increased our customer engagement significantly.",
    author: "Jane Doe",
    title: "Marketing Head, TechCorp",
    image: "/logo.png",
  },
  // Add more testimonials as needed
];

const Testimonial: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='flex justify-center px-16'>
        <div className='w-1/5 py-16'>
            <h2 className="text-xl font-normal text-[#999999] mb-8">
            05 — What Our Clients Say
            </h2>
            <p className="text-xl font-light text-[#999999] mb-12 max-w-[90%]">
            We supply clients across the entire globe with improved network connections.
            </p>
        </div>
        <div className='w-3/20 text-[12rem]'>
            <span>"</span>
        </div>
        <div className="max-w-4xl flex-grow py-16 px-4">
            <AnimatePresence mode='wait'>
                <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                >
                <p className="text-5xl font-bold mb-8">{testimonials[current].text}</p>
                <div className="flex items-center mb-8">
                    <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    width={50}
                    height={50}
                    className="rounded-full"
                    />
                    <div className="ml-4 text-left">
                    <p className="text-lg font-semibold">{testimonials[current].author}</p>
                    <p className="text-md text-gray-500">{testimonials[current].title}</p>
                    </div>
                </div>
                </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-end space-x-4">
                <button onClick={handlePrev} className="focus:outline-none text-[#999999]">
                <ChevronLeft size={32} />
                </button>
                <button onClick={handleNext} className="focus:outline-none text-[#999999]">
                <ChevronRight size={32} />
                </button>
            </div>
        </div>
    </div>
  );
};

export default Testimonial;
