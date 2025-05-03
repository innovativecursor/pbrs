'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { IoMailOutline, IoCallOutline } from 'react-icons/io5'
import salesAgent from '../../public/assets/teamAssets/sales_agent.png'
import salesDirector from '../../public/assets/teamAssets/sales_director.png'
interface AgentCardProps {
  image: string
  name: string
  role: string
}

const PropertyAgent = () => {
  const containerRef = useRef(null)
  const [deviceType, setDeviceType] = useState('mobile')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setDeviceType('desktop') // Large screens
      } else if (width >= 768) {
        setDeviceType('tablet') // iPad screens
      } else {
        setDeviceType('mobile') // Phones
      }
    }
    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Adjusted animation for tablets
  const yTransform = useTransform(
    scrollYProgress,
    [0, 1],
    deviceType === 'desktop' ? [-25, 340] : deviceType === 'tablet' ? [1, 500] : [0, 0],
  )

  return (
    <div ref={containerRef} className="relative w-full">
      <h3 className="text-[28px] font-medium mb-2">Property Agent</h3>
      {deviceType !== 'mobile' ? (
        <motion.div
          className="absolute top-0 bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm mt-8" // Added margin-top
          style={{ y: yTransform }}
        >
          <AgentContent />
        </motion.div>
      ) : (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-[90%] mx-auto">
          <AgentContent />
        </div>
      )}
    </div>
  )
}

// Extracted content for reuse
const AgentContent = () => (
  <div className="space-y-3">
    <AgentCard image={salesAgent.src} name="Roselyn Cortez" role="Sales Agent" />
    <AgentCard image={salesDirector.src} name="Helen Victoriano" role="Sales Director" />
    <button className="w-full bg-[#CB6ABA] text-white text-[13px] font-medium py-2 rounded-lg mt-2 transition hover:bg-[black] cursor-pointer">
      Schedule a Viewing
    </button>
  </div>
)

// Reusable Agent Card Component
const AgentCard: React.FC<AgentCardProps> = ({ image, name, role }) => (
  <div className="flex items-center justify-between border-[0.5px] border-[#C6C6C6] p-4 rounded-lg pb-3">
    <div className="flex items-center space-x-3">
      <Image src={image} alt={name} width={60} height={60} className="rounded-full" />
      <div>
        <p className="font-normal text-[#181818]">{name}</p>
        <p className="text-[12px] text-[#909090]">{role}</p>
      </div>
    </div>
    <div className="flex space-x-2">
      <IoMailOutline className="text-[#CB6ABA]" size={20} />
      <IoCallOutline className="text-[#CB6ABA]" size={20} />
    </div>
  </div>
)

export default PropertyAgent
