'use client'

import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'
import { useRef } from 'react'

// Define the type for property data
interface Property {
  id?: string | number // Add if you have an ID to use for keys
  images: { image: { url: string } }[]
  prop_name: string
  prop_price: number
  prop_location: { location_city: string }
  bedrooms: number
  bathrooms: number
  prop_size: number
  garages: string
}

interface SimilarPropertiesProps {
  similarProperties: Property[]
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
}

const SimilarProperties: React.FC<SimilarPropertiesProps> = ({ similarProperties }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount =
        direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="my-12 bg-[#FAF9F9] px-4">
      {/* Heading and Arrows */}
      <div className="mx-auto max-w-7xl flex items-center justify-between pt-10 pb-6">
        <h2 className="text-[38px] font-semibold text-[#000000]">
          Similar Properties You May Like
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="group text-xl p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={() => scroll('right')}
            className="group text-xl p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>

      {/* Scrollable Motion Cards */}
      <div
        ref={scrollRef}
        className="mx-auto max-w-7xl pb-12 flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {similarProperties.map((property, index) => (
          <motion.div
            key={property.id ?? index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="flex-none w-[280px] sm:w-[300px] md:w-[340px] border-[#C4C4C4] border rounded-lg shadow-lg overflow-hidden bg-white"
          >
            <img
              src={property.images[0]?.image.url}
              alt={property.prop_name || 'Property image'}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{property.prop_name}</h3>
              <p className="text-gray-600 flex items-center justify-center gap-1 text-sm">
                <FaMapMarkerAlt className="text-green-600" /> {property.prop_location.location_city}
              </p>
              <p className="text-[#71ae4c] font-bold text-lg mt-2">
                {new Intl.NumberFormat().format(property.prop_price)}₱
              </p>
              <div className="flex justify-center gap-4 text-sm text-gray-700 mt-3">
                <span className="flex items-center gap-1">
                  <FaBed /> {property.bedrooms} Beds
                </span>
                <span className="flex items-center gap-1">
                  <FaBath /> {property.bathrooms} Baths
                </span>
              </div>
              <div className="flex justify-center gap-4 text-sm text-gray-700 mt-1">
                <span className="flex items-center gap-1">
                  <FaRulerCombined /> {property.prop_size} sq ft
                </span>
                <span className="flex items-center gap-1">
                  <FaCar /> {property.garages}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-full mt-4 py-2 bg-[#71ae4c] text-white font-semibold rounded-lg"
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SimilarProperties
