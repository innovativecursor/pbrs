'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaBriefcase } from 'react-icons/fa'
import { GiFamilyHouse } from 'react-icons/gi'
import { BsBuildingsFill } from 'react-icons/bs'

import FeatureCard from './ui/FeatureCard'
import Image from 'next/image'
import tilt from '../public/assets/tilt_image.png'

const features = [
  {
    icon: <FaHome size={30} color="#71AE4C" />,
    title: 'Houses',
    description: 'Spacious and comfortable homes for families of all sizes.',
  },
  {
    icon: <BsBuildingsFill size={30} color="#71AE4C" />,
    title: 'Apartments',
    description: 'Affordable and convenient living spaces in prime locations.',
  },
  {
    icon: <GiFamilyHouse size={30} color="#71AE4C" />,
    title: 'Bungalows',
    description: 'Single-story homes with open layouts and private gardens.',
  },
  {
    icon: <FaBriefcase size={30} color="#71AE4C" />,
    title: 'Offices',
    description: 'Commercial spaces designed for businesses and professionals.',
  },
]

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.3 } },
}

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const ExploreFeatures: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <motion.section
      className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-18 my-8 sm:my-10 md:my-12"
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      onViewportEnter={() => setIsVisible(true)}
      onViewportLeave={() => setIsVisible(false)}
      viewport={{ amount: 0.5 }}
      variants={sectionVariants}
    >
      {/* Title Section */}
      <motion.h2
        className="text-[#71AE4C] font-semibold uppercase tracking-wide text-sm flex flex-col justify-center items-center text-center"
        variants={titleVariants}
      >
        Explore Our Featured Properties
        <Image src={tilt} width={120} height={120} alt="vector" className="mt-[5px]" />
      </motion.h2>

      <motion.h3
        className="text-xl sm:text-2xl md:text-[48px] w-full max-w-[47rem] font-semibold text-center mt-2 mb-[20px]"
        variants={titleVariants}
      >
        Find a home that perfectly fits your lifestyle and budget.
      </motion.h3>

      {/* Feature Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full px-2 sm:px-4 md:px-0"
        variants={sectionVariants}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} index={index} {...feature} />
        ))}
      </motion.div>
    </motion.section>
  )
}

export default ExploreFeatures
