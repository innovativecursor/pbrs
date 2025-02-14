import { FaHome, FaMapMarkerAlt, FaWallet } from 'react-icons/fa'
import { Button } from './ui/Button'
import backgroundHero from '../public/assets/heroSection/hero_plain.png'
import Image from 'next/image'
import SearchButton from './ui/SearchButton'

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
        <h1 className="text-4xl font-bold mb-4">Invest Today in Your Dream Home</h1>
        <p className="text-lg">
          Simplify your home search with expert guidance, ensuring you find a property that matches
          your lifestyle and budget.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative z-10 mt-8 bg-white rounded-lg p-4 flex items-center gap-4 shadow-lg w-full max-w-3xl">
        {/* Property Type Dropdown */}
        <div className="flex-1 flex items-center gap-2 border-r pr-4">
          <FaHome className="text-gray-500" />
          <select className="w-full bg-transparent focus:outline-none text-black">
            <option>Property type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
          </select>
        </div>

        {/* Location Dropdown */}
        <div className="flex-1 flex items-center gap-2 border-r pr-4">
          <FaMapMarkerAlt className="text-gray-500" />
          <select className="w-full bg-transparent focus:outline-none text-black">
            <option>Location</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Miami</option>
          </select>
        </div>

        {/* Budget Dropdown */}
        <div className="flex-1 flex items-center gap-2 border-r pr-4">
          <FaWallet className="text-gray-500" />
          <select className="w-full bg-transparent focus:outline-none text-black">
            <option>Budget</option>
            <option>$50,000 - $100,000</option>
            <option>$100,000 - $500,000</option>
            <option>$500,000+</option>
          </select>
        </div>

        {/* Search Button */}
        <SearchButton>Search</SearchButton>
      </div>
    </header>
  )
}

export default Hero
