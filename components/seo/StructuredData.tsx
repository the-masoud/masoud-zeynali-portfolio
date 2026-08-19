import React from "react";
import { structuredDataGraph } from "./structuredDataData";

export const StructuredData: React.FC = () => {
  const jsonLdSerialized = JSON.stringify(structuredDataGraph).replace(
    /</g,
    "\\u003c"
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdSerialized }}
    />
  );
};
