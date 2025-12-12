// src/app/page.tsx
import Image from 'next/image'
import MarketsSection from '@/components/MarketsSection'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import { TrophyIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>

      <Hero />

      {/* About */}
      <section id="about" className="py-24 bg-gray-50 text-gray-800 sm:px-10">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">About PSI Molded Plastics</h2>
            <p className="mt-6 text-2xl max-w-4xl mx-auto border-l-4 border-[#a3abbd] pl-6">
              With facilities in Indiana, New Hampshire, and South Carolina, PSI Molded Plastics is a trusted partner for complex, high-quality injection molded solutions—from small precision parts to large, high-aesthetic components.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-2xl font-bold mb-6">Our full range of capabilities includes:</p>
              <ul className="space-y-4 text-xl mb-8">
                <li>• Standard injection molding</li>
                <li>• Structural foam and gas assist molding</li>
                <li>• Gas counter pressure molding</li>
                <li>• Custom finishing, painting, and EMI shielding</li>
                <li>• Assembly, graphics, and integrated secondary services</li>
              </ul>
              <p className="text-xl mb-6">For over three decades, leading companies in automotive, healthcare, appliances, filtration, material handling, sports & leisure, industrial, and lawn & garden have relied on PSI for more than just molded parts.</p>
              <p className="text-xl mb-8 font-bold">Contact us at <a href="mailto:info@psimp.com" className="text-blue-600 underline">info@psimp.com</a> to discuss your next program.</p>

              <div className="grid grid-cols-3 gap-8 text-center border-y-2 border-gray-200 py-8">
                <div><div className="text-4xl font-bold text-blue-600">200+</div><div className="text-gray-600">Years Experience</div></div>
                <div><div className="text-4xl font-bold text-blue-600">450+</div><div className="text-gray-600">Employees</div></div>
                <div><div className="text-4xl font-bold text-blue-600">350K+</div><div className="text-gray-600">Sq.ft. of space</div></div>
              </div>
            </div>
            <div className="relative">
              <Image src="/assets/img/about/about.webp" alt="About PSI" width={800} height={600} className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-6 rounded-lg shadow-xl text-center">
                <TrophyIcon className="size-6 mb-2 mx-auto" />
                <p className="font-bold">Excellence in Quality Award</p>
                <p className="text-sm">GI Plastek Wolfeboro, 2016</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="mx-12">
              <Image src={`/assets/img/clients/clients-${((i % 3) + 1)}.webp`} alt="" width={400} height={150} className="opacity-70 hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </section>

      <MarketsSection />

      <section id="contact" className="py-24 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact</h2> */}
            <SectionTitle>Contact</SectionTitle>
            <p className="text-lg text-gray-600">
              Call us, email us, complete the form and/or submit our Request A Quote form. We look forward to talking with you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1DeNdOCuJg-BiTkIKwuU7EfYQA7uNT40&ehbc=2E312F"
                width="100%"
                height="500"
                className="rounded-2xl shadow-xl border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Info + Form */}
            <div className="order-1 lg:order-2 space-y-12">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPinIcon className="size-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-3">Locations</h4>
                  <p className="text-sm text-gray-600">
                    <strong>PSI North</strong> — IN<br/>
                    <strong>PSI East</strong> — NH<br/>
                    <strong>PSI South</strong> — SC
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <EnvelopeIcon className="size-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-3">Email</h4>
                  <a href="mailto:info@psimp.com" className="text-blue-600 hover:underline">info@psimp.com</a>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PhoneIcon className="size-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-3">Call</h4>
                  <a href="tel:6035695100" className="text-blue-600 hover:underline">603.569.5100</a>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6 text-gray-600">
                  <input type="text" placeholder="Your Name" className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                  <input type="email" placeholder="Your Email" className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                </div>
                <input type="text" placeholder="Subject" className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                <textarea rows={6} placeholder="Message" className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required></textarea>
                <button type="submit" className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition font-medium">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}