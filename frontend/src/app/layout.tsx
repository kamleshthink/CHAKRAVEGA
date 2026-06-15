import type { Metadata } from "next";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chakravega Technologies Pvt. Ltd. | Engineering Intelligence for a Safer and Smarter Future",
  description:
    "Chakravega Technologies develops advanced AI systems, industrial intelligence platforms, digital infrastructure solutions, and future autonomous technologies designed to solve high-impact real-world challenges.",
  keywords: [
    "AI systems",
    "industrial intelligence",
    "deep tech India",
    "coal mine safety",
    "JhariaWatch",
    "PragyaTek",
    "autonomous systems",
    "robotics",
    "digital infrastructure",
    "Jharkhand",
  ],
  metadataBase: new URL("https://chakravegatechnologies.com"),
  authors: [{ name: "Chakravega Technologies Private Limited" }],
  creator: "Chakravega Technologies Private Limited",
  applicationName: "Chakravega Technologies",
  icons: {
    icon: "/images/chakravega_logo.png",
    shortcut: "/images/chakravega_logo.png",
    apple: "/images/chakravega_logo.png",
  },
  alternates: {
    canonical: "https://chakravegatechnologies.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://chakravegatechnologies.com",
    title: "Chakravega Technologies | Engineering Intelligence",
    description:
      "Advanced AI, industrial intelligence, and autonomous systems from India.",
    siteName: "Chakravega Technologies",
    images: ["/images/chakravega_logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chakravega Technologies | Engineering Intelligence",
    description: "Advanced AI and industrial intelligence from India.",
    images: ["/images/chakravega_logo.png"],
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
