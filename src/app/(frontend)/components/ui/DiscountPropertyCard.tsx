import React from 'react'
import Image from 'next/image'
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'
import DiscountButton from './DiscountButton'

interface PropertyCardProps {
  image: string
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  size: string
  garage: number | string
  badge?: string
  buttonText: string
}

const DiscountPropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  size,
  garage,
  badge,
  buttonText,
}) => {
  return (
    <div className="group bg-white border border-[#F1F1F1] overflow-hidden relative transition-all duration-500 hover:shadow-lg">
      {/* Wrapper to Move Image & Content Up More */}
      <div className="relative transition-all duration-500 group-hover:-translate-y-20">
        {/* Property Image */}
        <div className="relative w-full h-56">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500"
          />
          {badge && (
            <div className="absolute top-[60px] left-0 w-full bg-[#CB6ABA] text-white text-center py-2 text-xs font-semibold transform -translate-y-1/2">
              {badge}
            </div>
          )}
        </div>

        {/* Property Details */}
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center text-gray-500 text-[13px] mt-1">
            <FaMapMarkerAlt className="mr-1" />
            {location}
          </div>
          <p className="text-[#71AE4C] font-semibold text-lg mt-2">{price}</p>

          {/* Property Features */}
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-4">
            <div className="flex items-center gap-2">
              <FaBed /> {bedrooms} Beds
            </div>
            <div className="flex items-center gap-2">
              <FaBath /> {bathrooms} Baths
            </div>
            <div className="flex items-center gap-2">
              <FaRulerCombined /> {size}
            </div>
            <div className="flex items-center gap-2">
              <FaCar /> {garage}
            </div>
          </div>
        </div>
      </div>

      {/* Button - Smooth Fade In/Out */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <DiscountButton buttonText={buttonText} />
      </div>
    </div>
  )
}

export default DiscountPropertyCard
