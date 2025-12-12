// src/components/LeadCaptureForm.tsx
'use client'

import { useState } from 'react'
import { createSupabaseBrowserClient } from '@/lib/supabase/client'

export default function LeadCaptureForm({
  resourceId,
  filename,
  fileUrl,
}: {
  resourceId: string
  filename: string
  fileUrl: string
}) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const supabase = createSupabaseBrowserClient()

    const { error } = await supabase.from('resource_downloads').insert({
      resource_id: resourceId,
      name: name || null,
      email,
      company: company || null,
    })

    if (error) {
      setStatus('error')
      console.error(error)
    } else {
      setStatus('success')
      // Trigger download
      const link = document.createElement('a')
      link.href = fileUrl
      link.download = filename
      link.click()
      // Reset form
      setEmail('')
      setName('')
      setCompany('')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-4 text-green-600 font-medium">
        Thank you! Your download should start now.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        required
        placeholder="Work email *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Company (optional)"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-70"
      >
        {status === 'loading' ? 'Sending...' : 'Download Now'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}