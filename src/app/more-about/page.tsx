// src/app/more-about/page.tsx
import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

export default function MoreAbout() {
  return (
    <main className="relative pt-32">
      {/* Page Hero */}
      <div
        className="relative min-h-[40vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/bg/capabilities-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">More about PSI</h1>
        </div>
      </div>

      {/* Engineering Section */}
      <section id="engineering" className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-6">

          <SectionTitle>Engineering at PSI Molded Plastics</SectionTitle>

          <div className="max-w-5xl mx-auto text-center mb-20">
            <p className="text-2xl font-bold mb-4">Turning Ideas Into Reliable Products</p>
            <p className="text-xl leading-relaxed">
              At PSI Molded Plastics, engineering isn&apos;t just support—it&apos;s partnership. Our experienced team works closely with customers from concept through production, ensuring parts are designed for manufacturability, performance, and cost-efficiency. Early collaboration helps prevent downstream issues, reduce costs, and accelerate time to market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <Image
              src="/assets/img/about/engineering-1.webp"
              alt="Engineering 1"
              width={600}
              height={600}
              className="rounded-xl shadow-2xl"
            />
            <div className="border-r-4 border-[#a3abbd] pr-8">
              <p className="text-2xl font-bold mb-6">Expertise You Can Count On</p>
              <ul className="space-y-4 text-lg">
                <li>• <strong>Materials Knowledge</strong> → From commodity resins to advanced engineering blends, foamed or solid, we match materials to your application.</li>
                <li>• <strong>Tooling Excellence</strong> → With over 200 years of combined tooling experience and a fully equipped tool shop, our engineers ensure molds are built right the first time.</li>
                <li>• <strong>Simulation-Driven Design</strong> → Using Autodesk® Simulation Moldflow®, we model flow, cooling, and filling to predict and solve problems before steel is cut.</li>
                <li>• <strong>Design for Manufacturability (DFM)</strong> → Every mold and part design undergoes review to balance performance, durability, and cost-effectiveness.</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border-l-4 border-[#a3abbd] pl-8">
              <p className="text-2xl font-bold mb-6">A Proven Process for Success</p>
              <ul className="space-y-3 text-lg">
                <li>• Early design review meetings with engineers and toolmakers</li>
                <li>• CAD design with SolidWorks</li>
                <li>• Rapid prototyping and timeline planning</li>
                <li>• Contingency planning for risk reduction</li>
                <li>• Domestic and offshore tooling sources for flexibility</li>
              </ul>
              <p className="text-xl font-bold mt-8">The result: molds that perform, parts that meet spec, and programs that launch smoothly.</p>
            </div>
            <Image
              src="/assets/img/about/engineering-2.webp"
              alt="Engineering 2"
              width={800}
              height={600}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-24 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6">

          <SectionTitle>Quality & Continuous Improvement</SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="border-l-4 border-[#a3abbd] pl-8">
              <p className="text-2xl font-bold mb-4">Building Confidence Through Every Part</p>
              <p className="text-xl leading-relaxed mb-6">
                At PSI Molded Plastics, quality isn&apos;t just measured—it&apos;s engineered into every step of the process. Our facilities meet the highest global standards, giving customers peace of mind that every part delivered will meet or exceed expectations.
              </p>
              <p className="text-xl font-bold mb-4">Certified & Reliable</p>
              <ul className="space-y-3 text-xl">
                <li>• ISO 9001:2015 certified (Wolfeboro, NH)</li>
                <li>• IATF 16949:2016 registered (South Bend, IN; Myrtle Beach, SC; Marion, SC)</li>
                <li>• First article inspections ensure every new product starts right</li>
                <li>• Control plans applied to all programs for repeatability</li>
                <li>• FARO Arm dimensional verification for precise measurement and validation</li>
              </ul>
            </div>
            <Image
              src="/assets/img/about/quality-faro-2.webp"
              alt="Quality Faro"
              width={450}
              height={600}
              className="rounded-xl shadow-2xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <Image
              src="/assets/img/about/quality-faro.webp"
              alt="Quality Faro 2"
              width={600}
              height={600}
              className="rounded-xl shadow-2xl"
            />
            <div className="border-r-4 border-[#a3abbd] pr-8">
              <p className="text-2xl font-bold mb-6">Continuous Improvement Culture</p>
              <p className="text-xl leading-relaxed mb-6">
                Quality at PSI is not static—it&apos;s a continuous journey. Our teams apply Lean Manufacturing principles and advanced tools to improve processes, reduce waste, and optimize results:
              </p>
              <ul className="space-y-3 text-lg">
                <li>• Value stream mapping & Kaizen events</li>
                <li>• 6S workshops & one-piece flow implementation</li>
                <li>• RJG scientific molding for precision and consistency</li>
                <li>• Ongoing safety and ergonomic improvements</li>
              </ul>
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center border-b-4 border-[#a3abbd] pb-12">
            <p className="text-3xl font-bold mb-6">A Commitment to People & Process</p>
            <p className="text-xl font-semibold leading-relaxed mb-6">
              Behind our certifications is a commitment to training and development. From Lean manufacturing principles to lead auditor training, we invest in our teams so customers can trust every part produced.
            </p>
            <p className="text-2xl">
              The result: higher quality, lower risk, and a partner that grows stronger with every program.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}