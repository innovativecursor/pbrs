'use client'

import { FaCheckCircle } from 'react-icons/fa'
import background from '../public/assets/aboutUsSection/about_us_section.png'
import gradient from '../public/assets/aboutUsSection/gradient.svg'
import { Button } from './ui/Button'
import TeamMembersButton from './ui/TeamMembersButton'
import TeamModal from './ui/TeamModal'
import { useState } from 'react'
import Image from 'next/image'
import whiteVector from '../public/assets/aboutUsSection/white_vector.png'
import correct from '../public/assets/aboutUsSection/correct_image.png'

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="relative w-full h-auto md:h-[500px] flex items-center justify-center px-4 md:px-0 py-12 md:py-0">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${background.src})` }}
      />

      {/* Gradient Overlay (Right Side) */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-black/70 via-black/50 to-transparent md:to-black/10" />

      {/* Content Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 text-white">
        {/* Empty Space (Gradient Side) */}
        <div className="hidden md:block"></div>

        {/* Text Content */}
        <div className="relative max-w-2xl text-center md:text-left">
          <div className="relative z-10 p-6">
            <h3 className="text-sm uppercase tracking-widest mb-1">About Us</h3>
            <Image src={whiteVector} width={120} height={120} alt="vector" />
            <h2 className="text-2xl md:text-4xl font-semibold mt-4">About PB Realty Services</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#E0E0E0]">
              PB Realty Services is dedicated to simplifying your home search by providing expert
              real estate solutions tailored to your lifestyle and budget. We understand that
              finding the perfect home can be overwhelming, and that’s why we’re here to guide you
              every step of the way.
            </p>

            <div className="mt-6 space-y-3">
              {['Expert Guidance', 'Wide Selection of Properties', 'Seamless Buying Process'].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Image src={correct} width={20} height={20} alt="correct" />
                    <span className="text-lg">{item}</span>
                  </div>
                ),
              )}
            </div>

            <div className="mt-6">
              <TeamMembersButton onClick={() => setIsModalOpen(true)}>
                Team Members
              </TeamMembersButton>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <TeamModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </section>
  )
}

export default AboutSection
