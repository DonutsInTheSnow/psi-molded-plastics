// src/app/reshoring/page.tsx
import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

export default function Reshoring() {
  return (
    <main className="relative pt-32">
        <div
            id="page-title"
            className="relative min-h-[40vh] flex items-center justify-center overflow-hidden text-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/img/bg/reshoring-bg.webp')" }}
        >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container relative z-10 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-0">Reshoring</h1>
        </div>
        </div>

        <section id="reshoring" className="py-24 bg-white text-gray-800">
            <div className="container mx-auto px-6">

                <SectionTitle>Reshoring Manufacturing with PSI Molded Plastics</SectionTitle>

                <div className="grid gap-12">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl font-bold">What is Reshoring?</p>
                        <p className="text-xl">Reshoring—also known as onshoring—is the return of manufacturing from overseas back to the United States. More companies are bringing production home as the cost advantages of offshoring diminish, while the risks and complexities continue to grow.</p>
                        <p className="text-xl">At PSI Molded Plastics, we help manufacturers seamlessly transition programs back to the U.S., leveraging our experience, advanced facilities, and full-service capabilities to make reshoring both practical and profitable.</p>
                        <Image
                            src="/assets/img/reshoring.webp"
                            alt="Reshoring BG"
                            width={1200}
                            height={600}
                            className="w-full my-6 rounded-2xl shadow-2xl"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="border-2 border-gray-300 p-6 rounded-lg">
                            <p className="text-lg font-bold mb-4">Why Reshoring Matters</p>
                            <p className="text-lg">Global supply chains face rising challenges, and reshoring provides stability, speed, and long-term value. Key drivers include:</p>
                            <ul className="list-disc pl-6 space-y-2 text-lg">
                            <li>Rising overseas labor costs—especially in China, where wages continue to increase.</li>
                            <li>Tariffs and trade barriers—adding unexpected costs to imported products.</li>
                            <li>Disruptions like Kung Flu—exposing vulnerabilities in global logistics.</li>
                            </ul>
                            <p className="text-lg mt-4">By moving production closer to home, companies gain greater control, faster responsiveness, and stronger protection of intellectual property.</p>
                        </div>
                        <div className="border-2 border-gray-300 p-6 rounded-lg">
                            <p className="text-lg font-bold mb-4">Benefits of Reshoring with PSI</p>
                            <ul className="list-disc pl-6 space-y-2 text-lg">
                            <li>Shorter lead times → Reduced inventory and faster response to market shifts</li>
                            <li>Lower total costs → Better control over labor, transportation, duties, and tariffs</li>
                            <li>Improved communication → Same time zones, fewer language barriers, easier site visits</li>
                            <li>Stronger quality oversight → Quick resolution of engineering and production issues</li>
                            <li>IP protection → Reduced risk of design leaks and counterfeit products</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="border-2 border-gray-300 p-6 rounded-lg">
                            <p className="text-lg font-bold mb-4">Key Considerations When Transferring a Program</p>
                            <p className="text-lg">PSI works closely with clients to ensure smooth and successful transitions. Considerations include:</p>
                            <ul className="list-disc pl-6 space-y-2 text-lg">
                            <li>Availability of part drawings, CAD files, and tool designs</li>
                            <li>Fit between the molder&apos;s capabilities and your product requirements</li>
                            <li>Detailed tooling inventory (molds, cooling fixtures, trim/check fixtures, decorating tools)</li>
                            <li>Defined qualification and validation requirements</li>
                            <li>A transfer and qualification schedule, supported by product banks to maintain supply</li>
                            </ul>
                        </div>
                        <div className="border-2 border-gray-300 p-6 rounded-lg">
                            <p className="text-lg font-bold mb-4">Why Partner with PSI?</p>
                            <p className="text-lg">PSI Molded Plastics has decades of experience successfully reshoring programs of all sizes—from low-volume specialty parts to high-volume production.</p>
                            <ul className="list-disc pl-6 space-y-2 text-lg">
                            <li>Press range from 22 to 2100 tons supports small, medium, and large parts</li>
                            <li>Comprehensive post-molding capabilities including finishing, assembly, and packaging</li>
                            <li>Dedicated transfer teams, led by a project manager, ensure every detail is managed—from tooling receipt and inspection to qualification and launch</li>
                            </ul>
                            <p className="text-lg font-bold mt-4">With multiple U.S. facilities and a proven track record, PSI delivers confidence, continuity, and competitiveness when bringing manufacturing back home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}