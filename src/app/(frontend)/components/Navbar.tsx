'use client'

import Image from 'next/image'
import { Button } from './ui/Button'

import logo from '../public/assets/pbrs_logo.png'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/50 to-transparent z-50">
      {/* Centered Container */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4 border-b-[1px] border-[#6C6C6C] ">
        {/* Logo */}
        <div className="flex items-center border-b-0">
          <Image src={logo} width={180} height={180} alt="PBRS-Image" />
        </div>

        {/* Desktop Navigation (Visible on md+) */}
        <ul className="hidden lg:flex gap-10 xl:gap-12 text-white font-medium text-base xl:text-[15px]">
          {['Home', 'About Us', 'Properties', 'Contact Us'].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:top-[55px] after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:mt-1 hover:after:scale-x-100"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Visible on sm & md, hidden on lg+) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} className="text-white">
            <RxHamburgerMenu size={32} />
          </button>
        </div>

        {/* Button (Desktop Only) */}
        <Button className="hidden lg:block">Book a Site Tour</Button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Side Drawer Menu (Adjusted Width for Tablets) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="fixed top-0 right-0 w-[260px] sm:w-[280px] md:w-[320px] h-full bg-[#121212] shadow-xl p-6 flex flex-col gap-6"
            >
              {/* Close Button */}
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)}>
                  <IoMdClose size={28} className="text-white" />
                </button>
              </div>

              {/* Menu Items (Better Font & Spacing for iPads) */}
              <ul className="flex flex-col text-white font-medium text-lg sm:text-xl gap-6 sm:gap-8">
                {['Home', 'About Us', 'Properties', 'Contact Us'].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer hover:text-gray-400"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
