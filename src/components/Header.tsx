// src/components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);   // ← new

  const isActive = (path: string) => {
    return pathname === path ? "text-[#015a9c] font-bold" : "hover:text-[#015a9c]";
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-3 text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <div className="flex items-center gap-8">
            <a href="tel:6035695100" className="flex items-center gap-2 hover:text-blue-400 transition">
              <PhoneIcon className="w-4 h-4" />
              <span className="text-xs sm:text-sm">603.569.5100</span>
            </a>
            <a href="mailto:info@psimp.com" className="flex items-center gap-2 hover:text-blue-400 transition">
              <EnvelopeIcon className="w-4 h-4" />
              <span className="text-xs sm:text-sm">info@psimp.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="https://x.com/PsiMolded" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition text-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100079530142886" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition text-lg">
            <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
            </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/img/PSI-logo-400.webp"
              alt="PSI Molded Plastics"
              width={220}
              height={80}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-gray-700 font-medium">
            <li>
              <Link href="/" className={`${isActive("/")} transition relative after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-blue-600 after:w-0 hover:after:w-full after:transition-all`}>
                Home
              </Link>
            </li>

            <li className="group relative">
              <Link href="#" className="flex items-center gap-1 hover:text-blue-600 transition">
                About <i className="bi bi-chevron-down text-xs ml-1"></i>
              </Link>
              <ul className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <li><Link href="/#about" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">About Us</Link></li>
                <li><Link href="/more-about#engineering" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">Engineering</Link></li>
                <li><Link href="/more-about#quality" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">Quality</Link></li>
              </ul>
            </li>

            <li className="group relative">
              <Link href="/capabilities" className={`${isActive("/capabilities")} flex items-center gap-1 transition`}>
                Capabilities <i className="bi bi-chevron-down text-xs ml-1"></i>
              </Link>
              <ul className="absolute left-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <li><Link href="/capabilities#capabilities-overview" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">Overview</Link></li>
                <li><Link href="/capabilities#small-part-injection-molding" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">Small Part Injection Molding</Link></li>
                <li><Link href="/capabilities#large-part-injection-molding" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">Large Part Injection Molding</Link></li>
                <li><Link href="/capabilities#structural-foam-injection-molding" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">Structural Foam</Link></li>
                <li><Link href="/capabilities#gas-assist-injection-molding" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">Gas Assist</Link></li>
                <li><Link href="/capabilities#secondary-processes" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">Secondary Processes</Link></li>
              </ul>
            </li>

            <li className="group relative">
              <Link href="#" className="flex items-center gap-1 hover:text-blue-600 transition">
                More <i className="bi bi-chevron-down text-xs ml-1"></i>
              </Link>
              <ul className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <li>
                  <Link href="/psi-blog" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">
                    PSI Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/#markets" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">
                    Markets
                  </Link>
                </li>
                <li>
                  <Link href="/white-papers" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">
                    White Papers
                  </Link>
                </li>
              </ul>
            </li>

            <li className="group relative">
              <Link href="#" className="flex items-center gap-1 hover:text-blue-600 transition">
                Contact <i className="bi bi-chevron-down text-xs ml-1"></i>
              </Link>
              <ul className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <li><Link href="/#contact" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">Contact Us</Link></li>
                <li className="group/sub relative">
                  <Link href="#" className="flex justify-between items-center px-6 py-4 hover:bg-gray-50 text-gray-700">
                    Locations <i className="bi bi-chevron-right text-xs"></i>
                  </Link>
                  <ul className="absolute right-full top-0 w-64 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 border border-gray-100">
                    <li><Link href="/locations/north" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">PSI North - Indiana</Link></li>
                    <li><Link href="/locations/east" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">PSI East - New Hampshire</Link></li>
                    <li><Link href="/locations/south" className="block px-6 py-4 hover:bg-gray-50 text-gray-700">PSI South - South Carolina</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/request-a-quote" className="bg-[#015a9c] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                Request a Quote
              </Link>
            </li>
          </ul>


          {/* Mobile Toggle */}
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-50 flex flex-col justify-center items-center w-10 h-10 space-y-1.5 hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-7 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </nav>

      {/* Mobile Menu Backdrop + Panel */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity lg:hidden z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed inset-y-0 right-0 top-32 w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-10 px-8 pb-8 h-full overflow-y-auto">
          <ul className="space-y-6 text-gray-700 font-semibold text-lg">
            <li><Link href="/" onClick={() => setIsOpen(false)} className={`block py-2 ${isActive("/")}`}>Home</Link></li>

            <li>
              <details className="group">
                <summary className="flex justify-between items-center py-2 cursor-pointer list-none">About <span className="ml-3 transition-transform duration-200 group-open:rotate-180">
                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <ul className="pl-6 mt-2 space-y-3">
                  <li><Link href="/#about" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">About Us</Link></li>
                  <li><Link href="/more-about#engineering" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">Engineering</Link></li>
                  <li><Link href="/more-about#quality" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">Quality</Link></li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group">
                <summary className="flex justify-between items-center py-2 cursor-pointer list-none">Capabilities <span className="ml-3 transition-transform duration-200 group-open:rotate-180">
                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <ul className="pl-6 mt-2 space-y-3">
                  <li><Link href="/capabilities#capabilities-overview" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">Overview</Link></li>
                  <li><Link href="/capabilities#small-part-injection-molding" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">Small Part Injection Molding</Link></li>
                  <li><Link href="/capabilities#large-part-injection-molding" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">Large Part Injection Molding</Link></li>
                  <li><Link href="/capabilities#structural-foam-injection-molding" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">Structural Foam</Link></li>
                  <li><Link href="/capabilities#gas-assist-injection-molding" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">Gas Assist</Link></li>
                  <li><Link href="/capabilities#secondary-processes" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">Secondary Processes</Link></li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group">
                <summary className="flex justify-between items-center py-2 cursor-pointer list-none">More <span className="ml-3 transition-transform duration-200 group-open:rotate-180">
                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <ul className="pl-6 mt-2 space-y-3">
                  <li><Link href="/psi-blog" onClick={() => setIsOpen(false)} className={`block py-1 ${isActive("/blog")}`}>PSI Blog</Link></li>
                  <li><Link href="/careers" onClick={() => setIsOpen(false)} className={`block py-1 ${isActive("/careers")}`}>Careers</Link></li>
                  <li><Link href="/#markets" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">Markets</Link></li>
                  <li><Link href="/white-papers" onClick={() => setIsOpen(false)} className={`block py-1 ${isActive("/resources")}`}>White Papers</Link></li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group">
                <summary className="flex justify-between items-center py-2 cursor-pointer list-none">Contact <span className="ml-3 transition-transform duration-200 group-open:rotate-180">
                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <ul className="pl-6 mt-2 space-y-3">
                  <li><Link href="/#contact" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">Contact Us</Link></li>
                  <li>
                    <details className="group">
                      <summary className="flex justify-between items-center py-1 cursor-pointer list-none">Locations <span className="ml-3 transition-transform duration-200">
                          <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <ul className="pl-6 mt-2 space-y-2">
                        <li><Link href="/locations/north" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">PSI North - Indiana</Link></li>
                        <li><Link href="/locations/east" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">PSI East - New Hampshire</Link></li>
                        <li><Link href="/locations/south" onClick={() => setIsOpen(false)} className="block py-1 hover:text-[#015a9c]">PSI South - South Carolina</Link></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>

            <li className="pt-6">
              <Link
                href="/request-a-quote"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#015a9c] text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </header>
  );
}