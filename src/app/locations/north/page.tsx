// src/app/locations/north/page.tsx
import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

export default function PSINorth() {
  return (
    <main className="relative pt-32">
      {/* Page Hero */}
      <div
        className="relative min-h-[40vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/bg/psi-north.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">PSI North - South Bend, IN</h1>
        </div>
      </div>

      {/* About PSI North */}
      <section className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-6">

          <SectionTitle>About PSI North</SectionTitle>

          <div className="max-w-5xl mx-auto text-center space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed">
              Since 1991, PSI North in South Bend, Indiana has been a trusted single-source partner for precision plastic injection molding. With 120+ employees, 90,000 sq. ft. of manufacturing space, and decades of combined expertise, we deliver consistent quality and on-time performance at competitive cost.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed">
              Our cross-functional management teams bring over 200 years of molding and production experience, ensuring that every project—from concept to full-scale production—runs with precision and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center my-20">
            <div className="text-center">
              <Image
                src="/assets/img/locations/north-2.webp"
                alt="PSI North Facility Interior"
                width={800}
                height={600}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="border-r-4 border-[#a3abbd] pr-8">
              <p className="text-2xl font-bold mb-6">Comprehensive Capabilities</p>
              <ul className="space-y-4 text-lg font-semibold">
                <li>• Product design and rapid prototyping</li>
                <li>• Complex injection molds, gauges, and fixtures</li>
                <li>• Secondary processing: sonic and heat welding, collar insertion, pad and hot stamp decorating, packaging, and kitting</li>
                <li>• In-house paint line and custom color matching</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center my-20">
            <p className="text-2xl font-bold mb-6">Quality Without Compromise</p>
            <p className="text-xl font-semibold leading-relaxed">
              We maintain rigorous quality standards backed by <strong>ISO/TS 16949:2009</strong> registration. Our Quality Assurance lab employs CMM, optical gauging, and spectrum analysis, providing full QA services including Level Three PPAP. Continuous improvement practices like 5S ensure lean operations and predictable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center my-20">
            <div className="border-l-4 border-[#a3abbd] pl-8">
              <p className="text-2xl font-bold mb-6">Efficiency at Scale</p>
              <p className="text-xl font-semibold leading-relaxed">
                Our custom Conair raw material delivery system enables press changeovers in under a minute—boosting efficiency, minimizing downtime, and ensuring the right materials are always in the right place at the right time.
              </p>
            </div>
            <Image
              src="/assets/img/locations/north-1.webp"
              alt="PSI North Production Floor"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div className="max-w-5xl mx-auto text-center pt-12 border-t-4 border-[#a3abbd]">
            <p className="text-xl md:text-2xl font-medium">
              From automotive to healthcare, appliances to industrial products, PSI North is committed to helping industry leaders achieve reliable, scalable, and cost-effective molding solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}