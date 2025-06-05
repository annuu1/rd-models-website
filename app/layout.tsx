import type React from "react"
import "@/app/globals.css"
import localFont from 'next/font/local'
const grenda = localFont({
  src: '../public/fonts/Grenda.otf',
  variable: '--font-grenda', // Optional for CSS variables
  display: 'swap',
})

import { Forum, Jost, Outfit, Amiri } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import FloatingContactButtons from "./FloatingContactButtons"

const forum = Forum({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-forum",
})

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jost",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
})

const amiri = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-amiri",
})

export const metadata: Metadata = {
  title: "RD Models - 3D Architectural Models & Visualization Services in Jaipur, India",
  description:
    "Leading 3D architectural modeling company in Jaipur, India. We create detailed building models, interior visualizations, and architectural renderings for architects, developers, and construction companies across India.",
  keywords: [
    "3D architectural models",
    "architectural visualization",
    "building models Jaipur",
    "3D modeling services India",
    "architectural rendering",
    "interior visualization",
    "construction visualization",
    "architectural model makers",
    "3D building design",
    "architectural services Jaipur",
    "Rajasthan architecture",
    "India 3D modeling",
  ],
  authors: [{ name: "RD Models" }],
  creator: "RD Models",
  publisher: "RD Models",
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
    type: "website",
    locale: "en_IN",
    url: "https://rdmodels.com",
    siteName: "RD Models",
    title: "RD Models - 3D Architectural Models & Visualization Services in Jaipur, India",
    description:
      "Leading 3D architectural modeling company in Jaipur, India. We create detailed building models, interior visualizations, and architectural renderings for architects, developers, and construction companies across India.",
    images: [
      {
        url: "https://rdmodels.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RD Models - 3D Architectural Visualization Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RD Models - 3D Architectural Models & Visualization Services in Jaipur, India",
    description:
      "Leading 3D architectural modeling company in Jaipur, India. We create detailed building models, interior visualizations, and architectural renderings for architects, developers, and construction companies across India.",
    images: ["https://rdmodels.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://rdmodels.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${forum.variable} ${jost.variable} ${outfit.variable} ${amiri.variable} ${grenda.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jaipur" />
        <meta name="geo.position" content="26.9124;75.7873" />
        <meta name="ICBM" content="26.9124, 75.7873" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RD Models",
              url: "https://rdmodels.com",
              logo: "https://rdmodels.com/logo.png",
              description: "Leading 3D architectural modeling company in Jaipur, India",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Modeling Street",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                postalCode: "302001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-141-123-4567",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.facebook.com/rdmodels",
                "https://www.instagram.com/rdmodels",
                "https://www.linkedin.com/company/rdmodels",
              ],
              foundingDate: "2010",
              foundingLocation: {
                "@type": "Place",
                name: "Jaipur, Rajasthan, India",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              serviceType: [
                "3D Architectural Modeling",
                "Architectural Visualization",
                "Interior Visualization",
                "Construction Visualization",
                "Building Models",
              ],
            }),
          }}
        />
      </head>
      <body className="font-barlow">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
          <FloatingContactButtons />
        </ThemeProvider>
      </body>
    </html>
  )
}
