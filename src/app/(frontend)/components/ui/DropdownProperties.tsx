'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'

interface DropdownProps {
  label: string
  options: string[]
  iconSrc: string
  onChange: (option: string) => void
}

const DropdownProperties: React.FC<DropdownProps> = ({ label, options, iconSrc, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(label)

  return (
    <div className="relative bg-[#9DD67B36] p-2 rounded-lg border border-[#71AE4C] mb-4 cursor-pointer">
      <div
        className="flex justify-between items-center p-2 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={iconSrc} alt="Icon" className="w-4 h-4" />
        <span className="absolute left-1/2 transform -translate-x-1/2 text-[#000000] text-[12px]">
          {selected}
        </span>
        <FaChevronDown
          size={12}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Dropdown Options with Smooth Framer Motion Transition */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute left-0 top-full w-full bg-white border border-[#71AE4C] rounded-lg shadow-md mt-1 overflow-hidden z-10"
          >
            {options.map((option, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-2 hover:bg-[#9DD67B] text-[12px] hover:text-white transition-all cursor-pointer"
                onClick={() => {
                  setSelected(option)
                  setIsOpen(false)
                  onChange(option)
                }}
              >
                {option}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DropdownProperties
