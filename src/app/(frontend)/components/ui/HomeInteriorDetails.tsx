import { TiTickOutline } from 'react-icons/ti'

interface HomeInteriorDetailsProps {
  livingRoomDesc?: string
  diningRoomDesc?: string
  bedroomDesc?: string
  bathroomDesc?: string
  kitchenDesc?: string
}

const HomeInteriorDetails: React.FC<HomeInteriorDetailsProps> = ({
  livingRoomDesc,
  diningRoomDesc,
  bedroomDesc,
  bathroomDesc,
  kitchenDesc,
}) => {
  const getContent = (value?: string) => value?.trim() || 'N/A'
  const isValid = (value?: string) => Boolean(value?.trim())

  return (
    <div className="my-8 pt-6">
      <h2 className="text-2xl font-medium mb-4">Home Interior Details</h2>
      <div className="border-[0.5px] border-[#ACACAC] rounded-lg grid sm:grid-cols-1 md:grid-cols-2">
        <div className="border-b md:border-r border-[0.5px] border-[#ACACAC] p-6">
          <h3 className="font-medium">Living room</h3>
          <p className="text-[#181818] text-[14px] mt-1">{getContent(livingRoomDesc)}</p>
        </div>
        <div className="border-[0.5px] border-[#ACACAC] p-6">
          <h3 className="font-medium">Dining Area</h3>
          <p className="text-[#181818] text-[14px] mt-1">{getContent(diningRoomDesc)}</p>
        </div>

        {/* Bedroom + Bathroom - with conditional icon */}
        <div className="border-[0.5px] border-[#ACACAC] p-1 col-span-2 grid sm:grid-cols-1 md:grid-cols-2">
          <div className="p-6">
            <h3 className="font-medium">Bedroom</h3>
            <ul className="list-none space-y-1">
              <li className="flex items-center">
                {isValid(bedroomDesc) && <TiTickOutline fill="#71AE4C" size={20} />}
                <span className="text-[#181818] text-[14px] mt-1 ml-2">
                  {getContent(bedroomDesc)}
                </span>
              </li>
            </ul>
          </div>
          <div className="p-6 mt-6">
            <ul className="list-none space-y-1">
              <li className="flex items-center">
                {isValid(bathroomDesc) && <TiTickOutline fill="#71AE4C" size={20} />}
                <span className="text-[#181818] text-[14px] mt-1 ml-2">
                  {getContent(bathroomDesc)}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separate Bathroom and Kitchen */}
        <div className="border-b md:border-b-0 md:border-r border-[0.5px] border-[#ACACAC] p-6">
          <h3 className="font-medium">Bathroom</h3>
          <p className="text-[#181818] text-[14px] mt-1">{getContent(bathroomDesc)}</p>
        </div>
        <div className="p-6">
          <h3 className="font-medium">Kitchen</h3>
          <p className="text-[#181818] text-[14px] mt-1">{getContent(kitchenDesc)}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeInteriorDetails
