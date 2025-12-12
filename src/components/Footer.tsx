// src/components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 relative py-12">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center mb-4">
            <span className="text-white text-2xl font-bold">PSI Molded Plastics</span>
          </Link>
          <p className="text-gray-400">Follow us to learn the latest.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://x.com/PsiMolded" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100079530142886" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl">
              <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center mt-8">
        <p className="text-gray-500 text-sm">© <span>2025</span> <strong className="px-1 text-white">PSI Molded Plastics.</strong> <span>All Rights Reserved Worldwide.</span></p>
      </div>
    </footer>
  )
}