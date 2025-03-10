import Image from 'next/image'
import { IoMailOutline, IoCallOutline } from 'react-icons/io5'
import salesAgent from '../../public/assets/teamAssets/sales_agent.png'
import salesDirector from '../../public/assets/teamAssets/sales_director.png'

const PropertyAgent = () => {
  return (
    <>
      <h3 className="text-[30px] font-medium mb-4">Property Agent</h3>
      <div className="sticky  self-start bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
        <div className="space-y-4">
          {/* Agent 1 */}
          <div className="flex items-center justify-between border-[0.5px] border-[#C6C6C6] p-4 rounded-lg pb-3">
            <div className="flex items-center space-x-3">
              <Image
                src={salesAgent}
                alt="Roselyn Cortez"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-normal text-[#181818]">Roselyn Cortez</p>
                <p className="text-[12px] text-[#909090]">Sales Agent</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <IoMailOutline className="text-[#CB6ABA]" size={20} />
              <IoCallOutline className="text-[#CB6ABA]" size={20} />
            </div>
          </div>

          {/* Agent 2 */}
          <div className="flex items-center justify-between border-[0.5px] border-[#C6C6C6] p-4 rounded-lg pb-3">
            <div className="flex items-center space-x-3">
              <Image
                src={salesDirector}
                alt="Helen Victoriano"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-normal text-[#181818]">Helen Victoriano</p>
                <p className="text-[12px] text-[#909090]">Sales Director</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <IoMailOutline className="text-[#CB6ABA]" size={20} />
              <IoCallOutline className="text-[#CB6ABA]" size={20} />
            </div>
          </div>

          {/* Schedule Button */}
          <button className="w-full bg-[#CB6ABA] text-white text-[13px] font-medium py-2 rounded-lg mt-2 transition hover:bg-[black] cursor-pointer">
            Schedule a Viewing
          </button>
        </div>
      </div>
    </>
  )
}

export default PropertyAgent
