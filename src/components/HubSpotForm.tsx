// src/components/HubSpotForm.tsx
"use client";

import { useState } from "react";

export default function HubSpotForm({ whitePaperTitle, pdfUrl }: { whitePaperTitle: string; pdfUrl: string }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    const res = await fetch("/api/hubspot-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, whitePaperTitle }),
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
      <input
        type="email"
        required
        placeholder="Your work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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