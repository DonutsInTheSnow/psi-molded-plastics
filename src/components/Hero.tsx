// src/components/Hero.tsx
"use client";

import Link from "next/link";
import { PlayCircleIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-40 pb-32 md:pb-40 sm:mx-10">
      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-white">
            <span className="inline-block bg-blue-600/90 backdrop-blur-sm border border-blue-400/30 text-white px-6 py-3 mt-4 rounded-full text-sm font-bold tracking-wider mb-8">
              PLASTIC INJECTION MOLDING
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Your Trusted Partner in Precision Molding
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl text-gray-100">
              From small components to large structural parts, PSI Molded Plastics delivers precision, consistency, and proven expertise in injection molding, structural foam, and gas assist technologies.
            </p>
            <a
              href="https://youtu.be/tj65wL0x8xs"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-md hover:bg-white/30 px-10 py-5 rounded-xl text-lg font-semibold transition-all hover:translate-x-2"
            >
              <PlayCircleIcon className="size-8 text-[#74fac8]" />
              <span className="text-[#74fac8]">Watch Overview: Autodesk Moldflow</span>
            </a>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <Link href="/reshoring">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 text-center shadow-2xl hover:-translate-y-2 transition-all">
                <GlobeAmericasIcon className="mx-auto size-12 text-[#74fac8] mb-3" />
                <p className="text-2xl font-bold text-[#74fac8]">Consider Reshoring</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}