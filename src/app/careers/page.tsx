// src/app/careers/page.tsx
import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle'

export default function Careers() {
  return (
    <main className="relative pt-32">
      {/* Page Hero */}
      <div
        className="relative min-h-[40vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/bg/capabilities-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Careers</h1>
        </div>
      </div>

      {/* Careers Section */}
      <section className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-6">

          <SectionTitle>Join the PSI Molded Plastics Team</SectionTitle>

          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-xl md:text-2xl leading-relaxed font-medium">
              Many of our team members have been with PSI for over a decade—a testament to the supportive environment, strong benefits, and opportunities for cross-training and growth. If you&apos;re looking for a workplace where people build lasting careers, <strong>PSI is the place to start.</strong>
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-3">Competitive Benefits</h3>
              <ul className="text-lg space-y-2 text-center mx-auto max-w-xs">
                <li>Competitive pay + incentives</li>
                <li>Paid vacation + 10 holidays</li>
                <li>401(k) with company match</li>
                <li>Insurance after 30 days</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-3">Growth & Development</h3>
              <ul className="text-lg space-y-2 text-center mx-auto max-w-xs">
                <li>Formal training programs</li>
                <li>Lean manufacturing workshops</li>
                <li>Cross-functional team projects</li>
                <li>Career advancement support</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-3">A Culture of Innovation</h3>
              <ul className="text-lg space-y-2 text-center mx-auto max-w-xs">
                <li>Supportive environment</li>
                <li>Recognition & reward programs</li>
                <li>Hands-on learning</li>
                <li>Continuous improvement mindset</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl">
            <h3 className="text-4xl font-bold text-white mb-6">
              We&apos;re Hiring Now
            </h3>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Explore current openings in <strong>New Hampshire, Indiana, and South Carolina</strong> and take the next step toward a rewarding career.
            </p>
            <Link
              href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=69d724e3-c814-4edf-8537-76bfc7d8e37d&ccId=19000101_000001&type=JS&lang=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-12 py-5 rounded-xl text-xl font-bold transition transform hover:scale-105 shadow-xl"
            >
              View Current Job Openings
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}