import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import CtaBar from "@/components/CtaBar";
import { site } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Smeatonian BC | Real Estate, Consultancy & Construction",
    template: "%s | Smeatonian BC",
  },
  description: site.description,
  keywords: [
    "construction company Lagos",
    "building construction Nigeria",
    "civil and structural engineering",
    "real estate development Lagos",
    "construction consultancy",
    "building maintenance Lagos",
    "Smeatonian BC",
  ],
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.domain,
    siteName: site.fullName,
    title: "Smeatonian BC | Real Estate, Consultancy & Construction",
    description: site.description,
    images: [{ url: "/images/project-complex-1.jpg", width: 1600, height: 1200, alt: site.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smeatonian BC | Real Estate, Consultancy & Construction",
    description: site.description,
    images: ["/images/project-complex-1.jpg"],
  },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }] },
  manifest: "/site.webmanifest",
  category: "Construction Company",
};

export const viewport: Viewport = {
  themeColor: "#071a2c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${site.domain}/#business`,
  name: site.fullName,
  alternateName: "Smeatonian BC",
  description: site.description,
  image: `${site.domain}/images/project-complex-1.jpg`,
  logo: `${site.domain}/images/logo.png`,
  url: site.domain,
  telephone: `+${site.phones[0].href}`,
  email: site.email,
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Eti-Osa I Local Government Area, Victoria Island",
    addressLocality: "Lagos",
    postalCode: "106104",
    addressCountry: "NG",
  },
  sameAs: [site.x, site.instagram],
  makesOffer: [
    "Property Development",
    "Building Construction",
    "Detailed Construction Finishes",
    "Building Maintenance",
    "Construction Materials",
    "Mechanical & Electrical (M&E) Services",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <CtaBar />
      </body>
    </html>
  );
}
