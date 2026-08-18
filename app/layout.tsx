import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Masoud Zeynali — IT Infrastructure · Security · AI Automation",
  description:
    "Personal technology platform of Masoud Zeynali. Nearly two decades of enterprise IT infrastructure, systems administration, and network security leadership, combined with modern AI automation and Model Context Protocol (MCP) workflows.",
  keywords: [
    "Masoud Zeynali",
    "IT Infrastructure",
    "Network Security",
    "Systems Engineering",
    "AI Automation",
    "Model Context Protocol",
    "MCP",
    "Enterprise Systems",
    "Cloudflare",
    "Docker",
    "Linux Administration",
    "Windows Server",
  ],
  authors: [{ name: "Masoud Zeynali" }],
  creator: "Masoud Zeynali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://masoudzeynali.com",
    title: "Masoud Zeynali — IT Infrastructure · Security · AI Automation",
    description:
      "Enterprise IT infrastructure, security-conscious systems engineering, and modern AI automation workflows.",
    siteName: "Masoud Zeynali — Technology Platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masoud Zeynali — IT Infrastructure · Security · AI Automation",
    description:
      "Enterprise IT infrastructure, security-conscious systems engineering, and modern AI automation workflows.",
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
