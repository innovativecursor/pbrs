import { GetServerSideProps } from 'next'

type Property = {
  title: string
  description: string
  image: string
}

export default function PropertyPage({ property }: { property: any }) {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{property.title}</h1>

      <img
        src={property.image}
        alt={property.title}
        className="w-full h-64 object-cover rounded-lg mt-4"
      />

      <p className="mt-4 text-lg">{property.description}</p>

      <div className="mt-4 space-y-2">
        <p>
          <strong>Location:</strong> {property.location}
        </p>
        <p>
          <strong>Price:</strong> ${property.price}
        </p>
        <p>
          <strong>Bedrooms:</strong> {property.bedrooms}
        </p>
        <p>
          <strong>Bathrooms:</strong> {property.bathrooms}
        </p>
        <p>
          <strong>Size:</strong> {property.size} sq ft
        </p>
        <p>
          <strong>Type:</strong> {property.type}
        </p>
        <p>
          <strong>Year Built:</strong> {property.yearBuilt}
        </p>
        <p>
          <strong>Ownership:</strong> {property.ownership}
        </p>
        <p>
          <strong>Parking:</strong> {property.parkingSpace}
        </p>
        <p>
          <strong>Furnishing:</strong> {property.furnishing}
        </p>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params! // 'slug' is actually 'prop_name' in your schema

  const res = await fetch(
    `${process.env.PAYLOAD_CMS_URL}/api/property?where[prop_name][equals]=${slug}`,
  )
  const data = await res.json()

  if (!data.docs.length) {
    return { notFound: true }
  }

  const property = data.docs[0]

  return {
    props: {
      property: {
        title: property.prop_name, // Using prop_name from your schema
        description: property.prop_desc || 'No description available',
        image: property.images?.length ? property.images[0].url : '/fallback.jpg',
        location: property.prop_location,
        price: property.prop_price,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        size: property.prop_size,
        type: property.prop_type,
        yearBuilt: property.prop_year,
        ownership: property.prop_ownership,
        parkingSpace: property.prop_pkSpace,
        furnishing: property.prop_furnishing,
      },
    },
  }
}
