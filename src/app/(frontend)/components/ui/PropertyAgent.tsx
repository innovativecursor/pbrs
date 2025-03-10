'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { IoMailOutline, IoCallOutline } from 'react-icons/io5'
import salesAgent from '../../public/assets/teamAssets/sales_agent.png'
import salesDirector from '../../public/assets/teamAssets/sales_director.png'

const PropertyAgent = () => {
  const containerRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768) // Check if screen width is >= 768px (MD breakpoint)
    }
    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Move the agent within the scroll area (Only for desktop)
  const yTransform = useTransform(scrollYProgress, [0, 1], [-25, 450])

  return (
    <div ref={containerRef} className="relative ">
      {' '}
      {/* Add `mt-4` to reduce space */}
      <h3 className="text-[28px] font-medium mb-2">Property Agent</h3>
      {isDesktop ? (
        <motion.div
          className="absolute top-0 bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm"
          style={{ y: yTransform }}
        >
          <AgentContent />
        </motion.div>
      ) : (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
          <AgentContent />
        </div>
      )}
    </div>
  )
}

// Extracted content for reuse
const AgentContent = () => (
  <div className="space-y-3">
    {' '}
    {/* Reduced vertical spacing */}
    <AgentCard image={salesAgent} name="Roselyn Cortez" role="Sales Agent" />
    <AgentCard image={salesDirector} name="Helen Victoriano" role="Sales Director" />
    <button className="w-full bg-[#CB6ABA] text-white text-[13px] font-medium py-2 rounded-lg mt-2 transition hover:bg-[black] cursor-pointer">
      Schedule a Viewing
    </button>
  </div>
)

// Reusable Agent Card Component
const AgentCard = ({ image, name, role }) => (
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
