import { FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa'
import { IoArrowBackOutline } from 'react-icons/io5'

const PropertyInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Back Button */}

      <h2 className="text-3xl font-bold text-purple-600">Price: ₱4,500,000</h2>
      <p className="text-xl font-semibold mt-1">Modern Family Home</p>
      <p className="text-gray-500">📍 Noveleta, Cavite</p>

      {/* Icons Section */}
      <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg mt-4">
        <span className="flex items-center gap-1 text-gray-700">
          <FaBed /> 2 Bedrooms
        </span>
        <span className="flex items-center gap-1 text-gray-700">
          <FaBath /> 2 Bathrooms
        </span>
        <span className="flex items-center gap-1 text-gray-700">
          <FaRulerCombined /> 380 Sq Ft
        </span>
        <span className="flex items-center gap-1 text-gray-700">
          <FaCar /> 1 Car Garage
        </span>
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-2 gap-4 mt-4 text-gray-800">
        <p>
          <strong>Property Type:</strong> House & Lot
        </p>
        <p>
          <strong>Lot Area:</strong> 120 sqm
        </p>
        <p>
          <strong>Floor Area:</strong> 90 sqm
        </p>
        <p>
          <strong>Status:</strong> Ready for occupancy
        </p>
        <p>
          <strong>Year Built:</strong> 2023
        </p>
        <p>
          <strong>Parking Space:</strong> 1 Car
        </p>
        <p>
          <strong>Furnishing:</strong> Semi-furnished
        </p>
        <p>
          <strong>Ownership:</strong> Freehold
        </p>
        <p className="col-span-2">
          <strong>Destination:</strong> Jordan Estate Subd., San Jose 2, Noveleta, Cavite
        </p>
      </div>
    </div>
  )
}

export default PropertyInfo
