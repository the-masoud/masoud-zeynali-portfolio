import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { StructuredData } from "@/components/seo/StructuredData";
import { faDictionary } from "@/lib/i18n/locales/fa";
import "../globals.css";

const iranSansX = localFont({
  src: [
    {
      path: "../fonts/IRANSansX-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/IRANSansX-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-persian",
});

export const viewport: Viewport = {
  themeColor: "#080a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: faDictionary.metadata.title,
  description: faDictionary.metadata.description,
  authors: [{ name: "Masoud Zeynali" }],
  creator: "Masoud Zeynali",
  openGraph: {
    type: "website",
    locale: faDictionary.metadata.ogLocale,
    title: faDictionary.metadata.ogTitle,
    description: faDictionary.metadata.ogDescription,
    siteName: faDictionary.metadata.siteName,
  },
  twitter: {
    card: "summary",
    title: faDictionary.metadata.title,
    description: faDictionary.metadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PersianLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`dark scroll-smooth ${iranSansX.variable}`}
    >
      <head>
        <StructuredData presentation={faDictionary.schema} />
      </head>
      <body className="bg-canvas-950 text-fg-primary antialiased selection:bg-accent-cyan/30 selection:text-white min-h-screen flex flex-col justify-between relative bg-grid-pattern bg-radial-glow">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 z-50 px-4 py-2 bg-accent-cyan text-canvas-950 font-mono text-sm font-semibold rounded shadow-xl"
        >
          {faDictionary.metadata.skipLinkText}
        </a>
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
