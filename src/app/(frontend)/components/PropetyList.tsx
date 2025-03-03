import React from 'react'
import PropertyCard from './ui/PropertyCard'

import cityImage1 from '../public/assets/propertiesCities/city_image_1.png'
import cityImage2 from '../public/assets/propertiesCities/city_image_2.png'
import cityImage3 from '../public/assets/propertiesCities/city_image_3.png'
import PropertyListItem from './ui/PropertyListItem'
import PropertiesPageCard from './ui/PropertiesPageCard'

const properties = [
  {
    id: '1',
    title: 'Modern Family Home',
    location: 'Cavite',
    price: '₱4,500,000',
    image: cityImage1,
    bedrooms: 2,
    bathrooms: 2,
    size: '720 sq ft',
    garage: 1,
  },
  {
    id: '2',
    title: 'Cozy Starter Home',
    location: 'Imus, Cavite',
    price: '₱8,447,000',
    image: cityImage2,
    bedrooms: 2,
    bathrooms: 2,
    size: '560 sq ft',
    garage: 1,
  },
  {
    id: '3',
    title: 'Elegant Townhouse',
    location: 'Bacoor, Cavite',
    price: '₱2,457,000',
    image: cityImage3,
    bedrooms: 2,
    bathrooms: 2,
    size: '768 sq ft',
    garage: 1,
  },
  {
    id: '4',
    title: 'Elegant Townhouse',
    location: 'Bacoor, Cavite',
    price: '₱2,457,000',
    image: cityImage3,
    bedrooms: 2,
    bathrooms: 2,
    size: '768 sq ft',
    garage: 1,
  },
  {
    id: '5',
    title: 'Elegant Townhouse',
    location: 'Bacoor, Cavite',
    price: '₱2,457,000',
    image: cityImage3,
    bedrooms: 2,
    bathrooms: 2,
    size: '768 sq ft',
    garage: 1,
  },
  {
    id: '6',
    title: 'Elegant Townhouse',
    location: 'Bacoor, Cavite',
    price: '₱2,457,000',
    image: cityImage3,
    bedrooms: 2,
    bathrooms: 2,
    size: '768 sq ft',
    garage: 1,
  },
  {
    id: '7',
    title: 'Elegant Townhouse',
    location: 'Bacoor, Cavite',
    price: '₱2,457,000',
    image: cityImage3,
    bedrooms: 2,
    bathrooms: 2,
    size: '768 sq ft',
    garage: 1,
  },
]

interface PropertyListProps {
  viewMode: 'grid' | 'list'
}

const PropertyList: React.FC<PropertyListProps> = ({ viewMode }) => {
  const isScrollable = properties.length > 6

  return (
    <div
      className={`relative ${isScrollable ? 'max-h-[700px] overflow-y-auto' : ''} custom-scrollbar`}
    >
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
            : 'flex flex-col gap-4'
        }
      >
        {properties.map((property) =>
          viewMode === 'grid' ? (
            <PropertiesPageCard key={property.id} {...property} />
          ) : (
            <PropertyListItem key={property.id} {...property} />
          ),
        )}
      </div>
    </div>
  )
}

export default PropertyList
