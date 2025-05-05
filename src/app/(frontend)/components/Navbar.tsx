'use client'

import Image from 'next/image'
import { Button } from './ui/Button'
import logo from '../public/assets/pbrs_logo.png'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // ✅ Import usePathname

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // ✅ Get current page path

  // ✅ Conditionally change background color for properties page
  const navbarBg =
    pathname.startsWith('/property') || pathname === '/properties'
      ? 'bg-[#0B0D0A]'
      : 'bg-gradient-to-b from-black/50 to-transparent'

  const isHomePage = pathname === '/'
  const isPropertiesPage = pathname.includes('properties') || pathname.includes('property') // Check if it's the properties or property page

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: isPropertiesPage ? '/' : '#about' }, // If Home or Properties page, link to homepage
    { name: 'Properties', href: '/properties' },
    { name: 'Contact Us', href: isPropertiesPage ? '/' : '#contact' }, // If Home or Properties page, link to homepage
  ]
  return (
    <nav className={`absolute top-0 left-0 w-full z-50 ${navbarBg}`}>
      {/* Centered Container */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4 border-b-[1px] border-[#6C6C6C] ">
        {/* Logo */}
        <div className="flex items-center border-b-0">
          <Link href={'/'}>
            <Image src={logo} width={180} height={180} alt="PBRS-Image" />
          </Link>
        </div>

        {/* Desktop Navigation (Visible on md+) */}
        <ul className="hidden lg:flex gap-10 xl:gap-12 text-white font-medium text-base xl:text-[15px]">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`relative cursor-pointer after:content-[''] after:absolute after:left-0 after:top-[55px] after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:mt-1 hover:after:scale-x-100 ${
                pathname === item.href ? 'font-semibold after:scale-x-100' : ''
              }`}
            >
              <Link href={item.href}>{item.name}</Link>
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

            {/* Side Drawer Menu */}
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

              {/* Mobile Menu Items */}
              <ul className="flex flex-col text-white font-medium text-lg sm:text-xl gap-6 sm:gap-8">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '#about' },
                  { name: 'Properties', href: '/properties' },
                  { name: 'Contact Us', href: '#contact' },
                ].map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className={`cursor-pointer hover:text-gray-400 ${
                      pathname === item.href ? 'font-semibold' : ''
                    }`}
                  >
                    <Link href={item.href} onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Button className="lg:block">Book a Site Tour</Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
