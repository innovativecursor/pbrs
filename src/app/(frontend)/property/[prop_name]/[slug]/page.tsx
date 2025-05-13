import { fetchPropertyBySlug, fetchSimilarProperties } from '../../../utils/api'
import PropertyPageClient from '../../PageWrapper'

export async function generateMetadata({ params }: { params: { slug: string } }) {
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

export default async function PropertyPage({ params }: { params: { slug: string } }) {
  const property = await fetchPropertyBySlug(params.slug)

  let similarProperties = []
  if (property?.id) {
    similarProperties = await fetchSimilarProperties(property.id)
  }

  return <PropertyPageClient property={property} similarProperties={similarProperties} />
}
