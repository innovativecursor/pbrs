import { Suspense } from 'react'
import PropertiesPage from './PropertiesPageWrapper'

export default function PropertiesPageRoute() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading properties...</div>}>
      <PropertiesPage />
    </Suspense>
  )
}
