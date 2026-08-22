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
import { EvidenceLayer } from "@/components/evidence/EvidenceLayer";
import { faDictionary } from "@/lib/i18n/locales/fa";

export default function PersianHomePage() {
  const dict = faDictionary;

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-accent-cyan/20">
      <Navbar data={dict.navbar} />
      <main id="main-content" className="flex-grow">
        <Hero data={dict.hero} locale="fa" />
        <ProfessionalStory data={dict.story} locale="fa" />
        <CareerJourney data={dict.career} locale="fa" />
        <ExpertiseLandscape data={dict.expertise} locale="fa" />
        <InfraForgeCaseStudy data={dict.infraForge} locale="fa" />
        <OperationalReasoningLab data={dict.lab} locale="fa" />
        <ProfessionalRecord data={dict.professionalRecord} locale="fa" />
      </main>
      <Footer data={dict.footer} />
      <EvidenceLayer data={dict.evidence} locale="fa" />
    </div>
  );
}
