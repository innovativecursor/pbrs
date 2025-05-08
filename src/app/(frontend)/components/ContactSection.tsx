'use client'

import Image from 'next/image'
import contactGroup from '../public/assets/propertiesHero/contact_group.png'
import vectorgrp from '../public/assets/propertiesHero/vector_17.png'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactSection = () => {
  return (
    <div className="bg-white py-20 flex flex-col items-center">
      <div className="w-full max-w-7xl px-6">
        {/* Top section: Image and Heading */}
        <div
          className="flex flex-col md:flex-row items-center justify-between rounded-t-xl bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: `url(${vectorgrp.src})`,
            minHeight: '350px',
          }}
        >
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src={contactGroup}
              alt="Contact Illustration"
              className="w-[200px] md:w-[280px] h-auto object-contain"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left p-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
              Contact Us for More <br />
              Exclusive <span className="text-[#CB6ABA] underline">Offers</span>
            </h2>
          </div>
        </div>

        {/* Bottom: Contact Info */}
        <div className="flex flex-col md:flex-row bg-[#CB6ABA] text-white rounded-xl overflow-hidden">
          {/* Call Info */}
          <div className="w-full md:w-1/2 p-6">
            <p className="text-lg font-semibold">Call:</p>
            <hr className="my-2 border-purple-300" />
            <div className="flex items-center gap-3 mt-2 text-lg">
              <FaPhoneAlt className="w-5 h-5" />
              <span>+63 910 526 6020</span>
            </div>
          </div>

          {/* Email Info */}
          <div className="w-full md:w-1/2 p-6 border-t md:border-t-0 md:border-l border-purple-400">
            <p className="text-lg font-semibold">Email:</p>
            <hr className="my-2 border-purple-300" />
            <div className="flex items-center gap-3 mt-2 text-lg">
              <MdEmail className="w-5 h-5" />
              <span>paulbalita7@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
