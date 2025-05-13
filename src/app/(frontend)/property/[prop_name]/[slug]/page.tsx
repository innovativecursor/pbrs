// src/app/(frontend)/property/[prop_name]/[slug]/page.tsx

import { fetchPropertyBySlug, fetchSimilarProperties } from '@/app/(frontend)/utils/api'
import PropertyPageClient from '../../components/PageWrapper'

interface PropertyPageProps {
  params: {
    prop_name: string
    slug: string
  }
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const property = await fetchPropertyBySlug(params.slug)

  return {
    title: property?.meta?.title || 'Property Details',
    description: property?.meta?.description || 'Explore this property...',
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
  const property = await fetchPropertyBySlug(params.slug)

  const similarProperties = property?.id ? await fetchSimilarProperties(property.id) : []

  return <PropertyPageClient property={property} similarProperties={similarProperties} />
}
