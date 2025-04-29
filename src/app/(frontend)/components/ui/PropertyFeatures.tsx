import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fetchPropertyById } from '../../utils/api'

import image1 from '../../public/assets/propertyImages/image_1.png'
import image2 from '../../public/assets/propertyImages/image_2.png'
import image3 from '../../public/assets/propertyImages/image_3.png'
import image4 from '../../public/assets/propertyImages/image_4.png'
import image5 from '../../public/assets/propertyImages/image_5.png'
import image6 from '../../public/assets/propertyImages/image_6.png'
import image7 from '../../public/assets/propertyImages/image_7.png'
import image8 from '../../public/assets/propertyImages/image_8.png'
import image9 from '../../public/assets/propertyImages/image_9.png'
import image10 from '../../public/assets/propertyImages/image_10.png'

const PropertyFeatures = ({ property }) => {
  return (
    <div className="pt-8 md:col-span-2">
      <h2 className="text-2xl font-medium mb-8">Features & Amenities</h2>
      <ul className="space-y-4 sm:space-y-6">
        {property?.feature_gated && (
          <li className="flex items-center gap-4 sm:gap-6">
            <Image src={image1} alt="Security" className="w-5 h-5 green-filter" />
            <span className="text-sm sm:text-[14px]">Gated community with 24/7 security</span>
          </li>
        )}
        {property?.feature_spacious && (
          <li className="flex items-center gap-4 sm:gap-6">
            <Image src={image2} alt="Living Area" className="w-5 h-5 green-filter" />
            <span className="text-sm sm:text-[14px]">Spacious living and dining areas</span>
          </li>
        )}
        {property?.feature_kitchen_cabinets && (
          <li className="flex items-center gap-4 sm:gap-6">
            <Image src={image3} alt="Kitchen" className="w-5 h-5 green-filter" />
            <span className="text-sm sm:text-[14px]">Modern kitchen with built-in cabinets</span>
          </li>
        )}
        {property?.feature_bedroom && (
          <li className="flex items-center gap-4 sm:gap-6">
            <Image src={image4} alt="Bedroom" className="w-5 h-5 green-filter" />
            <span className="text-sm sm:text-[14px]">Master bedroom with en-suite bathroom</span>
          </li>
        )}
        {property?.feature_covered_garage && (
          <li className="flex items-center gap-4 sm:gap-6">
            <Image src={image5} alt="Garage" className="w-5 h-5 green-filter" />
            <span className="text-sm sm:text-[14px]">Covered car garage</span>
          </li>
        )}
        {property?.feature_proximity && (
          <li className="flex items-center gap-4 sm:gap-6">
            <Image src={image7} alt="Proximity" className="w-5 h-5 green-filter" />
            <span className="text-sm sm:text-[14px]">
              Proximity to schools, malls, and hospitals
            </span>
          </li>
        )}
        {property?.feature_internet && (
          <li className="flex items-center gap-4 sm:gap-6">
            <Image src={image8} alt="Internet" className="w-5 h-5 green-filter" />
            <span className="text-sm sm:text-[14px]">Fiber-optic internet ready</span>
          </li>
        )}
        {property?.feature_play_clubhouse && (
          <li className="flex items-center gap-4 sm:gap-6">
            <Image src={image9} alt="Playground" className="w-5 h-5 green-filter" />
            <span className="text-sm sm:text-[14px]">Nearby playground and clubhouse</span>
          </li>
        )}
        {property?.feature_pet_friendly && (
          <li className="flex items-center gap-4 sm:gap-6">
            <Image src={image10} alt="Pet Friendly" className="w-5 h-5 green-filter" />
            <span className="text-sm sm:text-[14px]">Pet-friendly community</span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default PropertyFeatures
