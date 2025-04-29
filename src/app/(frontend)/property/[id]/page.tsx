// PropertyPage.tsx
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
import SimilarProperties from '../../components/ui/SimilarProperties'
import property1 from '../../public/assets/propertyImages/houses_1.jpg'
import property2 from '../../public/assets/propertyImages/houses_2.jpg'
import property3 from '../../public/assets/propertyImages/houses_3.jpg'
import property4 from '../../public/assets/propertyImages/houses_4.jpeg'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { fetchPropertyById } from '../../utils/api'

const PropertyPage = () => {
  const propertiesData = [
    {
      title: 'Cozy 2-Bedroom Home',
      location: 'Bacoor, Cavite',
      price: '₱3,800,000',
      bedrooms: 3,
      bathrooms: 2,
      area: 820,
      garage: '1 Garage',
      image: property1.src,
    },
    {
      title: 'Cozy 2-Bedroom Home',
      location: 'Bacoor, Cavite',
      price: '₱3,800,000',
      bedrooms: 3,
      bathrooms: 2,
      area: 820,
      garage: '1 Garage',
      image: property2.src,
    },
    {
      title: 'Cozy 2-Bedroom Home',
      location: 'Bacoor, Cavite',
      price: '₱3,800,000',
      bedrooms: 3,
      bathrooms: 2,
      area: 820,
      garage: '1 Garage',
      image: property3.src,
    },
    {
      title: 'Cozy 2-Bedroom Home',
      location: 'Bacoor, Cavite',
      price: '₱3,800,000',
      bedrooms: 3,
      bathrooms: 2,
      area: 820,
      garage: '1 Garage',
      image: property4.src,
    },
    {
      title: 'Cozy 2-Bedroom Home',
      location: 'Bacoor, Cavite',
      price: '₱3,800,000',
      bedrooms: 3,
      bathrooms: 2,
      area: 820,
      garage: '1 Garage',
      image: 'your-image-url.jpg',
    },
  ]

  const params = useParams()
  const propertyId = params?.id as string

  const [property, setProperty] = useState<any>(null)

  useEffect(() => {
    const fetchProperty = async () => {
      if (propertyId) {
        const data = await fetchPropertyById(propertyId)
        console.log('Fetched property:', data)
        setProperty(data)
      }
    }

    fetchProperty()
  }, [propertyId])

  if (!property) return <div>Loading...</div>

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

      <SimilarProperties properties={propertiesData} />
    </>
  )
}

export default PropertyPage
