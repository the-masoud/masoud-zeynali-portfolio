import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ProfessionalStory } from "@/components/about/ProfessionalStory";
import { CareerJourney } from "@/components/experience/CareerJourney";
import { ExpertiseLandscape } from "@/components/expertise/ExpertiseLandscape";
import { InfraForgeCaseStudy } from "@/components/work/InfraForgeCaseStudy";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-accent-cyan/20">
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Hero />
        <ProfessionalStory />
        <CareerJourney />
        <ExpertiseLandscape />
        <InfraForgeCaseStudy />
      </main>
      <Footer />
    </div>
  );
}
