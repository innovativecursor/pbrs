'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'

interface DropdownProps {
  label: string
  options: string[] | null
  iconSrc: string
  selectedItems: string[]
  onChange: (option: string) => void // toggles selection
  isOpen?: boolean // Add this prop to control open state externally
  setIsOpen?: () => void // Add this prop to set open state externally
}

const DropdownProperties: React.FC<DropdownProps> = ({
  label,
  options,
  iconSrc,
  selectedItems,
  onChange,
  isOpen = false,
  setIsOpen,
}) => {
  return (
    <div className="relative bg-[#9DD67B36] p-2 rounded-lg border border-[#71AE4C] mb-4 cursor-pointer">
      <div
        className="flex justify-between items-center p-2 relative"
        onClick={() => setIsOpen?.()} // Control open state from parent
      >
        <Image width={100} height={100} src={iconSrc} alt="Icon" className="w-4 h-4" />
        <span className="absolute left-1/2 transform -translate-x-1/2 text-[#000000] text-[12px]">
          {selectedItems.length > 0 ? selectedItems.join(', ') : label}
        </span>
        <FaChevronDown
          size={12}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute left-0 top-full w-full bg-white border border-[#71AE4C] rounded-lg shadow-md mt-1 overflow-hidden z-10"
          >
            {options === null ? (
              <div className="flex justify-center items-center py-4">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-2 h-2 bg-[#9DD67B] rounded-full mx-1"
                />
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                  className="w-2 h-2 bg-[#9DD67B] rounded-full mx-1"
                />
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                  className="w-2 h-2 bg-[#9DD67B] rounded-full mx-1"
                />
              </div>
            ) : (
              options.map((option, index) => {
                const optionText = String(option)
                const isDisabled = optionText.includes('available')
                const isChecked = selectedItems.includes(optionText)

                return (
                  <motion.li
                    key={index}
                    whileHover={{ scale: !isDisabled ? 1.05 : 1 }}
                    className={`flex items-center justify-start gap-2 p-2 text-[12px] transition-all cursor-pointer ${
                      isDisabled
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'hover:bg-[#9DD67B] hover:text-white'
                    }`}
                    onClick={() => {
                      if (!isDisabled) {
                        onChange(optionText)
                      }
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      readOnly
                      className="accent-[#9DD67B]"
                    />
                    {optionText}
                  </motion.li>
                )
              })
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DropdownProperties
