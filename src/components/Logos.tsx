"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Logo() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        logos={logos}
        direction="left"
        speed="fast"
      />
    </div>
  );
}

const logos = [
    { src: '/next.svg', alt: 'Logo 1' },
    { src: '/vercel.svg', alt: 'Logo 2' },
    { src: '/next.svg', alt: 'Logo 3' },
    { src: '/next.svg', alt: 'Logo 1' },
    { src: '/vercel.svg', alt: 'Logo 2' },
    { src: '/next.svg', alt: 'Logo 3' },
    { src: '/next.svg', alt: 'Logo 1' },
    { src: '/vercel.svg', alt: 'Logo 2' },
    { src: '/next.svg', alt: 'Logo 3' },
  ];