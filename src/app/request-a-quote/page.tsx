// src/app/request-a-quote/page.tsx
"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

export default function RequestAQuote() {
  const [salesContact, setSalesContact] = useState(false);

  return (
    <main className="relative pt-32">
      {/* Page Hero */}
      <div
        className="relative min-h-[40vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/bg/capabilities-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Request a Quote</h1>
        </div>
      </div>

      {/* Quote Request Form */}
      <section className="py-24 bg-gray-50 text-gray-800 font-semibold">
        <div className="container mx-auto px-6">

          <SectionTitle>Quote Request / Send a File / Inquiry</SectionTitle>
          

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200">
              <form
                action="https://formsubmit.co/info@psimp.com"
                method="POST"
                encType="multipart/form-data"
                className="space-y-7"
              >
                {/* Salesperson Contact */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="sales_contact"
                    name="sales_contact"
                    value="Yes"
                    checked={salesContact}
                    onChange={(e) => setSalesContact(e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="sales_contact" className="text-lg cursor-pointer">
                    Have a salesperson contact me immediately.
                  </label>
                </div>

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Company + Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. 555-123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Provide details: description, quantity, material, timetable, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="mt-2 text-sm text-gray-600">
                    Use this area for questions, file submission, or quotation details. For larger files, please call to arrange FTP access.
                  </p>
                </div>

                {/* File Uploads */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="file_1" className="block text-sm font-medium mb-2">
                      Attach File (max 25MB via FormSubmit)
                    </label>
                    <input
                      type="file"
                      id="file_1"
                      name="file_1"
                      accept=".jpg,.jpeg,.png,.gif,.xls,.xlsx,.doc,.docx,.txt,.zip,.rar,.pdf"
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                  </div>
                  <div>
                    <label htmlFor="file_2" className="block text-sm font-medium mb-2">
                      Attach Another File (optional)
                    </label>
                    <input
                      type="file"
                      id="file_2"
                      name="file_2"
                      accept=".jpg,.jpeg,.png,.gif,.xls,.xlsx,.doc,.docx,.txt,.zip,.rar,.pdf"
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                  </div>
                </div>

                {/* Hidden FormSubmit Config */}
                <input type="hidden" name="_subject" value="New Quote Request - PSI Molded Plastics" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.psimoldedplastics.com/thank-you" />

                {/* Submit */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-12 py-4 rounded-xl transition transform hover:scale-105 shadow-lg"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}