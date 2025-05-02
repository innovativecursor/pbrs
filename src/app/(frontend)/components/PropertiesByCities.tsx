'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

import tilt from '../public/assets/tilt_image.png'

import cityImage1 from '../public/assets/propertiesCities/city_image_1.png'
import cityImage2 from '../public/assets/propertiesCities/city_image_2.png'
import cityImage3 from '../public/assets/propertiesCities/city_image_3.png'
import cityImage4 from '../public/assets/propertiesCities/city_image_4.png'
import cityImage5 from '../public/assets/propertiesCities/city_image_5.png'

import { ButtonProperties } from './ui/ButtonProperties'
import CityImageCard from './ui/CityImageCard'

// Array of city images
const cityImages = [cityImage1, cityImage2, cityImage3, cityImage4, cityImage5]

// Scrolling speed in pixels per second
const scrollSpeed = 50

const PropertiesByCities = () => {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateScroll = async () => {
      if (!containerRef.current) return

      const totalWidth = containerRef.current.scrollWidth / 2 // Half due to duplication
      const duration = totalWidth / scrollSpeed

      await controls.start({
        x: -totalWidth,
        transition: {
          duration,
          ease: 'linear',
          repeat: Infinity,
        },
      })
    }

    animateScroll()
  }, [controls])

  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-left">
            <h3 className="text-[#71AE4C] font-semibold uppercase tracking-wide text-sm flex flex-col">
              Properties by Cities
              <Image src={tilt} width={120} height={120} alt="vector" className="mt-[5px]" />
            </h3>
            <h2 className="text-xl sm:text-2xl md:text-[48px] w-full max-w-[47rem] font-semibold mt-2 mb-[20px]">
              Find Your Dream Property in Your Preferred Location
            </h2>
          </div>
          <div className="flex items-center md:items-end">
            <ButtonProperties>View All</ButtonProperties>
          </div>
        </div>
      </section>

      {/* Custom Marquee Section */}
      <section className="pb-28 overflow-hidden">
        <div className="relative w-full" ref={containerRef}>
          <motion.div className="flex gap-x-4 w-max" animate={controls} initial={{ x: 0 }}>
            {/* Duplicate the images to create infinite scroll effect */}
            {[...cityImages, ...cityImages].map((img, index) => (
              <div
                key={index}
                className="flex-none w-[250px] md:w-[300px] lg:w-[350px] h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden shadow-md"
              >
                <CityImageCard img={typeof img === 'string' ? img : img.src} index={index} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default PropertiesByCities
