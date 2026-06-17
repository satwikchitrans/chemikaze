import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CHEMIKAZE — We Build Systems That Move Businesses Forward",
  description:
    "CHEMIKAZE is a digital systems studio. We build high-performance websites, WhatsApp automation systems, and agentic AI solutions that help businesses scale faster, automate workflows, and grow consistently.",
  keywords: [
    "website development",
    "WhatsApp automation",
    "agentic AI",
    "business automation",
    "digital agency India",
    "conversion-focused websites",
    "AI agents for business",
    "lead generation automation",
    "CHEMIKAZE",
    "growth partner",
    "SEO-ready websites",
    "mobile-first web design",
  ],
  authors: [{ name: "CHEMIKAZE", url: "https://chemikaze.com" }],
  creator: "CHEMIKAZE",
  publisher: "CHEMIKAZE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CHEMIKAZE — We Build Systems That Move Businesses Forward",
    description:
      "High-performance websites, WhatsApp automation, and AI agents that help businesses scale faster and grow consistently.",
    type: "website",
    locale: "en_IN",
    siteName: "CHEMIKAZE",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHEMIKAZE — We Build Systems That Move Businesses Forward",
    description:
      "High-performance websites, WhatsApp automation, and AI agents that help businesses scale faster.",
    creator: "@chemikaze",
  },
  alternates: {
    canonical: "https://chemikaze.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrumentSerif.variable} h-full`}
    >
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CHEMIKAZE",
              description:
                "Digital systems studio building websites, automations, and AI solutions for business growth.",
              url: "https://chemikaze.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8580364890",
                contactType: "sales",
                email: "2500520510058@ietlucknow.ac.in",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [],
            }),
          }}
        />
        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Digital Agency Services",
              provider: {
                "@type": "Organization",
                name: "CHEMIKAZE",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Core Systems",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Development",
                      description:
                        "High-performance, conversion-focused websites with modern UI/UX and SEO-ready architecture.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "WhatsApp Automation",
                      description:
                        "Intelligent chat systems that qualify leads, nurture customers, and close deals 24/7.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Agentic AI Solutions",
                      description:
                        "AI agents that perform tasks, automate workflows, and drive consistent business growth.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full bg-ivory text-charcoal font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
