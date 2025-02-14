'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Search from './ui/Search'
import backgroundHero from '../public/assets/heroSection/hero_plain.png'

const Hero = () => {
  return (
    <header className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center px-4 md:px-0">
      {/* Background Image */}
      <Image
        src={backgroundHero}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="-z-10"
        priority
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0B1E00 0%, rgba(0, 0, 0, 0.17) 98.88%)',
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl px-4 md:px-0">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-[74px] font-bold mb-[30px] md:mb-[50px]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Invest Today in Your Dream Home
        </motion.h1>

        <p className="text-[16px] md:text-[18px] text-[#C0C0C0] tracking-wider mb-[20px] md:mb-[30px]">
          Simplify your home search with expert guidance, ensuring you find a property that matches
          your lifestyle and budget.
        </p>
      </div>

      {/* Animated Search Bar */}
      <motion.div
        className="w-full flex justify-center px-4 md:px-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        <Search />
      </motion.div>
    </header>
  )
}

export default Hero
