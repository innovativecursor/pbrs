import Link from 'next/link'
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'
import ViewDetailsButton from './ViewDetailsButton'

interface PropertyCardProps {
  id: string
  image: string
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  area: number
  garage: number
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  garage,
}) => {
  return (
    <div className="group bg-white border border-[#F1F1F1] overflow-hidden relative transition-all duration-500 hover:shadow-lg">
      <Link href={`/property/${id}`} passHref>
        {/* Wrapper to Move Image & Content Up More */}
        <div className="relative transition-all duration-500 group-hover:-translate-y-20">
          {/* Property Image */}
          <div className="relative w-full h-56">
            <img
              src={image}
              alt={title}
              className="transition-all duration-500 object-cover w-full h-full"
            />
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
            <div className="-mx-4 mt-4 bg-[#F1F1F1] text-[#181818] text-sm grid grid-cols-2 gap-2 px-4 py-3">
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
                {area} sq Ft
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
          <ViewDetailsButton label="View Details" />
        </div>
      </Link>
    </div>
  )
}

export default PropertyCard
