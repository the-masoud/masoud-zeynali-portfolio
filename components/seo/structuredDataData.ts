export interface SchemaPostalAddress {
  "@type": "PostalAddress";
  addressLocality: string;
  addressCountry: string;
}

export interface SchemaOrganization {
  "@type": "Organization";
  name: string;
}

export interface SchemaCredential {
  "@type": "EducationalOccupationalCredential";
  name: string;
  credentialCategory: string;
  recognizedBy: SchemaOrganization;
  description: string;
}

export interface SchemaPerson {
  "@type": "Person";
  "@id": string;
  name: string;
  jobTitle: string;
  address: SchemaPostalAddress;
  sameAs: string[];
  knowsAbout: string[];
  hasCredential: SchemaCredential[];
}

export interface SchemaSoftwareSourceCode {
  "@type": "SoftwareSourceCode";
  "@id": string;
  name: string;
  description: string;
  codeRepository: string;
  programmingLanguage: string;
  author: {
    "@id": string;
  };
}

export interface SchemaGraphRoot {
  "@context": "https://schema.org";
  "@graph": [SchemaPerson, SchemaSoftwareSourceCode];
}

export const structuredDataGraph: SchemaGraphRoot = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "#person",
      name: "Masoud Zeynali",
      jobTitle: "IT Manager | Network Infrastructure & Security Specialist",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tehran",
        addressCountry: "Iran",
      },
      sameAs: ["https://github.com/the-masoud"],
      knowsAbout: [
        "Artificial Intelligence Engineering",
        "AI Agents",
        "Model Context Protocol (MCP)",
        "Infrastructure Automation",
        "AI-assisted Infrastructure Operations",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "MCSE: Server Infrastructure",
          credentialCategory: "Certification",
          recognizedBy: {
            "@type": "Organization",
            name: "Microsoft",
          },
          description: "Microsoft Certified Solutions Expert — 2012",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "MCSE: Cloud Platform and Infrastructure",
          credentialCategory: "Certification",
          recognizedBy: {
            "@type": "Organization",
            name: "Microsoft",
          },
          description: "Microsoft Certified Solutions Expert — 2016",
        },
      ],
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": "#infraforge",
      name: "InfraForge",
      description:
        "Personal engineering project exploring controlled AI-assisted infrastructure operations via Model Context Protocol.",
      codeRepository: "https://github.com/the-masoud/InfraForge",
      programmingLanguage: "Go",
      author: {
        "@id": "#person",
      },
    },
  ],
};
