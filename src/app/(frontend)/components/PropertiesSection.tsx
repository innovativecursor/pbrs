'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PropertyCard from './ui/PropertyCard'
import PropertySkeleton from './ui/PropertySkeleton'
import tilt from '../public/assets/tilt_image.png'

const PropertiesSection: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true)

      try {
        const res = await fetch('/api/property') // Replace with actual API endpoint
        const data = await res.json()

        // Map the API response data to the expected format
        const mappedProperties = data.docs
          .filter((property: any) => property.prop_featured) // Filter for featured properties
          .map((property: any) => ({
            id: property.id, // Assuming the ID is available in the response
            image: property.images[0]?.image.url, // Assuming first image is used
            title: property.prop_name,
            location: `${property.prop_location.location_city}, ${property.prop_location.location_province}`,
            price: `₱${property.prop_price.toLocaleString()}`,
            bedrooms: property.bedrooms,
            bathrooms: property.bathrooms,
            area: property.prop_size,
            garage: property.garages,
          }))

        setProperties(mappedProperties)
      } catch (error) {
        console.error('Error fetching properties:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  return (
    <motion.section
      ref={ref}
      className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between px-4 sm:px-6 md:px-8 py-16 my-12"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#71AE4C] font-semibold uppercase tracking-wide text-sm flex flex-col justify-center items-center">
          Explore Our Featured Properties
          <Image src={tilt} width={120} height={120} alt="vector" className="mt-[5px]" />
        </p>
        <h2 className="text-2xl md:text-[48px] w-full max-w-[47rem] font-semibold text-center mt-2 mb-[20px]">
          Find a home that perfectly fits your lifestyle and budget.
        </h2>
      </motion.div>

      <motion.div
        className={`grid ${properties.length === 1 ? 'grid-cols-1 justify-center' : properties.length === 2 ? 'grid-cols-2 justify-center' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-6`}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } },
        }}
      >
        {loading
          ? Array.from({ length: 3 }).map((_, index) => <PropertySkeleton key={index} />)
          : properties.map((property, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } },
                }}
              >
                <PropertyCard {...property} />
              </motion.div>
            ))}
      </motion.div>
    </motion.section>
  )
}

export default PropertiesSection
