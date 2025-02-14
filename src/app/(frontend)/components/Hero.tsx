import { FaHome, FaMapMarkerAlt, FaWallet } from 'react-icons/fa'
import { Button } from './ui/Button'
import backgroundHero from '../public/assets/heroSection/hero_plain.png'
import Image from 'next/image'
import SearchButton from './ui/SearchButton'
import Search from './ui/Search'

const Hero = () => {
  return (
    <header
      className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
      //   style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <Image
        src={backgroundHero}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="-z-10"
        priority
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0B1E00 0%, rgba(0, 0, 0, 0.17) 98.88%)',
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-[74px]">Invest Today in Your Dream Home</h1>
        <p className="text-[18px] text-[#C0C0C0] tracking-wider">
          Simplify your home search with expert guidance, ensuring you find a property that matches
          your lifestyle and budget.
        </p>
      </div>

      {/* Search Bar */}
      {/* <div className="relative z-10 mt-8 bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-4 flex items-center gap-4 shadow-lg w-full max-w-3xl">
        <div className="flex-1 flex items-center gap-2 border-r border-white/20 pr-4">
          <FaHome className="text-gray-500" />
          <select className="w-full bg-transparent focus:outline-none text-white">
            <option className="text-black">Property type</option>
            <option className="text-black">House</option>
            <option className="text-black">Apartment</option>
            <option className="text-black">Villa</option>
          </select>
        </div>

        <div className="flex-1 flex items-center gap-2 border-r border-white/20 pr-4">
          <FaMapMarkerAlt className="text-gray-500" />
          <select className="w-full bg-transparent focus:outline-none text-white">
            <option className="text-black">Location</option>
            <option className="text-black">New York</option>
            <option className="text-black">Los Angeles</option>
            <option className="text-black">Miami</option>
          </select>
        </div>

   
        <div className="flex-1 flex items-center gap-2 border-r border-white/20 pr-4">
          <FaWallet className="text-gray-500" />
          <select className="w-full bg-transparent focus:outline-none text-white">
            <option className="text-black">Budget</option>
            <option className="text-black">$50,000 - $100,000</option>
            <option className="text-black">$100,000 - $500,000</option>
            <option className="text-black">$500,000+</option>
          </select>
        </div>
      </div> */}
      <Search />
    </header>
  )
}

export default Hero
