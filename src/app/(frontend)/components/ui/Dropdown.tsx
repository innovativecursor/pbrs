'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { ReactNode, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

interface DropdownProps {
  icon: StaticImageData | string | ReactNode
  options: string[]
  withBorder?: boolean
}

const Dropdown = ({ icon, options, withBorder = false }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`relative flex-1 ${withBorder ? 'border-l border-r border-white/30' : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center justify-between w-full pr-[20px] pl-[20px] py-2 cursor-pointer text-white transition rounded-lg bg-transparent">
        {/* Icon Section */}
        <div className="flex items-center gap-1">
          {typeof icon === 'string' || icon instanceof Object ? (
            icon ? (
              <Image src={icon as StaticImageData} width={20} height={20} alt="icon" />
            ) : null
          ) : (
            icon
          )}
        </div>
        <span>{options[0]}</span>
        {/* Dropdown Arrow */}
        <div>{isOpen ? <IoIosArrowUp size={16} /> : <IoIosArrowDown size={16} />}</div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full mt-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg overflow-hidden"
          >
            {options.slice(1).map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 text-white transition hover:bg-white/30 cursor-pointer border-b-[1px]"
                onClick={() => setIsOpen(false)}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dropdown
