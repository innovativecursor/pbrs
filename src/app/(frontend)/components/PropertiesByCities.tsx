import Image from 'next/image'

const PropertiesByCities = () => {
  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h3 className="text-green-600 text-sm uppercase font-semibold">Properties by Cities</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">
          Find Your Dream Property in Your Preferred Location
        </h2>

        {/* Cities Grid */}

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
            View All
          </button>
        </div>
      </section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {['city1.jpg', 'city2.jpg', 'city3.jpg', 'city4.jpg', 'city5.jpg'].map((img, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={`/assets/cities/${img}`}
              alt={`City ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default PropertiesByCities
