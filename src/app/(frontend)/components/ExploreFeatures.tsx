import React from 'react'

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

const ExploreFeatures: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between px-6 md:px-8 py-18 my-12">
      <h2 className="text-[#71AE4C] font-semibold uppercase tracking-wide text-sm flex flex-col justify-center items-center">
        Explore Our Featured Properties
        <Image src={tilt} width="120" height="120" alt="vector" className="mt-[5px]" />
      </h2>

      <h3 className="text-2xl md:text-[48px] w-full max-w-[47rem] font-semibold text-center mt-2 mb-[20px]">
        Find a home that perfectly fits your lifestyle and budget.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default ExploreFeatures
