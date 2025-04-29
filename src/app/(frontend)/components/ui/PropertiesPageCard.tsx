import Link from 'next/link'
import Image from 'next/image'
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'
import PropertiesViewBtn from './PropertiesViewBtn'

interface PropertyCardProps {
  image: string
  title: string
  propDestination: string
  propDestinationSub: string
  price: string
  bedrooms: number
  bathrooms: number
  lotArea: number
  garage: number
  id: string // Unique identifier for each property
}

const PropertiesPageCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  propDestination,
  propDestinationSub,
  price,
  bedrooms,
  bathrooms,
  lotArea,
  garage,
  id,
}) => {
  return (
    <Link href={`/property/${id}`}>
      <div className="group bg-white border border-[#F1F1F1] overflow-hidden relative transition-all duration-500 hover:shadow-lg cursor-pointer">
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
              priority // Forces the image to load first
              unoptimized // Avoid Next.js optimization issues
            />
          </div>

          {/* Property Details */}
          <div className="p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex items-center text-gray-500 text-[13px] mt-1">
              <FaMapMarkerAlt className="mr-1" />
              {propDestination}, {propDestinationSub}
            </div>
            <p className="text-[#71AE4C] font-semibold text-lg mt-2">{price}</p>

            {/* Property Features */}
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-4">
              <div className="flex items-center gap-2">
                <FaBed />
                {bedrooms} Bedrooms
              </div>
              <div className="flex items-center gap-2">
                <FaBath />
                {bathrooms} Bathrooms
              </div>
              <div className="flex items-center gap-2">
                <FaRulerCombined />
                {lotArea} sq Ft
              </div>
              <div className="flex items-center gap-2">
                <FaCar />
                {garage} Garage
              </div>
            </div>
          </div>
        </div>

        {/* Button - Smooth Fade In/Out */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <Link href={`/property/${id}`}>
            <PropertiesViewBtn label="View Details" />
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default PropertiesPageCard
