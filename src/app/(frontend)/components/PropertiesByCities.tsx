'use client' // Needed if using Next.js App Router

import Image from 'next/image'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee' // Import react-fast-marquee
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

const PropertiesByCities = () => {
  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-left">
            <h3 className="text-[#71AE4C] font-semibold uppercase tracking-wide text-sm flex flex-col">
              Properties by Cities
              <Image src={tilt} width="120" height="120" alt="vector" className="mt-[5px]" />
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

      {/* Marquee Section */}
      <section className="pb-28">
        <Marquee gradient={false} speed={30}>
          <div className="flex gap-x-4">
            {cityImages.map((img, index) => (
              <div
                key={index}
                className={`flex-none w-[250px] md:w-[300px] lg:w-[350px] h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden shadow-md ${
                  index === cityImages.length - 1 ? 'pr-4' : ''
                }`}
              >
                <CityImageCard img={typeof img === 'string' ? img : img.src} index={index} />
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </>
  )
}

export default PropertiesByCities
