'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Dropdown = ({ icon, options }: { icon: any; options: string[] }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex-1">
      <div
        className="flex items-center gap-2 px-4 py-2 cursor-pointer  text-white transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={icon} width={18} height={18} alt="icon" />
        <span className="">{options[0]}</span>
        <span className="ml-auto">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
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
                className="px-4 py-2 text-white transition backdrop-blur-xl hover:bg-white/30 cursor-pointer border-b-[1px]"
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
