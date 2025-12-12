// src/app/(marketing)/resources/page.tsx
import { createSupabaseServerClient } from '@/lib/supabase/server'
import LeadCaptureForm from '@/components/LeadCaptureForm'
import type { Database } from '@/lib/supabase/types'

export const revalidate = 3600 // revalidate every hour

export default async function ResourcesPage() {
  const supabase = await createSupabaseServerClient()
  const { data: resources } = await supabase
    .from('technical_resources')
    .select('*')
    .order('created_at', { ascending: false })
    .returns<Database['public']['Tables']['technical_resources']['Row'][]>()

  return (
    <main className="relative pt-32">
      <section id="white-papers" className="py-24 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Resources
            </h1>
            <p className="text-xl text-gray-600">
              Download our white papers, case studies, and material specifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources?.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="bg-linear-to-br from-blue-600 to-blue-800 h-32" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  {resource.description && (
                    <p className="text-gray-600 mb-6 flex-1">
                      {resource.description}
                    </p>
                  )}
                  <LeadCaptureForm
                    resourceId={resource.id}
                    filename={resource.filename}
                    fileUrl={resource.file_url}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}