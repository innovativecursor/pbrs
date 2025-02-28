import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Property = {
  id: string
  title: string
  slug: string
  image: string
}

// Sample static property data (for UI demonstration)
const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa',
    slug: 'luxury-villa',
    image: '/images/property1.jpg',
  },
  {
    id: '2',
    title: 'Modern Apartment',
    slug: 'modern-apartment',
    image: '/images/property2.jpg',
  },
  {
    id: '3',
    title: 'Cozy Cottage',
    slug: 'cozy-cottage',
    image: '/images/property3.jpg',
  },
]

export default function PropertiesPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Properties</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.slug}`}
              className="block border p-4 rounded-lg hover:shadow-lg"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="mt-2 text-lg font-semibold">{property.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
