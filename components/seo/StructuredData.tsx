import React from "react";
import { SchemaGraphRoot } from "./structuredDataData";
import { SHARED_FACTS } from "@/lib/i18n/constants";
import { StructuredDataPresentation } from "@/lib/i18n/types";

interface StructuredDataProps {
  presentation: StructuredDataPresentation;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ presentation }) => {
  const graph: SchemaGraphRoot = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "#person",
        name: SHARED_FACTS.person.canonicalName,
        jobTitle: presentation.personJobTitle,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tehran",
          addressCountry: "Iran",
        },
        sameAs: [SHARED_FACTS.person.githubUrl],
        knowsAbout: presentation.knowsAbout,
        hasCredential: SHARED_FACTS.certifications.map((cert) => ({
          "@type": "EducationalOccupationalCredential",
          name: cert.name,
          credentialCategory: "Certification",
          recognizedBy: {
            "@type": "Organization",
            name: cert.issuer,
          },
          description:
            presentation.credentialDescriptions[cert.id] ||
            `${cert.qualification} — ${cert.year}`,
        })),
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "#infraforge",
        name: SHARED_FACTS.projects.infraForge.name,
        description: presentation.infraForgeDescription,
        codeRepository: SHARED_FACTS.projects.infraForge.repositoryUrl,
        programmingLanguage: SHARED_FACTS.projects.infraForge.programmingLanguage,
        author: {
          "@id": "#person",
        },
      },
    ],
  };

  const jsonLdSerialized = JSON.stringify(graph).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdSerialized }}
    />
  );
};
