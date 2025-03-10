import { FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'

const PropertyInfo = () => {
  return (
    <div className="">
      <h2 className="text-4xl font-medium text-[#CB6ABA] mb-4">Price: ₱4,500,000</h2>
      <p className="text-2xl font-semibold mt-1 mb-3">Modern Family Home</p>
      <p className="text-gray-500 flex items-center gap-2">
        <CiLocationOn size={25} />
        <span>Noveleta, Cavite</span>
      </p>

      {/* Icons Section */}
      <div className="flex flex-wrap bg-gray-100 py-3 px-6 rounded-lg mt-4 w-full sm:w-fit gap-4 sm:gap-[14px] items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap">
          <FaBed fill="#6D6D6C" size={15} />
          <span className="flex items-center gap-1">
            <span className="text-[14px]">2</span> <span className="text-sm">Bedrooms</span>
          </span>
        </div>
        <div className="h-10 w-px bg-gray-300 hidden sm:block"></div>
        <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap">
          <FaBath fill="#6D6D6C" size={15} />
          <span className="flex items-center gap-1">
            <span className="text-[14px]">2</span> <span className="text-sm">Bathrooms</span>
          </span>
        </div>
        <div className="h-10 w-px bg-gray-300 hidden sm:block"></div>
        <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap">
          <FaRulerCombined size={15} fill="#6D6D6C" />
          <span className="flex items-center gap-1">
            <span className="text-[14px]">380</span> <span className="text-sm">Sq Ft</span>
          </span>
        </div>
        <div className="h-10 w-px bg-gray-300 hidden sm:block"></div>
        <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap">
          <FaCar size={15} fill="#6D6D6C" />
          <span className="flex items-center gap-1">
            <span className="text-[14px]">1</span> <span className="text-sm">Car Garage</span>
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="flex flex-wrap gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 mt-6 text-gray-800">
        {/* Property Items */}
        {[
          { label: 'Property Type', value: 'House & Lot' },
          { label: 'Lot Area', value: '120 sqm' },
          { label: 'Destination', value: 'Jordan Estate Subd., San Jose 2, Noveleta, Cavite' },
          { label: 'Floor Area', value: '90 sqm' },
          { label: 'Status', value: 'Ready for occupancy' },
          { label: 'Ownership', value: 'Freehold' },
          { label: 'Year Built', value: '2023' },
          { label: 'Parking Space', value: '1 Car' },
          { label: 'Furnishing', value: 'Semi-furnished' },
        ].map((item, index) => (
          <div key={index} className="w-[calc(50%-8px)] sm:w-full max-w-[250px]">
            <span className="block font-medium text-[#858585]">{item.label}</span>
            <p className="text-[14px] text-[#000000]">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyInfo
