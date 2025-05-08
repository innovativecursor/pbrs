'use client'

import { useState } from 'react'
import Image from 'next/image'

import background from '../public/assets/aboutUsSection/about_us_section.png'
import whiteVector from '../public/assets/aboutUsSection/white_vector.png'
import correct from '../public/assets/aboutUsSection/correct_image.png'

import TeamMembersButton from './ui/TeamMembersButton'
import TeamModal from './ui/TeamModal'

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      id="about"
      className="relative w-full h-auto md:h-[500px] flex items-center justify-center px-6 sm:px-12 md:px-16 py-12"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center md:bg-left parallax-bg"
        style={{ backgroundImage: `url(${background.src})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-black/70 via-black/50 to-transparent md:to-black/10" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] items-center gap-6 text-center md:text-left justify-items-center md:justify-items-start about-section-content">
        {/* Empty Space on Larger Screens */}
        <div className="hidden md:block"></div>

        {/* Text Content */}
        <div className="relative max-w-md md:max-w-2xl text-center md:text-left">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <h3 className="text-sm uppercase tracking-widest mb-1 text-[#fff]">About Us</h3>
            <Image src={whiteVector} width={120} height={120} alt="vector" />
            <h2 className="text-2xl text-[#fff] sm:text-3xl md:text-4xl font-semibold mt-4">
              About PB Realty Services
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#E0E0E0]">
              PB Realty Services is dedicated to simplifying your home search by providing expert
              real estate solutions tailored to your lifestyle and budget. We understand that
              finding the perfect home can be overwhelming, and that’s why we’re here to guide you
              every step of the way.
            </p>

            {/* Feature List */}
            <div className="mt-6 space-y-4 text-[#fff]">
              {['Expert Guidance', 'Wide Selection of Properties', 'Seamless Buying Process'].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center md:justify-start gap-3"
                  >
                    <Image src={correct} width={24} height={24} alt="correct" />
                    <span className="text-lg">{item}</span>
                  </div>
                ),
              )}
            </div>

            {/* Button */}
            <div className="mt-6 flex justify-center md:justify-start">
              <TeamMembersButton onClick={() => setIsModalOpen(true)}>
                Team Members
              </TeamMembersButton>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <TeamModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </section>
  )
}

export default AboutSection
