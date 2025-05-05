'use client'

import React, { useEffect, useState } from 'react'
import DiscountPropertyCard from './ui/DiscountPropertyCard'
import { fetchData } from '../utils/api'
interface Property {
  image: string
  title: string
  propDestination: string
  propDestinationSub: string
  price: string
  bedrooms: number
  bathrooms: number
  size: string
  garage: string
  badge: string
  buttonText: string
}

const DiscountPropertyList: React.FC = () => {
  const [discountProperties, setDiscountProperties] = useState<Property[]>([])

  useEffect(() => {
    async function fetchDiscountedProperties() {
      try {
        const data: any[] = await fetchData('property')

        const formattedData = data.map((property: any) => ({
          image: property.images?.[0]?.image?.url || '/placeholder.jpg',
          title: property.prop_name || 'No Title',
          propDestination: property.prop_location?.location_city || 'Unknown City',
          propDestinationSub: property.prop_location?.location_province || 'Unknown Province',
          price: `₱${property.prop_price?.toLocaleString()}` || 'Price Not Available',
          bedrooms: property.bedrooms || 0,
          bathrooms: property.bathrooms || 0,
          size: `${property.prop_size} sqft` || 'N/A',
          garage: property.garages || 'No Garage',
          badge: property.prop_offer ? 'Special Offer for 10%' : '',
          buttonText: 'Inquire Now',
          id: property.id.toString(),
        }))

        setDiscountProperties(formattedData)
      } catch (error) {
        console.error('Error fetching properties:', error)
      }
    }

    fetchDiscountedProperties()
  }, [])

  return (
    <section className="py-12">
      <h4 className="text-[18px] font-medium uppercase text-justify mb-5 text-[#71AE4C]">
        Limited-Time Property Deals – Grab Yours Now!
      </h4>
      <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-[#000000] text-justify mb-8">
        Popular Properties & Special Offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {discountProperties.map((property, index) => (
          <DiscountPropertyCard id="" key={index} {...property} />
        ))}
      </div>
    </section>
  )
}

export default DiscountPropertyList
