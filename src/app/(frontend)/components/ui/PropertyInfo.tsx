import { FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'

interface Property {
  prop_price: number
  prop_name: string
  prop_location: {
    location_city: string
    location_province: string
  }
  bedrooms: number
  bathrooms: number
  garages: number
  prop_size: number
  prop_type: {
    property_type: string
  }
  lot_area: number
  prop_destination: string
  prop_status: string
  prop_furnishing: string
  prop_ownership: string
  prop_year: number
  prop_pkSpace: number
}

const PropertyInfo = ({ property }: { property: Property | null }) => {
  if (!property) {
    return <div>Loading...</div> // You can replace this with a more user-friendly loader
  }
  return (
    <div className="">
      <h2 className="text-4xl font-medium text-[#CB6ABA] mb-4">
        Price: ₱{property.prop_price.toLocaleString()}
      </h2>
      <p className="text-2xl font-semibold mt-1 mb-3">{property.prop_name}</p>
      <p className="text-gray-500 flex items-center gap-2">
        <CiLocationOn size={25} />
        <span>
          {property.prop_location?.location_city}, {property.prop_location?.location_province}
        </span>
      </p>

      {/* Icons Section */}
      <div className="flex flex-wrap bg-gray-100 py-3 px-6 rounded-lg mt-4 w-full sm:w-fit gap-4 sm:gap-[14px] items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap">
          <FaBed fill="#6D6D6C" size={15} />
          <span className="flex items-center gap-1">
            <span className="text-[14px]">{property.bedrooms}</span>{' '}
            <span className="text-sm">Bedrooms</span>
          </span>
        </div>
        <div className="h-10 w-px bg-gray-300 hidden sm:block"></div>
        <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap">
          <FaBath fill="#6D6D6C" size={15} />
          <span className="flex items-center gap-1">
            <span className="text-[14px]">{property.bathrooms}</span>{' '}
            <span className="text-sm">Bathrooms</span>
          </span>
        </div>
        <div className="h-10 w-px bg-gray-300 hidden sm:block"></div>
        <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap">
          <FaRulerCombined size={15} fill="#6D6D6C" />
          <span className="flex items-center gap-1">
            <span className="text-[14px]">{property.prop_size}</span>{' '}
            <span className="text-sm">Sq Ft</span>
          </span>
        </div>
        <div className="h-10 w-px bg-gray-300 hidden sm:block"></div>
        <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap">
          <FaCar size={15} fill="#6D6D6C" />
          <span className="flex items-center gap-1">
            <span className="text-[14px]">{property.garages}</span>{' '}
            <span className="text-sm">Car Garage</span>
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="flex flex-wrap gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 mt-6 text-gray-800">
        {/* Property Items */}
        {[
          { label: 'Property Type', value: property.prop_type?.property_type || 'N/A' },
          { label: 'Lot Area', value: `${property.lot_area} sqm` },
          { label: 'Destination', value: property.prop_destination || 'N/A' },
          { label: 'Status', value: property.prop_status || 'N/A' },
          { label: 'Ownership', value: property.prop_ownership || 'N/A' },
          {
            label: 'Year Built',
            value: property.prop_year ? new Date(property.prop_year).getFullYear() : 'N/A',
          },
          { label: 'Parking Space', value: property.prop_pkSpace || 'N/A' },
          { label: 'Furnishing', value: property.prop_furnishing || 'N/A' },
        ].map((item, index) => (
          <div key={index} className="w-[calc(50%-8px)] sm:w-full max-w-[250px]">
            <span className="block font-medium text-[#858585]">{item.label}</span>
            <p className="text-[14px] font-semibold text-[#000000]">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyInfo
