'use client'

import backgroundHero from '../public/assets/heroSection/hero_plain.png'
import ContactButton from './ui/ContactButton'

const ParallaxSection = () => {
  return (
    <section id="contact" className="relative h-[50vh] w-full pt-16 md:pt-24 lg:pt-32">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundHero.src})`,
        }}
      ></div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(113, 174, 76, 0.35) 0%, rgba(10, 8, 8, 0.35) 51.61%, rgba(113, 174, 76, 0.35) 100%)',
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <p className="text-[#71AE4C] uppercase tracking-wide text-xs sm:text-sm md:text-base flex flex-col">
          Explore Our Featured Properties
        </p>

        <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold mt-4 mb-4 leading-tight">
          Need Help? Talk to Our Expert
        </h2>

        <p className="text-sm sm:text-base md:text-lg mb-4">Call +63 917 490 1350</p>

        <a href="tel:+639174901350">
          <ContactButton text={'Contact Now'} />
        </a>
      </div>
    </section>
  )
}

export default ParallaxSection
