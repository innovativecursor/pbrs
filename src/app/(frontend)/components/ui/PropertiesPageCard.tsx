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
        <div className="pt-4 px-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center text-gray-500 text-[13px] mt-1">
            <FaMapMarkerAlt className="mr-1" />
            {propDestination}, {propDestinationSub}
          </div>
          <p className="text-[#71AE4C] font-semibold text-lg mt-2">{price}</p>

          {/* Property Features */}
          <div className="-mx-4 mt-4 grid grid-cols-2 gap-0 text-sm bg-[#F1F1F1] text-[#181818] px-4 py-3">
            <div className="flex text-[12px] items-center gap-2 border-b border-r border-[#DADADA] pb-2 pr-2">
              <FaBed />
              {bedrooms ? `${bedrooms} Bedrooms` : 'N/A'}
            </div>
            <div className="flex text-[12px] items-center gap-2 border-b border-[#DADADA] pb-2 pl-2">
              <FaBath />
              {bathrooms ? `${bathrooms} Bathrooms` : 'N/A'}
            </div>
            <div className="flex text-[12px] items-center gap-2 border-r border-[#DADADA] pt-2 pr-2">
              <FaRulerCombined />
              {lotArea ? `${lotArea} sq Ft` : 'N/A'}
            </div>
            <div className="flex text-[12px] items-center gap-2 pt-2 pl-2">
              <FaCar />
              {garage ? `${garage} Garage` : 'No Garage'}
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
  )
}

export default PropertiesPageCard
