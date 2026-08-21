import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { ProfessionalStory } from "@/components/about/ProfessionalStory";
import { CareerJourney } from "@/components/experience/CareerJourney";
import { ExpertiseLandscape } from "@/components/expertise/ExpertiseLandscape";
import { InfraForgeCaseStudy } from "@/components/work/InfraForgeCaseStudy";
import { OperationalReasoningLab } from "@/components/lab/OperationalReasoningLab";
import { ProfessionalRecord } from "@/components/contact/ProfessionalRecord";
import { Footer } from "@/components/layout/Footer";
import { enDictionary } from "@/lib/i18n/locales/en";

export default function EnglishHomePage() {
  const dict = enDictionary;

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-accent-cyan/20">
      <Navbar data={dict.navbar} />
      <main id="main-content" className="flex-grow">
        <Hero data={dict.hero} locale="en" />
        <ProfessionalStory data={dict.story} locale="en" />
        <CareerJourney data={dict.career} locale="en" />
        <ExpertiseLandscape data={dict.expertise} />
        <InfraForgeCaseStudy data={dict.infraForge} />
        <OperationalReasoningLab data={dict.lab} />
        <ProfessionalRecord data={dict.professionalRecord} />
      </main>
      <Footer data={dict.footer} />
    </div>
  );
}
