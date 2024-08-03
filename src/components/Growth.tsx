import Image from 'next/image';
import React from 'react';

const Growth: React.FC = () => {
  return (
    <div className="py-8 flex justify-center text-center">
       <h2 className='text-[#2B2D40] text-7xl font-semibold'>Numbers don&apos;t lie <br/> 
            so we use Data 
            <span className='inline-block'>
                <Image 
                    src="/growth/texture01.jpg"
                    alt='Texture'
                    width={100}
                    height={100}
                    className='w-[10rem] rounded-full'
                />
            </span>
            <br/>
            <span className='inline-block'>
                <Image 
                    src="/growth/texture02.jpg"
                    alt='Texture'
                    width={100}
                    height={100}
                    className='w-[10rem] rounded-full'
                />
            </span>
            Science to drive <br/>
            <span className='text-[#6e8d9a]'>calculated growth</span>
       </h2>
    </div>
  );
};

export default Growth;
