import Image from 'next/image'
import React from 'react'
import propertiesHero from '../public/assets/propertiesHero/properties_hero.png'

const HeroProperties: React.FC = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={propertiesHero} // Update with your actual image path
          alt="Explore Our Properties"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Explore Our Properties</h1>
      </div>
    </section>
  )
}

export default HeroProperties
