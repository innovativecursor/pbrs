'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PropertyCard from './ui/PropertyCard'
import PropertySkeleton from './ui/PropertySkeleton'
import tilt from '../public/assets/tilt_image.png'
import image1 from '../public/assets/exploreFeatures/image_1.png'
import image2 from '../public/assets/exploreFeatures/image_2.png'
import image3 from '../public/assets/exploreFeatures/image_3.png'

const PropertiesSection: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const { ref, inView } = useInView({
    threshold: 0.3, // Adjusted threshold for better visibility detection
    triggerOnce: false, // Ensures animation triggers only once
  })

  useState(() => {
    setLoading(true)
    setTimeout(() => {
      setProperties([
        {
          image: image1,
          title: 'AIRA - Single Family Home',
          location: 'Dasmarinas, Cavite',
          price: '₱4,567,000',
          bedrooms: 2,
          bathrooms: 2,
          area: 720,
          garage: 1,
        },
        {
          image: image2,
          title: 'New York - Single Family Home',
          location: 'Dasmarinas, Cavite',
          price: '₱8,447,000',
          bedrooms: 2,
          bathrooms: 2,
          area: 560,
          garage: 1,
        },
        {
          image: image3,
          title: 'Cozy Starter Home',
          location: 'Jordan Estate Subd, San Jose 2, Noveleta, Cavite',
          price: '₱2,457,000',
          bedrooms: 2,
          bathrooms: 2,
          area: 780,
          garage: 1,
        },
      ])
      setLoading(false)
    }, 100)
  })

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
      {/* Title Section with Motion Animation */}
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

      {/* Property List / Skeleton */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
