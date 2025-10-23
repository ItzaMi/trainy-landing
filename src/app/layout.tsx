import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trainy - AI Train Identification App",
  description: "Spot, snap, and identify any train in seconds with Trainy. Your pocket-sized rail companion for recognizing locomotives from around the world. Download Trainy for iOS.",
  keywords: "train identifier, train ID, train spotting, locomotive identification, railway app, railfan, train spotter, AI identification, trains",
  authors: [{ name: "Trainy Team" }],
  openGraph: {
    title: "Trainy - AI Train Identification App",
    description: "Spot, snap, and identify any train in seconds with Trainy. Your pocket-sized rail companion for recognizing locomotives from around the world.",
    type: "website",
    locale: "en_US",
    siteName: "Trainy",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Trainy - AI Train Identification App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trainy - AI Train Identification App",
    description: "Spot, snap, and identify any train in seconds with Trainy. Your pocket-sized rail companion for recognizing locomotives from around the world.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
