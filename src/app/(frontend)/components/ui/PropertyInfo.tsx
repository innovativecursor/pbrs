const PropertyInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-600">Price: ₱4,500,000</h2>
      <p className="text-lg font-semibold">Modern Family Home</p>
      <p className="text-gray-500">Noveleta, Cavite</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
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
      </div>
    </div>
  )
}

export default PropertyInfo
