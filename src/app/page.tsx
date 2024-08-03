"use client"

import AboutUsSection from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import { Logo } from "@/components/Logos";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/Portfolio";
import ProjectsSection from "@/components/Projects";
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
      <ProjectsSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
