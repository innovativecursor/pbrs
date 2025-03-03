import React from 'react'
import Image from 'next/image'
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'

import PropertiesViewBtn from './PropertiesViewBtn'

interface PropertyListItemProps {
  image: string
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  size: string
  garage: number
}

const PropertyListItem: React.FC<PropertyListItemProps> = ({
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  size,
  garage,
}) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 bg-white border border-[#F1F1F1] rounded-lg overflow-hidden items-center gap-6">
      {/* Column 1: Image */}
      <div className="relative w-full md:w-48 h-40 md:h-32">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>

      {/* Column 2: Property Details */}
      <div className="text-center md:text-left">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex justify-center md:justify-start items-center text-gray-500 text-sm mt-1">
          <FaMapMarkerAlt className="mr-1" />
          {location}
        </div>
        <p className="text-[#71AE4C] font-semibold text-lg mt-2">{price}</p>
      </div>

      {/* Column 3: Features */}
      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 bg-gray-100 p-2 rounded-lg w-full md:w-auto mx-auto">
        <div className="flex items-center gap-2">
          <FaBed />
          {bedrooms} Beds
        </div>
        <div className="flex items-center gap-2">
          <FaBath />
          {bathrooms} Baths
        </div>
        <div className="flex items-center gap-2">
          <FaRulerCombined />
          {size}
        </div>
        <div className="flex items-center gap-2">
          <FaCar />
          {garage} Garage
        </div>
      </div>

      {/* Column 4: Button */}
      <div className="flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0 p-4 ">
        <PropertiesViewBtn label="View Details" />
      </div>
    </div>
  )
}

export default PropertyListItem
