'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { fetchTeamMembers } from '../../utils/api'
import Skeleton from './Skeleton'
import Link from 'next/link'
import Image from 'next/image'

interface TeamMember {
  emp_name: string
  emp_designation: string
  emp_fb?: string
  emp_wa?: string
  url?: string
}

interface TeamModalProps {
  isOpen: boolean
  onClose: () => void
}

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose }) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      getTeamMembers()
    }
  }, [isOpen])

  const getTeamMembers = async () => {
    setLoading(true)
    const members = await fetchTeamMembers()
    setTeamMembers(members)
    setLoading(false)
  }

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
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Our Team Members</h2>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                {Array.from({ length: teamMembers.length }).map((_, index) => (
                  <Skeleton key={index} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="border shadow-md p-3 sm:p-4 text-center rounded-lg">
                    <Image
                      width={40}
                      height={40}
                      src={member.url || '/default-profile.png'}
                      alt={member.emp_name}
                      className="w-full h-auto max-h-40 sm:max-h-56 object-contain rounded-md"
                    />
                    <h3 className="text-sm sm:text-lg font-semibold mt-2">{member.emp_name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">{member.emp_designation}</p>
                    <div className="flex justify-center gap-2 sm:gap-3 mt-2">
                      {member.emp_fb && (
                        <Link href={member.emp_fb} target="_blank" rel="noopener noreferrer">
                          <FaFacebook className="text-blue-500 text-lg sm:text-xl cursor-pointer" />
                        </Link>
                      )}
                      {member.emp_wa && (
                        <Link
                          href={`https://wa.me/${member.emp_wa}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaWhatsapp className="text-green-500 text-lg sm:text-xl cursor-pointer" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TeamModal
