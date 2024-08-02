import React from 'react';
import ServiceCard from './ServiceCard';
import HoverButton from './HoverButton';

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="mx-auto px-4 md:px-8 lg:px-16">
        <div className='flex items-center justify-between'>
          <div>
            <h2 className="text-xl font-normal text-[#999999] mb-8">
              02 — About Us
            </h2>
            <p className="text-6xl font-normal text-black mb-12 max-w-[90%]">
                We Strive to Innovate
            </p>
          </div>
          <div className='inline-block'>
            <HoverButton />
          </div>
        </div>
        <hr className="h-px my-8 bg-black/20 border-0 dark:bg-gray-700" />
        <div className="">
          <p className='lg:w-[40%] text-2xl text-[#999999]'>
            <span className='text-black'>Solid Strategy </span>
            aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights
          </p>
        </div>
        <div className='flex flex-wrap justify-around gap-8'>
          <div className='w-[60%]'>
            <div className='grid grid-cols-2 gap-4 py-8'>
              <div>
                <h2 className='text-6xl font-bold'>+50</h2>
                <p className='text-xl text-gray-500 max-w-[20rem]'>We have successfully completed a total of 300+ projects</p>
              </div>
              <div>
                <h2 className='text-6xl font-bold'>1k</h2>
                <p className='text-xl text-gray-500 max-w-[20rem]'>We have gathered dozens of reviews from the clients and + 1k reviews from their users</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                  <h2 className='text-6xl font-bold'>+3</h2>
                  <p className='text-xl text-gray-500 max-w-[20rem]'>Years of experience</p>
                </div>
                <div>
                  <h2 className='text-6xl font-bold'>+20</h2>
                  <p className='text-xl text-gray-500 max-w-[20rem]'>Team Members</p>
              </div>
            </div>
          </div>
          <div className='border-2 border-black/25 rounded-3xl'>
              <video
                    className="max-w-[40rem] object-cover rounded-3xl"
                    autoPlay
                    muted
                    loop
                >
                <source src="/herobg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
