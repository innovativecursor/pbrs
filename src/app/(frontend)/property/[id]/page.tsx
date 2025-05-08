'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

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
import Loader from '../../components/ui/Loader'
import SimilarProperties from '../../components/ui/SimilarProperties'

import { fetchPropertyById, fetchSimilarProperties } from '../../utils/api'

const PropertyPage = () => {
  const params = useParams()
  const propertyId = params?.id as string

  const [property, setProperty] = useState<any>(null)
  const [similarProperties, setSimilarProperties] = useState<any[]>([])
  const [loadingSimilar, setLoadingSimilar] = useState(true)

  useEffect(() => {
    const fetchPropertyAndSimilar = async () => {
      if (!propertyId) return

      try {
        const propertyData = await fetchPropertyById(propertyId)
        setProperty(propertyData)

        const similar = await fetchSimilarProperties(propertyId)
        setSimilarProperties(similar)
      } catch (error) {
        console.error('Error fetching property/similar:', error)
      } finally {
        setLoadingSimilar(false)
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
      {loadingSimilar ? (
        <div className="text-center mt-12">Loading similar properties...</div>
      ) : similarProperties.length > 0 ? (
        <SimilarProperties similarProperties={similarProperties} />
      ) : (
        <div className="text-center mt-12 text-gray-500">No similar properties found.</div>
      )}
    </>
  )
}

export default PropertyPage
