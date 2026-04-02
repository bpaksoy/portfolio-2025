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
  metadataBase: new URL("https://banupaksoy.com"),
  title: "Banu Paksoy | Full-Stack Developer Portfolio",
  description: "Full-Stack Architect specializing in Next.js, NestJS, and Google Cloud. Building scalable applications with AI integration.",
  openGraph: {
    title: "Banu Paksoy | Full-Stack Developer Portfolio",
    description: "Full-Stack Architect specializing in Next.js, NestJS, and Google Cloud. Building scalable applications with AI integration.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Banu Paksoy - Full-Stack Developer & Cloud Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banu Paksoy | Full-Stack Developer Portfolio",
    description: "Full-Stack Architect specializing in Next.js, NestJS, and Google Cloud. Building scalable applications with AI integration.",
    images: ["/og-image.png"],
  },
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
