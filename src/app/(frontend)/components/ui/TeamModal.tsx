'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import ceoImage from '../../public/assets/teamAssets/ceo_image.png'
import salesDirectorImage from '../../public/assets/teamAssets/sales_director.png'
import salesAgentImage from '../../public/assets/teamAssets/sales_agent.png'

interface TeamMember {
  name: string
  role: string
  image: string
}

interface TeamModalProps {
  isOpen: boolean
  onClose: () => void
}

const teamMembers: TeamMember[] = [
  {
    name: 'Paul Balita',
    role: 'Owner',
    image: ceoImage.src,
  },
  {
    name: 'Helen Victoriano',
    role: 'Sales Director',
    image: salesDirectorImage.src,
  },
  {
    name: 'Roselyn Cortez',
    role: 'Sales Agent',
    image: salesAgentImage.src,
  },
]

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(128, 128, 128, 0.4))',
            backdropFilter: 'blur(5px)',
          }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-3xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-2xl font-bold text-center mb-4">Our Team Member</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="border shadow-md p-4 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                  <div className="flex justify-center gap-3 mt-2">
                    <FaFacebook className="text-green-500 text-xl cursor-pointer" />
                    <FaWhatsapp className="text-green-500 text-xl cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TeamModal
