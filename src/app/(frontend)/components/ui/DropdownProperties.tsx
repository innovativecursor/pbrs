'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'

interface DropdownProps {
  label: string
  options: string[]
  iconSrc: string
}

const DropdownProperties: React.FC<DropdownProps> = ({ label, options, iconSrc }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(label)

  return (
    <div className="relative bg-[#9DD67B36] p-2 rounded-lg border border-[#71AE4C] mb-4 cursor-pointer">
      {/* Selected Item */}
      <div
        className="flex justify-between items-center p-2 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Left Icon */}
        <img src={iconSrc} alt="Icon" className="w-4 h-4" />

        {/* Centered Text */}
        <span className="absolute left-1/2 transform -translate-x-1/2 text-[#000000] text-[12px]">
          {selected}
        </span>

        {/* Right Chevron */}
        <FaChevronDown
          size={12}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Dropdown Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full w-full bg-white border border-[#71AE4C] rounded-lg shadow-md mt-1 overflow-hidden z-10"
          >
            {options.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-[#9DD67B] text-[12px] hover:text-white transition-all"
                onClick={() => {
                  setSelected(option)
                  setIsOpen(false)
                }}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DropdownProperties
