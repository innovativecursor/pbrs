import React from 'react'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import logo from '../public/assets/pbrs_logo.png'
import Image from 'next/image'
import innocursor from '../public/assets/footerAssets/innocursor.svg'
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-[100px] pb-[50px]">
      <div className="container mx-auto max-w-9xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2">
              <Image src={logo} alt="PBRS Logo" width={200} height={200} />
            </div>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              PB Realty Services provides expert real estate solutions to simplify your home search,
              ensuring you find a property that fits your lifestyle and budget. Let us guide you in
              securing your dream home hassle-free!
            </p>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="text-green-500 text-xl cursor-pointer hover:scale-110 transition-transform" />
              <FaWhatsapp className="text-green-500 text-xl cursor-pointer hover:scale-110 transition-transform" />
              <FaWhatsapp className="text-green-500 text-xl cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">QUICK LINKS</h3>
            <div className="w-28 border-b-2 border-[#71AE4C] mb-3"></div>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-white transition">Home</li>
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Properties</li>
              <li className="hover:text-white transition">News & Blogs</li>
              <li className="hover:text-white transition">Contact Us</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">CONTACT INFO</h3>
            <div className="w-34 border-b-2 border-[#71AE4C] mb-3"></div>
            <ul className="text-gray-400 space-y-2">
              <li>📧 paulbalita7@gmail.com</li>
              <li>📞 +63 910 526 6020</li>
              <li>📍 Jordan Estate Subd., San Jose 2, Noveleta, Cavite 4106</li>
            </ul>
          </div>

          {/* Appointment */}
          <div>
            <h3 className="text-lg font-semibold mb-3">APPOINTMENT</h3>
            <div className="w-32 border-b-2 border-[#71AE4C] mb-3"></div>
            <p className="text-gray-400 mb-4">
              Do feel free to book an appointment by clicking the link below
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 PB Realty Services. All Rights Reserved.</p>
          <p className="flex items-center">
            Designed by
            <Image src={innocursor} width={25} height={25} alt="Innovative Cursor Logo" />
            <span className="text-white ml-1"> Innovative Cursor</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
