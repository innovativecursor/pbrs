import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'

import PropertiesViewBtn from './PropertiesViewBtn'

interface PropertyListItemProps {
  image: string
  title: string
  propDestination: string
  propDestinationSub: string
  price: string
  bedrooms: number
  bathrooms: number
  size: string
  garage: number
  id: string
}

const PropertyListItem: React.FC<PropertyListItemProps> = ({
  image,
  title,
  propDestination,
  propDestinationSub,
  price,
  bedrooms,
  bathrooms,
  size,
  garage,
  id,
}) => {
  return (
    <Link href={`/property/${id}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-white border border-[#F1F1F1] rounded-lg overflow-hidden items-center gap-6">
        {/* Column 1: Image */}
        <div className="relative w-full md:w-48 h-40 md:h-32">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500"
            priority // Forces the image to load first
            unoptimized // Avoid Next.js optimization issues
          />
        </div>

        {/* Column 2: Property Details */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex justify-center md:justify-start items-center text-gray-500 text-sm mt-1">
            <FaMapMarkerAlt className="mr-1" />
            {propDestination}, {propDestinationSub}
          </div>
          <p className="text-[#71AE4C] font-semibold text-lg mt-2">{price}</p>
        </div>

        {/* Column 3: Features */}
        <div className="bg-gray-100 w-full h-full p-2 flex items-center justify-center">
          <div className="grid grid-cols-2 w-full h-full">
            <div className="flex text-[11px] items-center gap-2 border-b border-r border-[#DADADA] p-2">
              <FaBed />
              {bedrooms ? `${bedrooms} Beds` : 'N/A'}
            </div>
            <div className="flex text-[11px] items-center gap-2 border-b border-[#DADADA] p-2">
              <FaBath />
              {bathrooms ? `${bathrooms} Baths` : 'N/A'}
            </div>
            <div className="flex text-[11px] items-center gap-2 border-r border-[#DADADA] p-2">
              <FaRulerCombined />
              {size && size.trim() !== '' ? size : 'N/A'}
            </div>
            <div className="flex text-[11px] items-center gap-2 p-2">
              <FaCar />
              {garage ? `${garage} Garage` : 'No Garage'}
            </div>
          </div>
        </div>

        {/* Column 4: Button */}
        <div className="flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0 p-4 ">
          <PropertiesViewBtn label="View Details" />
        </div>
      </div>
    </Link>
  )
}

export default PropertyListItem
