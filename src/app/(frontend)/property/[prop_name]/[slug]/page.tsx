import { fetchPropertyBySlug, fetchSimilarProperties } from '../../../utils/api'
import PropertyPageClient from '../../PageWrapper'

interface PropertyPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const property = await fetchPropertyBySlug(params.slug)

  return {
    title: property?.meta?.title || 'Property Details',
    description:
      property?.meta?.description ||
      'Explore this property with detailed specifications, images, and more.',
    openGraph: {
      title: property?.meta?.title,
      description: property?.meta?.description,
      images: [
        {
          url: property?.images?.[0]?.image?.url
            ? `https://yourdomain.com${property.images[0].image.url}`
            : '/fallback-image.jpg',
          width: 900,
          height: 600,
        },
      ],
    },
  }
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  // Fetch property data using the slug from params
  const property = await fetchPropertyBySlug(params.slug)

  let similarProperties = []
  if (property?.id) {
    // Fetch similar properties if property id is available
    similarProperties = await fetchSimilarProperties(property.id)
  }

  return <PropertyPageClient property={property} similarProperties={similarProperties} />
}
