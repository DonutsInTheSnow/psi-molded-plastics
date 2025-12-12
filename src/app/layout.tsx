// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});   

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PSI Molded Plastics",
  description: "Precision injection molding solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative overflow-x-hidden`}>
        {/* Global Fixed Video Background */}
        <div className="fixed inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/assets/img/bg/bg-1.webp"
          >
            <source src="/assets/img/bg/bg-video-v2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark Gradient Overlay */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/80 via-black/60 to-black/40 pointer-events-none" />

        <Header />

        {/* Page Content */}
        <div className="flex-1 relative z-0">
          {children}
        </div>

        <Footer />
        
      </body>
    </html>
  );
}