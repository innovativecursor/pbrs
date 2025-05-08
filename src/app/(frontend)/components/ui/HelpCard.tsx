import React from 'react'
import HelpCardImage from '../../public/assets/propertiesHero/help_card.png'
import Image from 'next/image'

const HelpCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <Image src={HelpCardImage} alt="Help Icon" className="mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">Need Help? Talk to our Expert</h3>
      <a href="tel:09381479753">
        <button className="bg-[#CB6ABA] text-white text-[12px] px-20 py-2 rounded-lg">
          Call Us Now
        </button>
      </a>
    </div>
  )
}

export default HelpCard
