// src/components/HubSpotForm.tsx
"use client";

import { useState } from "react";

export default function HubSpotForm({ whitePaperTitle, pdfUrl }: { whitePaperTitle: string; pdfUrl: string }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    const res = await fetch("/api/hubspot-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        whitePaperTitle,
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        companyName: companyName || undefined,
      }),
    });

    if (res.ok) {
      window.location.href = pdfUrl;  // instant download
    } else {
      alert("Something went wrong — try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-4 py-3 text-amber-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-4 py-3 text-amber-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <input
        type="text"
        placeholder="Company"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="w-full px-4 py-3 text-amber-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <input
        type="email"
        required
        placeholder="Your work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 text-amber-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-70"
      >
        {loading ? "Processing…" : "Download PDF"}
      </button>
    </form>
  );
}