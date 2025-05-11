import React from 'react'
import Image from 'next/image'
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'
import DiscountButton from './DiscountButton'
import Link from 'next/link'

interface PropertyCardProps {
  slug: string
  image?: string
  title: string
  propDestination: string
  propDestinationSub: string
  price: string
  bedrooms: number
  bathrooms: number
  size: string
  garage: number | string
  badge?: string
  buttonText: string
  id: string
}

const DiscountPropertyCard: React.FC<PropertyCardProps> = ({
  slug,
  image = '/placeholder.jpg', // Default image
  title,
  propDestination,
  propDestinationSub,
  price,
  bedrooms,
  bathrooms,
  size,
  garage,
  badge,
  buttonText,
  id,
}) => {
  return (
    <Link href={`/property/${title}/${slug}`} target="_blank" rel="noopener noreferrer">
      <div className="group bg-white border border-[#F1F1F1] overflow-hidden relative transition-all duration-500 hover:shadow-lg">
        {/* Wrapper to Move Image & Content Up More */}
        <div className="relative transition-all duration-500 group-hover:-translate-y-20">
          {/* Property Image */}
          <div className="relative w-full h-56">
            {image ? (
              <Image
                src={image}
                alt={title || 'Property Image'}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500"
              />
            ) : (
              <div className="w-full h-56 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500 text-sm">No Image Available</p>
              </div>
            )}
            {badge && (
              <div className="absolute top-[60px] left-0 w-full bg-[#CB6ABA] text-white text-center py-2 text-xs font-semibold transform -translate-y-1/2">
                {badge}
              </div>
            )}
          </div>

          {/* Property Details */}
          <div className="pt-4 px-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex items-center text-gray-500 text-[13px] mt-1">
              <FaMapMarkerAlt className="mr-1 text-black" />
              {propDestination}, {propDestinationSub}
            </div>
            <p className="text-[#71AE4C] font-semibold text-lg mt-2">{price}</p>

            {/* Property Features */}
            <div className="-mx-4 mt-4 grid grid-cols-2 gap-0 text-sm bg-[#F1F1F1] text-[#181818] px-4 py-3">
              <div className="flex text-[12px] items-center gap-2 border-b border-r border-[#DADADA] pb-2 pr-2">
                <FaBed /> {bedrooms} Beds
              </div>
              <div className="flex text-[12px] items-center gap-2 border-b border-[#DADADA] pb-2 pl-2">
                <FaBath /> {bathrooms} Baths
              </div>
              <div className="flex text-[12px] items-center gap-2 border-r border-[#DADADA] pt-2 pr-2">
                <FaRulerCombined /> {size}
              </div>
              <div className="flex text-[12px] items-center gap-2 pt-2 pl-2">
                <FaCar /> {garage} Garage
              </div>
            </div>
          </div>
        </div>

        {/* Button - Smooth Fade In/Out */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <Link href={`/property/${title}/${slug}`} target="_blank" rel="noopener noreferrer">
            <DiscountButton buttonText={buttonText} />
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default DiscountPropertyCard
