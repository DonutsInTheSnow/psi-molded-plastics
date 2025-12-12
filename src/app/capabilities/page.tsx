// src/app/capabilities/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle'

export default function Capabilities() {
  return (
    <main className="relative pt-32 text-gray-800">
      {/* Page Hero */}
      <div
        className="relative min-h-[40vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/bg/capabilities-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Capabilities</h1>
        </div>
      </div>

      {/* Capabilities Overview */}
      <section id="capabilities-overview" className="py-24 bg-gray-50 text-gray-800 sm:px-10">

        {/* <SectionTitle>Capabilities</SectionTitle> */}

        <div className="container px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold">OVERVIEW</span>
            <h3 className="text-4xl font-bold mt-4 mb-6">Comprehensive Capabilities. Proven Results.</h3>
            <p className="text-xl mb-8">At PSI Molded Plastics, we deliver end-to-end injection molding solutions—from small precision parts to large, complex components—supported by capabilities rarely found under one roof. With more than 100 presses ranging from 22 to 1,574 tons (soon expanding to 2,100 tons) and shot sizes up to 31 lbs., we offer unmatched versatility in custom injection molding, including standard injection, gas assist, structural foam, insert molding, and over-molding. Beyond molding, our in-house finishing services—painting, EMI/RFI shielding, decorating, assembly, laser etching, custom packaging, pad printing, and hot stamping—provide the convenience of a true single-source partner for high-quality, production-ready parts.</p>
            <Link href="/request-a-quote" className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-medium">
              Request a Quote <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="relative">
            <Image src="/assets/img/molding_robot.webp" alt="Molding Robot" width={800} height={600} className="rounded-lg shadow-2xl" />
            <figcaption className="text-center mt-4 text-gray-600">Molding robot.</figcaption>
          </div>
        </div>
      </section>

      {/* Small Part Injection Molding */}
      <section id="small-part-injection-molding" className="py-24 bg-white">
        <div className="container mx-auto px-6">

          <SectionTitle>Small Part Injection Molding</SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="border-l-4 border-[#a3abbd] pl-8">
              <p className="text-2xl leading-relaxed">
                PSI Molded Plastics brings precision and efficiency to small and medium part applications with more than 75 presses ranging from 22 to 450 tons. Whether you need intricate geometries, tight tolerances, or high-volume production, our molding expertise ensures consistent, cost-effective results.
              </p>
            </div>
            <Image src="/assets/img/capabilities/small-blacks.webp" alt="Small Black Parts" width={800} height={600} className="rounded-xl shadow-2xl" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image src="/assets/img/capabilities/small-reds.webp" alt="Small Red Parts" width={800} height={600} className="rounded-xl shadow-2xl" />
            <div className="border-r-4 border-[#a3abbd] pr-8">
              <p className="text-2xl font-bold mb-6">Why choose PSI for small parts?</p>
              <ul className="space-y-3 text-xl">
                <li>• Ability to produce complex, highly detailed shapes with precision</li>
                <li>• Compatible with a wide range of thermoplastic materials</li>
                <li>• Scalable automation for high production output at lower labor costs</li>
                <li>• Multi-cavity molds enable many parts in a single cycle</li>
                <li>• Consistent repeatability and tight tolerances for quality assurance</li>
                <li>• Minimal finishing required and virtually zero material waste</li>
              </ul>
              <p className="mt-6 text-xl font-semibold">
                From medical devices to automotive components, our small-part molding capabilities help clients achieve reliable, high-quality production at competitive cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Part Injection Molding */}
      <section id="large-part-injection-molding" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">

          <SectionTitle>Large Part Injection Molding</SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="border-l-4 border-[#a3abbd] pl-8">
              <p className="text-2xl leading-relaxed">
                PSI Molded Plastics delivers unmatched large-part molding capabilities in the Northeast, with 26 presses ranging from 450 to 1,574 tons—soon expanding to 2,100 tons. Our advanced equipment supports shot sizes up to 31 lbs, giving customers the flexibility to produce larger, more durable components at scale.
              </p>
            </div>
            <Image src="/assets/img/capabilities/large-red.webp" alt="Large Red Part" width={450} height={600} className="rounded-xl shadow-2xl" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image src="/assets/img/capabilities/large-white.webp" alt="Large White Part" width={450} height={600} className="rounded-xl shadow-2xl" />
            <div className="border-r-4 border-[#a3abbd] pr-8">
              <p className="text-2xl font-bold mb-6">What sets PSI apart?</p>
              <ul className="space-y-3 text-xl">
                <li>• Specialized expertise in injection, structural foam, and gas-assist molding</li>
                <li>• Robotics and custom end-of-arm tooling ensure consistent quality and competitive cycle times</li>
                <li>• Comprehensive finishing services—including painting, decorating, EMI/RFI shielding, and assembly—streamline your supply chain</li>
                <li>• Capacity to handle large, complex parts with efficiency and reliability</li>
              </ul>
              <p className="mt-6 text-xl font-semibold">
                From automotive and industrial applications to consumer products, our large-part molding solutions combine scale, precision, and speed to meet demanding production requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Foam */}
      <section id="structural-foam-injection-molding" className="py-24 bg-white">
        <div className="container mx-auto px-6">

          <SectionTitle>Structural Foam Injection Molding</SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="border-l-4 border-[#a3abbd] pl-8">
              <p className="text-2xl leading-relaxed">
                PSI Molded Plastics specializes in structural foam molding, a process that combines a solid exterior skin with a lightweight foam core. By introducing a blowing agent and adjusting process parameters, we create strong, dimensionally stable parts with reduced weight—ideal for large, complex applications where strength and cost efficiency are critical.
              </p>
            </div>
            <Image src="/assets/img/capabilities/structural-foam-1.webp" alt="Structural Foam 1" width={600} height={450} className="rounded-xl shadow-2xl" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <Image src="/assets/img/capabilities/structural-foam-2.webp" alt="Structural Foam 2" width={600} height={450} className="rounded-xl shadow-2xl" />
            <div className="border-r-4 border-[#a3abbd] pr-8">
              <p className="text-2xl font-bold mb-6">Why Structural Foam?</p>
              <p className="font-bold mb-3">Design advantages:</p>
              <ul className="space-y-2 text-xl mb-6">
                <li>• Up to 15% lighter than solid injection parts</li>
                <li>• Lower injection pressure supports larger part sizes and thicker walls (up to 0.500”)</li>
                <li>• Reduced sink marks and tooling costs</li>
              </ul>
              <p className="font-bold mb-3">Performance benefits:</p>
              <ul className="space-y-2 text-xl">
                <li>• Higher stiffness-to-weight ratio</li>
                <li>• Reduced part stress for improved durability</li>
                <li>• Enhanced thermal, acoustic, and electrical insulation properties</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border-l-4 border-[#a3abbd] pl-8">
              <p className="text-xl font-semibold mb-4">Material Flexibility</p>
              <p className="text-xl mb-6">Structural foam molding supports a wide range of thermoplastics, including: Polycarbonate, PPO (Noryl), PBT (Valox), ABS, and more.</p>
              <p className="text-xl font-semibold mb-4">Design Considerations</p>
              <ul className="space-y-2 text-xl mb-6">
                <li>• Allows thick ribs and bosses without warpage</li>
                <li>• Supports brass inserts for threaded applications</li>
                <li>• Produces a solid, durable look and feel with less weight</li>
                <li>• Typically finished with paint for enhanced appearance</li>
                <li>• Slightly slower cycle times compared to standard injection molding</li>
              </ul>
              <p className="text-xl font-semibold mb-4">Gas Counter Pressure Option</p>
              <p className="text-xl pb-3">For premium finishes, PSI offers gas counter pressure molding—pressurizing the mold prior to injection to achieve:</p>
              <ul className="space-y-2 text-xl">
                <li>• Smooth, high-gloss surfaces</li>
                <li>• In-mold textures without painting</li>
                <li>• Extremely flat, dimensionally stable parts</li>
              </ul>
            </div>
            <Image src="/assets/img/capabilities/structural-foam-3.webp" alt="Structural Foam 3" width={450} height={600} className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Gas Assist */}
      <section id="gas-assist-injection-molding" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle>Gas Assist Injection Molding</SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="border-l-4 border-[#a3abbd] pl-8">
              <p className="text-2xl leading-relaxed">
                PSI Molded Plastics offers gas assist injection molding, a process that injects nitrogen into the melt stream to create hollow channels within the part. This results in stronger, lighter, and more efficient components that maintain the appearance and finish of traditional injection molding.
              </p>
            </div>
            <Image src="/assets/img/capabilities/gas-assist-1.webp" alt="Gas Assist 1" width={650} height={400} className="rounded-xl shadow-2xl" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <Image src="/assets/img/capabilities/gas-assist-2.webp" alt="Gas Assist 2" width={450} height={600} className="rounded-xl shadow-2xl" />
            <div className="border-r-4 border-[#a3abbd] pr-8">
              <p className="text-2xl font-bold mb-6">Why Gas Assist?</p>
              <ul className="space-y-4 text-xl">
                <li><strong>Strength & Rigidity:</strong> Tubular structures within the geometry increase durability without added material.</li>
                <li><strong>Weight Reduction:</strong> Thick sections can be hollowed out, significantly reducing part weight.</li>
                <li><strong>Design Flexibility:</strong> Enables larger, thicker sections while minimizing warpage.</li>
                <li><strong>Superior Surface Finish:</strong> Produces smooth, high-quality surfaces comparable to standard injection molding.</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="border-l-4 border-[#a3abbd] pl-8">
              <p className="text-xl font-semibold mb-4">Material Versatility</p>
              <p className="text-xl font-semibold mb-4">Compatible with most thermoplastics, including: Polycarbonate, PPO (Noryl), PBT (Valox), ABS, HIPS, Polypropylene, and HDPE.</p>
              <ul className="list-disc pl-6 space-y-2 text-xl">
                <li>Thermoplastics are recyclable and RoHS compliant, ensuring sustainable and globally accepted solutions.</li>
              </ul>
            </div>
            <Image src="/assets/img/capabilities/gas-assist-3.webp" alt="Gas Assist 3" width={600} height={450} className="rounded-xl shadow-2xl" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image src="/assets/img/capabilities/gas-assist-4a.webp" alt="Gas Assist 4" width={600} height={450} className="rounded-xl shadow-2xl" />
            <div className="border-r-4 border-[#a3abbd] pr-8">
              <p className="text-xl font-semibold mb-4">Design Considerations</p>
              <ul className="space-y-2 text-xl">
                <li>• Careful placement of gas entry and exit points is critical for optimal flow and hollowing.</li>
                <li>• Best suited for geometries designed with smooth flow paths and minimal sharp corners.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Processes */}
      <section id="secondary-processes" className="py-24 bg-white">
        <div className="container mx-auto px-6">

          <SectionTitle>Secondary Processes</SectionTitle>

          {/* <div className="mb-16">
            <Image src="/assets/img/capabilities/secondary-processes-1.webp" alt="Secondary Processes 1" width={1200} height={734} className="w-full rounded-2xl shadow-2xl" />
          </div> */}

          <div className="mb-16">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/img/capabilities/secondary-processes-1.webp" 
                className="w-full h-auto"
              >
                <source src="/assets/img/capabilities/paint-line.mp4" type="video/mp4" />
                <Image
                  src="/assets/img/capabilities/secondary-processes-1.webp"
                  alt="Secondary Processes 1"
                  width={1200}
                  height={734}
                  className="w-full"
                />
              </video>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="border-l-4 border-[#a3abbd] pl-8">
              <p className="text-xl font-semibold leading-relaxed mb-8">
                PSI Molded Plastics goes beyond molding to deliver complete, value-added manufacturing solutions under one roof. Our comprehensive secondary services help streamline supply chains, reduce costs, and ensure products are market-ready.
              </p>
              <p className="text-2xl font-bold mb-4">Assembly & Sub-Assembly</p>
              <ul className="space-y-3 text-xl">
                <li>• Full turnkey capabilities—from individual component sub-assemblies to complete product builds</li>
                <li>• Precision processes that reduce lead time and simplify logistics</li>
              </ul>
            </div>
            <Image src="/assets/img/capabilities/secondary-processes-2.webp" alt="Secondary Processes 2" width={450} height={450} className="rounded-xl shadow-2xl" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <Image src="/assets/img/capabilities/secondary-processes-3.webp" alt="Secondary Processes 3" width={600} height={450} className="rounded-xl shadow-2xl" />
            <div className="border-r-4 border-[#a3abbd] pr-8">
              <p className="text-2xl font-bold mb-6">EMI/RFI Shielding</p>
              <ul className="space-y-3 text-xl">
                <li>• UL-recognized spray-on coatings for effective electromagnetic and radio frequency interference protection</li>
                <li>• Lighter, more efficient alternative to bulky sheet metal liners and enclosures</li>
                <li>• Helps lower part count and overall production costs</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="border-l-4 border-[#a3abbd] pl-8">
              <p className="text-2xl font-semibold mb-6">Finishing & Post-Molding Services</p>
              <ul className="space-y-3 text-xl">
                <li>• In-house paint facilities, including textured and soft-touch finishes</li>
                <li>• Multiple decorating options: hot stamping, decals, screen printing, pad printing, laser etching</li>
                <li>• Welding solutions: adhesive, heat, solvent, spin, and ultrasonic</li>
                <li>• Additional services: heat staking, custom packaging, bar coding</li>
              </ul>
            </div>
            <Image src="/assets/img/capabilities/secondary-processes-4.webp" alt="Secondary Processes 4" width={450} height={450} className="rounded-xl shadow-2xl" />
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl">
              By offering secondary processes alongside advanced molding, PSI Molded Plastics saves clients time, resources, and complexity—providing a truly integrated manufacturing experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}