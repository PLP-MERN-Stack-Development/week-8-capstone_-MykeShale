import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "WellCareCircle - Community Health Access Platform",
  description:
    "Connecting patients, doctors, and clinics in underserved communities through innovative digital health solutions. Supporting SDG 3 - Good Health and Well-being.",
  keywords: ["healthcare", "telemedicine", "community health", "SDG 3", "digital health", "medical platform"],
  authors: [{ name: "WellCareCircle Team" }],
  creator: "WellCareCircle",
  publisher: "WellCareCircle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://wellcarecircle.com"),
  openGraph: {
    title: "WellCareCircle - Community Health Access Platform",
    description: "Connecting communities to quality healthcare through innovative digital solutions",
    url: "https://wellcarecircle.com",
    siteName: "WellCareCircle",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WellCareCircle - Community Health Access Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WellCareCircle - Community Health Access Platform",
    description: "Connecting communities to quality healthcare through innovative digital solutions",
    images: ["/og-image.jpg"],
    creator: "@wellcarecircle",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#059669" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="WellCareCircle" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#059669" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <div id="root">{children}</div>
        <div id="modal-root" />
        <div id="toast-root" />
      </body>
    </html>
  )
}
