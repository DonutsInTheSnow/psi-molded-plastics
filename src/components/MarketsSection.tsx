// src/components/MarketsSection.tsx
"use client";

import SectionTitle from "./SectionTitle";
import {
  QueueListIcon,
  TruckIcon,
  FunnelIcon,
  HeartIcon,
  Cog8ToothIcon,
  BugAntIcon,
  PresentationChartBarIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const markets = [
  { id: 1, title: "Appliances",       icon: QueueListIcon,       desc: "Full automation for efficiency" },
  { id: 2, title: "Automotive",       icon: TruckIcon,          desc: "IATF 16949:2016 registered facilities" },
  { id: 3, title: "Filtration",       icon: FunnelIcon,      desc: "Tight tolerances for intricate geometries" },
  { id: 4, title: "Healthcare",       icon: HeartIcon,           desc: "Controlled processes for patient safety" },
  { id: 5, title: "Industrial",       icon: Cog8ToothIcon,      desc: "Multi-material capabilities" },
  { id: 6, title: "Lawn & Garden",    icon: BugAntIcon,  desc: "Precision fit to reduce wear and failure" },
  { id: 7, title: "Material Handling",icon: PresentationChartBarIcon,           desc: "Shot sizes up to 31 lbs" },
  { id: 8, title: "Sports & Leisure", icon: SunIcon,                 desc: "Durable finishes for consumer use" },
];

export default function MarketsSection() {
  const scrollToTab = (id: number) => {
    document.getElementById(`markets-tab-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="markets" className="py-24 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">

          <SectionTitle>Markets</SectionTitle>

          <p className="text-lg max-w-3xl mx-auto">
            Some of the markets we serve. (On mobile, tap a tab then scroll down for details.)
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Tabs */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              {markets.map((market) => (
                <button
                  key={market.id}
                  onClick={() => scrollToTab(market.id)}
                  className="text-left p-5 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition">
                    {/* <i className={`bi ${market.icon} text-2xl text-blue-600 group-hover:text-white`}></i> */}
                    <market.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{market.title}</h4>
                    <p className="text-sm text-gray-600">{market.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content placeholder */}
          <div className="lg:col-span-8">
            <div id="markets-tab-1" className="bg-gray-50 rounded-2xl p-10">
              <h3 className="text-3xl font-bold mb-6">Appliances</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                PSI delivers precision-molded components that enhance both performance and design in modern appliances...
              </p>
            </div>
            {/* Add more tabs later */}
          </div>
        </div>
      </div>
    </section>
  );
}