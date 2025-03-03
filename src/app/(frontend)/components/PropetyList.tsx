'use client'

import React from 'react'
import PropertyCard from './ui/PropertyCard'

const properties = [
  {
    id: '1',
    title: 'Modern Family Home',
    location: 'Cavite',
    price: '₱4,500,000',
    image: '/images/property1.jpg',
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
    image: '/images/property2.jpg',
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
    image: '/images/property3.jpg',
    bedrooms: 2,
    bathrooms: 2,
    size: '768 sq ft',
    garage: 1,
  },
]

// Accept `viewMode` as a prop
interface PropertyListProps {
  viewMode: 'grid' | 'list'
}

const PropertyList: React.FC<PropertyListProps> = ({ viewMode }) => {
  return (
    <div
      className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' : 'grid-cols-1'}`}
    >
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  )
}

export default PropertyList
