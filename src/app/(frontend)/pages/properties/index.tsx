import Link from 'next/link'

type Property = {
  id: string
  title: string
  slug: string
  image: string
}
export async function getServerSideProps() {
  const res = await fetch(`${process.env.PAYLOAD_CMS_URL}/api/property`)
  const data = await res.json()

  return {
    props: {
      properties: data.docs.map((property: any) => ({
        id: property.id,
        title: property.prop_name, // Using 'prop_name' from your schema
        slug: property.prop_name.toLowerCase().replace(/\s+/g, '-'), // Creating a slug dynamically
        image: property.images?.length ? property.images[0].url : '/fallback.jpg', // Extracting first image
      })),
    },
  }
}
export default function PropertiesPage({ properties }: { properties: Property[] }) {
  return (
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
  )
}
