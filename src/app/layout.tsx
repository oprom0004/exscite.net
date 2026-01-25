import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://exscite.net'),
  title: {
    default: 'High Voltage Variable DC Power Supply: 600V-1000V Digital Systems | HighVolt.SYS',
    template: '%s | HighVolt.SYS'
  },
  description: 'Authoritative guide to programmable high voltage DC power supplies (600V-1000V). Digital control, safety protocols, and industrial applications for ATE systems, capacitor charging, and PV testing.',
  keywords: [
    'high voltage DC power supply',
    'programmable DC supply',
    'variable DC power supply',
    '600V power supply',
    '800V power supply',
    '1000V power supply',
    'digital high voltage control',
    'ATE power supply',
    'capacitor charging',
    'high voltage safety',
    'industrial power supply',
    'programmable high voltage',
    'DC power system',
  ],
  authors: [{ name: 'HighVolt.SYS' }],
  creator: 'HighVolt.SYS',
  publisher: 'HighVolt.SYS',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://exscite.net',
    title: 'High Voltage Variable DC Power Supply: The 2026 Industrial Guide',
    description: 'Operating above 600V introduces engineering challenges that do not exist in low-voltage circuits. Digital control for 600V, 800V, and 1000V+ programmable DC power systems.',
    siteName: 'HighVolt.SYS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High Voltage Variable DC Power Supply: The 2026 Industrial Guide',
    description: 'Digital control for 600V-1000V programmable DC power systems. Safety protocols and industrial applications.',
  },
  alternates: {
    canonical: 'https://exscite.net',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/logo.svg',
    shortcut: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-hv-black text-gray-300 font-sans selection:bg-hv-yellow selection:text-black`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
