import { TiTickOutline } from 'react-icons/ti'

const HomeInteriorDetails = () => {
  return (
    <div className="my-8 pt-6">
      <h2 className="text-2xl font-semibold mb-4">Home Interior Details</h2>
      <div className="border rounded-lg grid grid-cols-2">
        <div className="border-b border-r p-6">
          <h3 className="font-medium">Living room</h3>
          <p className="text-[#181818] text-[14px] mt-1">
            Spacious living room with natural light and high ceilings
          </p>
        </div>
        <div className="border-b p-6">
          <h3 className="font-medium">Dining Area</h3>
          <p className="text-[#181818] text-[14px] mt-1">
            Elegant dining area with modern lighting fixtures
          </p>
        </div>

        {/* Bedroom + Additional Details */}
        <div className="border-b p-1 col-span-2 grid grid-cols-2">
          <div className="p-6">
            <h3 className="font-medium">Bedroom</h3>
            <ul className="list-none space-y-1">
              <li className="flex items-center">
                <TiTickOutline fill="#71AE4C" size={20} />{' '}
                <span className="text-[#181818] text-[14px] mt-1">
                  Master bedroom with walk-in closet and en-suite bathroom
                </span>
              </li>
              <li className="flex items-center">
                <TiTickOutline fill="#71AE4C" size={20} />{' '}
                <span className="text-[#181818] text-[14px] mt-1">
                  Additional bedrooms with ample storage space
                </span>
              </li>
              <li className="flex items-center">
                <TiTickOutline fill="#71AE4C" size={20} />{' '}
                <span className="text-[#181818] text-[14px] mt-1">
                  Energy-efficient lighting and ventilation
                </span>
              </li>
            </ul>
          </div>
          <div className="p-6 mt-6">
            <ul className="list-none space-y-1">
              <li className="flex items-center">
                <TiTickOutline fill="#71AE4C" size={20} />
                <span className="text-[#181818] text-[14px] mt-1">
                  Contemporary bathrooms with premium fixtures
                </span>
              </li>
              <li className="flex items-center">
                <TiTickOutline fill="#71AE4C" size={20} />
                <span className="text-[#181818] text-[14px] mt-1">
                  {' '}
                  Wooden flooring in bedrooms and tiled flooring in common areas
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bathroom and Kitchen - In the same row */}
        <div className="border-r p-6">
          <h3 className="font-medium">Bathroom</h3>
          <p className="text-[#181818] text-[14px] mt-1">
            Contemporary bathrooms with premium fixtures
          </p>
        </div>
        <div className="p-6">
          <h3 className="font-medium">Kitchen</h3>
          <p className="text-[#181818] text-[14px] mt-1">
            Fully equipped kitchen with granite countertops and built-in cabinets
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeInteriorDetails
