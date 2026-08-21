import type { Metadata, Viewport } from "next";
import { StructuredData } from "@/components/seo/StructuredData";
import { enDictionary } from "@/lib/i18n/locales/en";
import "../globals.css";

export const viewport: Viewport = {
  themeColor: "#080a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: enDictionary.metadata.title,
  description: enDictionary.metadata.description,
  authors: [{ name: "Masoud Zeynali" }],
  creator: "Masoud Zeynali",
  openGraph: {
    type: "website",
    locale: enDictionary.metadata.ogLocale,
    title: enDictionary.metadata.ogTitle,
    description: enDictionary.metadata.ogDescription,
    siteName: enDictionary.metadata.siteName,
  },
  twitter: {
    card: "summary",
    title: enDictionary.metadata.title,
    description: enDictionary.metadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="dark scroll-smooth">
      <head>
        <StructuredData presentation={enDictionary.schema} />
      </head>
      <body className="bg-canvas-950 text-fg-primary antialiased selection:bg-accent-cyan/30 selection:text-white min-h-screen flex flex-col justify-between relative bg-grid-pattern bg-radial-glow">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent-cyan text-canvas-950 font-mono text-sm font-semibold rounded shadow-xl"
        >
          {enDictionary.metadata.skipLinkText}
        </a>
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
