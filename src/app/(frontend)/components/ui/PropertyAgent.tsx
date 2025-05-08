'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { IoMailOutline, IoCallOutline } from 'react-icons/io5'
import Link from 'next/link'
import { fetchTeamMembers } from '../../utils/api'
interface AgentCardProps {
  image: string
  name: string
  role: string
  email?: string
  phone?: string
}
interface TeamMember {
  url: string
  emp_name: string
  emp_designation: string
  emp_email?: string
  emp_phone?: string // changed from number to string to match Payload field
  emp_support?: boolean
}
const PropertyAgent = () => {
  const containerRef = useRef(null)
  const [deviceType, setDeviceType] = useState('mobile')
  const [propAgent, setPropAgent] = useState<TeamMember[]>([])
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
    getTeamMem()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const getTeamMem = async () => {
    const res = await fetchTeamMembers()
    setPropAgent(res)
  }
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Adjusted animation for tablets
  const yTransform = useTransform(
    scrollYProgress,
    [0, 1],
    deviceType === 'desktop' ? [-10, 100] : deviceType === 'tablet' ? [1, 100] : [0, 0],
  )

  return (
    <div ref={containerRef} className="relative w-full">
      <h3 className="text-[28px] font-medium mb-2">Property Agent</h3>
      {deviceType !== 'mobile' ? (
        <motion.div
          className="absolute top-0 bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm mt-8" // Added margin-top
          style={{ y: yTransform }}
        >
          <AgentContent agents={propAgent.filter((agent) => agent.emp_support)} />
        </motion.div>
      ) : (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-[90%] mx-auto">
          <AgentContent agents={propAgent.filter((agent) => agent.emp_support)} />
        </div>
      )}
    </div>
  )
}

// Extracted content for reuse
const AgentContent: React.FC<{ agents: TeamMember[] }> = ({ agents }) => (
  <div className="space-y-3">
    {agents.map((agent, i) => (
      <AgentCard
        key={i}
        image={agent.url} // or dynamically based on index, etc.
        name={agent.emp_name}
        role={agent.emp_designation}
        email={agent.emp_email}
        phone={agent.emp_phone}
      />
    ))}
    <Link
      href="https://www.facebook.com/paulbalitarealtyservicespbrs"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="w-full bg-[#CB6ABA] text-white text-[13px] font-medium py-2 rounded-lg mt-2 transition hover:bg-[black] cursor-pointer">
        Schedule a Viewing
      </button>
    </Link>
  </div>
)

// Reusable Agent Card Component
const AgentCard: React.FC<AgentCardProps> = ({ image, name, role, email, phone }) => (
  <div className="flex items-center justify-between border-[0.5px] border-[#C6C6C6] p-4 rounded-lg pb-3">
    <div className="flex items-center space-x-3">
      <Image src={image} alt={name} width={60} height={60} className="rounded-full" />
      <div>
        <p className="font-normal text-[#181818]">{name}</p>
        <p className="text-[12px] text-[#909090]">{role}</p>
      </div>
    </div>
    <div className="flex space-x-2">
      {email && (
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          <IoMailOutline className="text-[#CB6ABA]" size={20} />
        </a>
      )}
      {phone && (
        <a href={`tel:${phone}`}>
          <IoCallOutline className="text-[#CB6ABA]" size={20} />
        </a>
      )}
    </div>
  </div>
)

export default PropertyAgent
