import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import DestinationsSection from "../components/home/DestinationsSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
