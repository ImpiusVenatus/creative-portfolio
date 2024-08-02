"use client"

import AboutUsSection from "@/components/AboutUs";
import HeroSection from "@/components/Hero";
import { Logo } from "@/components/Logos";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Services";
import InfiniteText from "@/components/infiniteText/page";

export default function MainPage() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <InfiniteText 
        text="Data driven user focused value based"
        textColor="text-[#2ca8fe]" 
      />
      <ServicesSection />
      <AboutUsSection />
      <Logo />
    </main>
  );
}
