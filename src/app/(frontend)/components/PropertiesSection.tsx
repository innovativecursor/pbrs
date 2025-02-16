'use client'

import Image from 'next/image'
import image1 from '../public/assets/exploreFeatures/image_1.png'
import image2 from '../public/assets/exploreFeatures/image_2.png'
import image3 from '../public/assets/exploreFeatures/image_3.png'
import PropertyCard from './ui/PropertyCard'
import tilt from '../public/assets/tilt_image.png'

const properties = [
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
]

const PropertiesSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between px-6 md:px-8 py-18 my-12">
      <div className="text-center mb-8">
        <p className="text-[#71AE4C] font-semibold uppercase tracking-wide text-sm flex flex-col justify-center items-center">
          Explore Our Featured Properties
          <Image src={tilt} width="120" height="120" alt="vector" className="mt-[5px]" />
        </p>
        <h2 className="text-2xl md:text-[48px] w-full max-w-[47rem] font-semibold text-center mt-2 mb-[20px]">
          Find a home that perfectly fits your lifestyle and budget.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </section>
  )
}

export default PropertiesSection
