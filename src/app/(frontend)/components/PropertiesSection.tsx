'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PropertyCard from './ui/PropertyCard'
import PropertySkeleton from './ui/PropertySkeleton'
import tilt from '../public/assets/tilt_image.png'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const PropertiesSection: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const isSwiper = properties.length > 3
  const cardsPerView = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 3

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerView >= properties.length ? 0 : prevIndex + cardsPerView,
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerView < 0
        ? Math.max(properties.length - cardsPerView, 0)
        : prevIndex - cardsPerView,
    )
  }

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true)

      try {
        const res = await fetch('/api/property')
        const data = await res.json()

        const mappedProperties = data.docs
          .filter((property: any) => property.prop_featured)
          .map((property: any) => ({
            id: property.id,
            image: property.images[0]?.image.url,
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

  if (!loading && properties.length === 0) return null

  return (
    <motion.section
      ref={ref}
      className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between px-4 sm:px-6 md:px-8 py-16 my-12 relative"
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

      {/* Slider UI if more than 3 */}
      {isSwiper ? (
        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow hover:bg-[#71AE4C] hover:text-white focus:bg-[#71AE4C] focus:text-white transition-all duration-300 z-10"
            aria-label="Previous"
          >
            <FaAngleLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow hover:bg-[#71AE4C] hover:text-white focus:bg-[#71AE4C] focus:text-white transition-all duration-300 z-10"
            aria-label="Next"
          >
            <FaAngleRight />
          </button>

          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {properties
                .slice(currentIndex, currentIndex + cardsPerView)
                .map((property, index) => (
                  <PropertyCard showPrice={false} {...property} key={index} />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          className={`grid ${
            properties.length === 1
              ? 'grid-cols-1 justify-center'
              : properties.length === 2
                ? 'grid-cols-2 justify-center'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          } gap-6`}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, duration: 0.6 },
            },
          }}
        >
          {loading
            ? Array.from({ length: 3 }).map((_, index) => <PropertySkeleton key={index} />)
            : properties.map((property, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: index * 0.2 },
                    },
                  }}
                >
                  <PropertyCard showPrice={false} {...property} />
                </motion.div>
              ))}
        </motion.div>
      )}
    </motion.section>
  )
}

export default PropertiesSection
