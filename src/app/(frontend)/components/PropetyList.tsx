'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PropertyListItem from './ui/PropertyListItem'
import PropertiesPageCard from './ui/PropertiesPageCard'
import { fetchData } from '../utils/api'
// Importing the API function

interface Property {
  id: string
  prop_name: string
  prop_location: {
    location_city: string
    location_province: string
    name: string
  }
  prop_price: number
  images: { url: string }[]
  bedrooms: number
  bathrooms: number
  prop_size: number
  lotArea: number
  garages: number
}

interface PropertyListProps {
  viewMode: 'grid' | 'list'
  properties: Property[] // Accept properties from parent
}

const PropertyList: React.FC<PropertyListProps> = ({ viewMode, properties }) => {
  const [visibleCount, setVisibleCount] = useState(6)
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded(!expanded)
    setVisibleCount(expanded ? 6 : properties.length)
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
            >
              <PropertiesPageCard
                title={property.prop_name}
                propDestination={property.prop_location?.location_city || 'Unknown'}
                propDestinationSub={property.prop_location?.location_province || 'Unknown'}
                price={`₱${property.prop_price.toLocaleString()}`}
                image={
                  property.images?.[0]?.url
                    ? `${process.env.NEXT_PUBLIC_API_URL}${property.images[0].url}`
                    : '/fallback-image.png'
                }
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                lotArea={property.lotArea}
                garage={property.garages}
              />
            </motion.div>
          ) : (
            <motion.div
              key={property.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <PropertyListItem
                title={property.prop_name}
                propDestination={property.prop_location?.location_city || 'Unknown'}
                propDestinationSub={property.prop_location?.location_province || 'Unknown'}
                price={`₱${property.prop_price.toLocaleString()}`}
                image={
                  property.images?.[0]?.url
                    ? `${process.env.NEXT_PUBLIC_API_URL}${property.images[0].url}`
                    : '/fallback-image.png'
                }
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                size={`${property.prop_size} sq ft`}
                garage={property.garages}
              />
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
            className="px-12 py-2 bg-[#71AE4C] text-white text-[13px] font-medium rounded-md transition duration-300 hover:bg-[#000000]"
          >
            {expanded ? 'View Less' : 'View More'}
          </motion.button>
        </div>
      )}
    </div>
  )
}

export default PropertyList
