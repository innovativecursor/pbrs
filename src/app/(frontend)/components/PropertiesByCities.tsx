'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

import tilt from '../public/assets/tilt_image.png'
import { ButtonProperties } from './ui/ButtonProperties'
import CityImageCard from './ui/CityImageCard'
import { fetchLocationsCities } from '../utils/api'

const scrollSpeed = 50

type LocationItem = {
  location_city: string
  url: string
}

const PropertiesByCities = () => {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [locations, setLocations] = useState<LocationItem[]>([])

  useEffect(() => {
    const getLocations = async () => {
      const data = await fetchLocationsCities()
      const formatted = data.docs.map((loc: any) => ({
        location_city: loc.location_city,
        url: loc.url,
      }))
      setLocations(formatted)
    }

    getLocations()
  }, [])

  useEffect(() => {
    const animateScroll = async () => {
      if (!containerRef.current || locations.length === 0) return

      const totalWidth = containerRef.current.scrollWidth / 2
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
  }, [controls, locations])

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

      <section className="pb-28 overflow-hidden">
        <div className="relative w-full" ref={containerRef}>
          <motion.div className="flex gap-x-4 w-max" animate={controls} initial={{ x: 0 }}>
            {[...locations, ...locations].map((loc, index) => (
              <div
                key={index}
                className="flex-none w-[250px] md:w-[300px] lg:w-[350px] h-[250px] md:h-[300px] lg:h-[250px] overflow-hidden shadow-md"
              >
                <CityImageCard img={loc.url} cityName={loc.location_city} index={index} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default PropertiesByCities
