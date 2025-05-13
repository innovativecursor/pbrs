'use client'

import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Define the type for property data
interface Property {
  id?: string | number // Add if you have an ID to use for keys
  slug: string
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
  const [activeArrow, setActiveArrow] = useState<'left' | 'right' | null>(null)
  const scroll = (direction: 'left' | 'right') => {
    setActiveArrow(direction)
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount =
        direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' })
    }

    // Reset the active state after 300ms
    setTimeout(() => setActiveArrow(null), 300)
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
            className={`group text-xl p-3 rounded-full transition ${
              activeArrow === 'left' ? 'bg-[#71AE4C] text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            <FaAngleLeft />
          </button>

          <button
            onClick={() => scroll('right')}
            className={`group text-xl p-3 rounded-full transition ${
              activeArrow === 'right' ? 'bg-[#71AE4C] text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
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
          <Link
            key={property.id ?? index}
            href={`/property/${property?.prop_name}/${property?.slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="flex-none w-[280px] sm:w-[300px] md:w-[340px] border-[#C4C4C4] border rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <div className="relative w-full h-48">
                <Image
                  src={property.images[0]?.image.url}
                  fill
                  sizes="100vw"
                  alt={property.prop_name || 'Property image'}
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{property.prop_name}</h3>
                <p className="text-gray-600 flex items-center justify-center gap-1 text-sm">
                  <FaMapMarkerAlt className="mr-1 text-black" />{' '}
                  {property.prop_location.location_city}
                </p>
                <p className="text-[#71ae4c] font-bold text-lg mt-2">
                  ₱ {new Intl.NumberFormat().format(property.prop_price)}
                </p>
                <div className="-mx-4 mt-4 grid grid-cols-2 gap-0 text-sm bg-[#F1F1F1] text-[#181818] px-4 py-3">
                  <div className="flex text-[12px] items-center gap-2 border-b border-r border-[#DADADA] pb-2 pr-2">
                    <FaBed />
                    {property.bedrooms ? `${property.bedrooms} Bedrooms` : 'N/A'}
                  </div>
                  <div className="flex text-[12px] items-center gap-2 border-b border-[#DADADA] pb-2 pl-2">
                    <FaBath />
                    {property.bathrooms ? `${property.bathrooms} Bathrooms` : 'N/A'}
                  </div>
                  <div className="flex text-[12px] items-center gap-2 border-r border-[#DADADA] pt-2 pr-2">
                    <FaRulerCombined />
                    {property.prop_size ? `${property.prop_size} sq Ft` : 'N/A'}
                  </div>
                  <div className="flex text-[12px] items-center gap-2 pt-2 pl-2">
                    <FaCar />
                    {property.garages ? `${property.garages} Garage` : 'No Garage'}
                  </div>
                </div>
                <Link
                  href={`/property/${property?.prop_name}/${property?.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="px-7 py-3 mt-4 bg-[#71AE4C] text-white font-light rounded-lg hover:bg-[#FFF] hover:border hover:border-[#71AE4C] hover:text-[#000] transition duration-300 shadow-md cursor-pointer text-[11px] text-center"
                  >
                    View Details
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SimilarProperties
