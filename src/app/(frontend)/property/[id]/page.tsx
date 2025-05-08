'use client'

import Breadcrumbs from '../../components/ui/Breadcrumbs'
import PropertyGallery from '../../components/ui/PropertyGallery'
import PropertyInfo from '../../components/ui/PropertyInfo'
import PropertyAgent from '../../components/ui/PropertyAgent'
import PropertyDescription from '../../components/ui/PropertyDescription'
import PropertyFeatures from '../../components/ui/PropertyFeatures'
import HomeInteriorDetails from '../../components/ui/HomeInteriorDetails'
import HomeExteriorDetails from '../../components/ui/HomeExteriorDetails'
import BackButton from '../../components/ui/BackButton'
import InquiryForm from '../../components/ui/InquiryForm'

import property1 from '../../public/assets/propertyImages/houses_1.jpg'
import property2 from '../../public/assets/propertyImages/houses_2.jpg'
import property3 from '../../public/assets/propertyImages/houses_3.jpg'
import property4 from '../../public/assets/propertyImages/houses_4.jpeg'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { fetchPropertyById, fetchSimilarProperties } from '../../utils/api'
import Loader from '../../components/ui/Loader'
import SimilarProperties from '../../components/ui/SimilarProperties'

const PropertyPage = () => {
  const params = useParams()
  const propertyId = params?.id as string

  const [property, setProperty] = useState<any>(null)
  const [similarProperties, setSimilarProperties] = useState<any[]>([])

  useEffect(() => {
    const fetchPropertyAndSimilar = async () => {
      if (!propertyId) return

      try {
        const propertyData = await fetchPropertyById(propertyId)
        setProperty(propertyData)

        const allSimilar = await fetchSimilarProperties()
        console.log('Similar Properties Data:', allSimilar) // DEBUG

        const matched = allSimilar.find((item) => {
          const baseId =
            typeof item.base_property === 'string' ? item.base_property : item.base_property?.id
          return baseId === propertyId
        })

        if (!matched || !matched.similar_properties?.length) {
          setSimilarProperties([])
          return
        }

        const details = await Promise.all(
          matched.similar_properties.map((id) => fetchPropertyById(id)),
        )

        setSimilarProperties(details)
      } catch (error) {
        console.error('Error fetching property/similar:', error)
      }
    }

    fetchPropertyAndSimilar()
  }, [propertyId])

  if (!property) {
    return (
      <div className="flex justify-center items-center py-24">
        <Loader />
      </div>
    )
  }

  return (
    <>
      <div className="mx-auto w-full max-w-full">
        <Breadcrumbs
          propertyName={property.prop_name}
          propertyDestination={property.prop_destination}
        />
        <div className="max-w-7xl mx-auto p-6 w-full">
          <BackButton />

          {/* Gallery & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 border-b border-gray-300 pb-10 w-full max-w-[95%] mx-auto">
            <PropertyGallery images={property?.images || []} />
            <PropertyInfo property={property} />
          </div>

          {/* Features & Agent */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 border-b border-gray-300 pb-10 w-full max-w-[95%] mx-auto">
            <div className="md:col-span-1 lg:col-span-2 w-full">
              <PropertyDescription description={property.prop_desc} />
              <PropertyFeatures property={property} />
            </div>
            <div className="relative md:col-span-1 w-full max-w-[90%] mx-auto">
              <PropertyAgent />
            </div>
          </div>

          {/* Home Interior/Exterior */}
          <div className="w-full max-w-[95%] mx-auto">
            <HomeInteriorDetails
              livingRoomDesc={property.home_interior_Living}
              diningRoomDesc={property.home_interior_dining}
              bedroomDesc={property.home_interior_bedrooms}
              bathroomDesc={property.home_interior_bathroom}
              kitchenDesc={property.home_interior_kitchen}
            />
            <HomeExteriorDetails
              garageDesc={property.home_exterior_garage}
              balconyDesc={property.home_exterior_balcony}
              accessibilityDesc={property.home_exterior_accessibility}
              backyardDesc={property.home_exterior_backyard}
              terraceDesc={property.home_exterior_terrace}
            />
          </div>

          {/* Inquiry Form */}
          <div className="w-full max-w-[95%] mx-auto pt-8 pb-15">
            <InquiryForm />
          </div>
        </div>
      </div>

      {/* Similar Properties Section */}
      {similarProperties.length > 0 ? (
        <SimilarProperties properties={similarProperties} />
      ) : (
        <div className="text-center mt-12">Loading......</div>
      )}
    </>
  )
}

export default PropertyPage
