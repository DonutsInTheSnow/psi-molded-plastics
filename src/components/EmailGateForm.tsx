// src/components/EmailGateForm.tsx
"use client";

import { useState } from "react";

interface EmailGateFormProps {
  title: string;
  pdfUrl: string;
}

export default function EmailGateForm({ title, pdfUrl }: EmailGateFormProps) {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !confirmEmail) {
      setError("Please fill in both fields");
      return;
    }

    if (email !== confirmEmail) {
      setError("Emails do not match");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Optional: send email to your backend/CRM here
    await fetch("/api/capture-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, title }),
    });

    // Redirect to PDF download
    window.location.href = pdfUrl;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold mb-4 text-center text-amber-800">
        Download: {title}
      </h3>
      <p className="text-gray-600 text-center mb-8">
        Enter and then re-enter your email to download this technical paper
      </p>

      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <div className="space-y-4">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Confirm email address"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-70"
      >
        {isSubmitting ? "Preparing download..." : "Download PDF"}
      </button>

      <p className="text-xs font-semibold text-orange-900 text-center mt-6">
        Your email will be used for our marketing purposes.
      </p>
    </form>
  );
}