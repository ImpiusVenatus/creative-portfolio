"use client"

import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Services";
import SlidingTextBar from "@/components/SlidingTextBar";

export default function MainPage() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <SlidingTextBar />
      <ServicesSection />
    </main>
  );
}
