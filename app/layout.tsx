import type { Metadata, Viewport } from "next";
import { StructuredData } from "@/components/seo/StructuredData";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Masoud Zeynali — Senior AI Engineer, Infrastructure & Security",
  description:
    "Personal technology portfolio of Masoud Zeynali, a Senior AI Engineer focused on AI Agents, Model Context Protocol (MCP), infrastructure automation, network security, and AI-assisted infrastructure operations.",
  authors: [{ name: "Masoud Zeynali" }],
  creator: "Masoud Zeynali",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Masoud Zeynali — Senior AI Engineer, Infrastructure & Security",
    description:
      "Personal technology portfolio of Masoud Zeynali, a Senior AI Engineer focused on AI Agents, Model Context Protocol (MCP), infrastructure automation, network security, and AI-assisted infrastructure operations.",
    siteName: "Masoud Zeynali",
  },
  twitter: {
    card: "summary",
    title: "Masoud Zeynali — Senior AI Engineer, Infrastructure & Security",
    description:
      "Personal technology portfolio of Masoud Zeynali, a Senior AI Engineer focused on AI Agents, Model Context Protocol (MCP), infrastructure automation, network security, and AI-assisted infrastructure operations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="bg-canvas-950 text-fg-primary antialiased selection:bg-accent-cyan/30 selection:text-white min-h-screen flex flex-col justify-between relative bg-grid-pattern bg-radial-glow">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent-cyan text-canvas-950 font-mono text-sm font-semibold rounded shadow-xl"
        >
          Skip to main content
        </a>
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
