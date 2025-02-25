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
    <section className="relative w-full h-auto md:h-[500px] flex items-center justify-center overflow-hidden flex-col px-4 md:px-0 py-12 md:py-0">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundAttachment: 'fixed', // Parallax effect
        }}
      />

      {/* Right-Side Gradient Overlay (Extending More to the Left) */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[58rem] h-full"
        style={{
          backgroundImage: `url(${gradient.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right', // Keeps it aligned to the right
        }}
      />

      {/* Content Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-end px-6 text-white text-center md:text-left">
        <div className="max-w-2xl">
          <h3 className="text-sm uppercase tracking-widest mb-1">About Us</h3>
          <div className="flex justify-center md:justify-start">
            <Image src={whiteVector} width={120} height={120} alt="vector" />
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold mt-4">About PB Realty Services</h2>
          <p className="mt-4 w-full max-w-[60rem] md:max-w-[60rem] lg:max-w-[50rem] xl:max-w-[60rem] text-[15px] leading-relaxed text-[#E0E0E0]">
            PB Realty Services is dedicated to simplifying your home search by providing expert real
            estate solutions tailored to your lifestyle and budget. We understand that finding the
            perfect home can be overwhelming, and that’s why we’re here to guide you every step of
            the way.
          </p>
          <div className="mt-6 space-y-3">
            {['Expert Guidance', 'Wide Selection of Properties', 'Seamless Buying Process'].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 justify-center md:justify-start"
                >
                  <Image src={correct} width={20} height={220} alt="correct" />
                  <span className="text-lg">{item}</span>
                </div>
              ),
            )}
          </div>
          <div className="relative z-10 mt-6 flex justify-center md:justify-start">
            {' '}
            {/* 'mt-auto' pushes the button to the bottom */}
            <TeamMembersButton onClick={() => setIsModalOpen(true)}>Team Members</TeamMembersButton>
          </div>
        </div>
      </div>

      {isModalOpen && <TeamModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </section>
  )
}

export default AboutSection
