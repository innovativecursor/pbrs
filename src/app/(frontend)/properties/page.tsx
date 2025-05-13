import { Suspense } from 'react'
import PropertiesPage from './PropertiesPageWrapper'
import Loader from '../components/ui/Loader' // Adjust the path if needed
export const metadata = {
  title: 'Properties | Paul Balita Realty Services',
  description:
    'Browse properties for sale and rent at Paul Balita Realty Services. Filter by price, location, and more.',
}
export default function PropertiesPageRoute() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-24">
          <Loader />
        </div>
      }
    >
      <PropertiesPage />
    </Suspense>
  )
}
