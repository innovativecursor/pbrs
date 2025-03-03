'use client'

import { FaMailBulk, FaPhone } from 'react-icons/fa'
import contactGroup from '../public/assets/propertiesHero/contact_group.png'
const ContactSection = () => {
  return (
    <div className="flex flex-col items-center bg-white py-10">
      <div className="max-w-7xl p-6 flex flex-col md:flex-row items-center justify-between bg-purple-300 rounded-lg shadow-lg">
        {/* Left Section - Illustration */}
        <div className="flex-1">
          <img src={contactGroup.src} alt="Contact Illustration" className="w-full h-auto" />
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex-1 text-center md:text-left px-6">
          <h2 className="text-2xl font-bold text-black">
            Contact Us for More Exclusive <span className="text-purple-700">Offers</span>
          </h2>
          <div className="mt-4 bg-purple-500 text-white p-6 rounded-lg">
            <p className="text-lg font-semibold">Call:</p>
            <div className="flex items-center gap-2 mt-1">
              <FaPhone className="w-5 h-5" />
              <span>+63 910 526 6020</span>
            </div>
            <hr className="my-3 border-purple-400" />
            <p className="text-lg font-semibold">Email:</p>
            <div className="flex items-center gap-2 mt-1">
              <FaMailBulk className="w-5 h-5" />
              <span>paulbalita7@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
