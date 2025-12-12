// src/app/locations/east/page.tsx
import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

export default function PSIEast() {
  return (
    <main className="relative pt-32">
      {/* Page Hero */}
      <div
        className="relative min-h-[40vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/bg/psi-east.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">PSI East - Wolfeboro, NH</h1>
        </div>
      </div>

      {/* About PSI East */}
      <section className="py-24 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6">

          <SectionTitle>About PSI East</SectionTitle>

          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xl md:text-2xl leading-relaxed mb-10">
              PSI Wolfeboro operates a wide range of plastic injection molding presses, from 220 to 1,574 tons, supported by in-house expertise in product development, engineering, assembly,10 painting, EMI shielding, applied graphics, and printing. Whether working directly with you or through your design partners, our goal is simple: ensure your product is built smarter, faster, and stronger.
            </p>

            <div className="my-12">
              <Image
                src="/assets/img/locations/east-1.webp"
                alt="PSI East Facility"
                width={1200}
                height={800}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-6 text-xl font-semibold text-left leading-relaxed">
              <p>
                Our core capabilities span standard injection molding, structural foam molding, gas assist and counter pressure molding, finishing, painting, EMI shielding, assembly, and graphics.
              </p>
              <p>
                At PSI East, we deliver more than molded components—we provide a complete manufacturing solution. From product design and rapid prototyping to complex injection molds, gauges, and fixtures, our team offers end-to-end support. Secondary processes such as sonic and heat welding, collar insertion, pad and hot stamp decorating, packaging, and kitting are all handled under one roof.
              </p>
              <p>
                Our custom Conair raw material delivery system enables press changeovers in under a minute—boosting efficiency, minimizing downtime, and ensuring the right materials are always in the right place at the right time.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t-4 border-[#a3abbd]">
              <p className="text-xl md:text-2xl font-medium text-center max-w-4xl mx-auto">
                Specializing in medium-to-large, highly engineered molded products, PSI East stands apart by combining advanced molding expertise with extensive post-molding services rarely found in a single facility. To guarantee consistency and excellence, our operation is <strong>ISO 9001:2015 certified</strong>—ensuring every part meets the highest standards of performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}