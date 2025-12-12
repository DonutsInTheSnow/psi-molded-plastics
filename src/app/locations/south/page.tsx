// src/app/locations/south/page.tsx
import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

export default function PSISouth() {
  return (
    <main className="relative pt-32">
      {/* Page Hero */}
      <div
        className="relative min-h-[40vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/bg/psi-south.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">PSI South - South Carolina</h1>
        </div>
      </div>

      {/* About PSI South */}
      <section className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-6">
 
          <SectionTitle>About PSI South</SectionTitle>

          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-xl md:text-2xl leading-relaxed">
              PSI South, originally founded in 1985 as Precision Southeast, has grown into a trusted leader in custom injection molding. With three state-of-the-art facilities across South Carolina, we operate over 140,000 square feet of manufacturing, assembly, and storage space, powered by a dedicated team of 200 employees. Our operations are <strong>ISO/TS 16949:2009 certified</strong>, underscoring our commitment to quality and consistency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center my-20">
            <div className="text-center">
              <Image
                src="/assets/img/locations/south-1.webp"
                alt="PSI South Facility"
                width={800}
                height={600}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="border-r-4 border-[#a3abbd] pr-8">
              <p className="text-xl font-semibold leading-relaxed">
                Our Myrtle Beach headquarters spans 45,000 square feet and houses presses from 22 to 250 tons, ideal for low- to high-volume molding. Just up the road, our Marion facility offers another 45,000 square feet with presses ranging from 180 to 1,500 tons, specializing in medium-volume molding. Together, these sites provide unmatched flexibility, scalability, and technical expertise.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center my-20">
            <div className="border-l-4 border-[#a3abbd] pl-8">
              <p className="text-xl font-semibold leading-relaxed">
                With the addition of a 50,000-square-foot distribution and storage center in 2015, PSI South also offers streamlined logistics. Located close to interstates, airports, and ports, we ensure faster turnaround times and cost-efficient shipping for clients across the U.S. and beyond.
              </p>
            </div>
            <Image
              src="/assets/img/locations/south-2.webp"
              alt="PSI South Distribution Center"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div className="max-w-5xl mx-auto text-center pt-12 border-t-4 border-[#a3abbd]">
            <p className="text-xl md:text-2xl font-medium">
              At PSI South, you&apos;ll find the capacity, experience, and dedication to bring complex ideas into production-ready solutions—efficiently, reliably, and at scale.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}