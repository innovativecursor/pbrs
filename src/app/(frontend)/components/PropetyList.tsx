'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PropertyListItem from './ui/PropertyListItem'
import PropertiesPageCard from './ui/PropertiesPageCard'

import cityImage1 from '../public/assets/propertiesCities/city_image_1.png'
import cityImage2 from '../public/assets/propertiesCities/city_image_2.png'
import cityImage3 from '../public/assets/propertiesCities/city_image_3.png'

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
    title: 'Luxury Condo',
    location: 'Makati, Manila',
    price: '₱12,000,000',
    image: cityImage3,
    bedrooms: 3,
    bathrooms: 3,
    size: '1000 sq ft',
    garage: 2,
  },
  {
    id: '5',
    title: 'Beachfront Villa',
    location: 'Boracay',
    price: '₱25,000,000',
    image: cityImage3,
    bedrooms: 4,
    bathrooms: 3,
    size: '2000 sq ft',
    garage: 2,
  },
  {
    id: '6',
    title: 'Urban Loft',
    location: 'Quezon City',
    price: '₱5,800,000',
    image: cityImage3,
    bedrooms: 2,
    bathrooms: 1,
    size: '600 sq ft',
    garage: 1,
  },
  {
    id: '7',
    title: 'Elegant Bungalow',
    location: 'Tagaytay',
    price: '₱3,900,000',
    image: cityImage3,
    bedrooms: 2,
    bathrooms: 2,
    size: '850 sq ft',
    garage: 1,
  },
]

interface PropertyListProps {
  viewMode: 'grid' | 'list'
}

const PropertyList: React.FC<PropertyListProps> = ({ viewMode }) => {
  const [visibleCount, setVisibleCount] = useState(6) // Initially show 6 properties
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    if (expanded) {
      setVisibleCount(6) // Collapse to 6 items
    } else {
      setVisibleCount(properties.length) // Show all items
    }
    setExpanded(!expanded)
  }

  return (
    <div className="relative">
      <motion.div
        layout
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
            : 'flex flex-col gap-4'
        }
      >
        {properties.slice(0, visibleCount).map((property) =>
          viewMode === 'grid' ? (
            <motion.div
              key={property.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PropertiesPageCard {...property} />
            </motion.div>
          ) : (
            <motion.div
              key={property.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <PropertyListItem {...property} />
            </motion.div>
          ),
        )}
      </motion.div>

      {properties.length > 6 && (
        <div className="flex justify-center mt-6">
          <motion.button
            onClick={handleToggle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md transition duration-300 hover:bg-blue-600"
          >
            {expanded ? 'View Less' : 'View More'}
          </motion.button>
        </div>
      )}
    </div>
  )
}

export default PropertyList
