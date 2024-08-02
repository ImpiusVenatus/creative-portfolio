import React from 'react';

const SlidingTextBar: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap text-[#2ca8fe] text-[10rem] font-semibold">
      <div className="flex w-[200%] animate-slide">
        <div className="flex-shrink-0">
          <span className="mx-4">Data driven user focused value based</span>
          <span className="mx-4">Data driven user focused value based</span>
        </div>
        <div className="flex-shrink-0">
          <span className="mx-4">Data driven user focused value based</span>
          <span className="mx-4">Data driven user focused value based</span>
        </div>
      </div>
    </div>
  );
};

export default SlidingTextBar;
