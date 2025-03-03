import React from 'react'
import DropdownProperties from './DropdownProperties'
import homepage from '../../public/assets/propertiesHero/home-2.png'
import budget from '../../public/assets/propertiesHero/budegt_image.png'
import location from '../../public/assets/propertiesHero/location.png'

const Filters: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-[14px] text-[#71AE4C] font-medium mb-3">Filter by Location</h3>
      <DropdownProperties
        iconSrc={location.src}
        label="Select Location"
        options={['Cavite', 'Manila', 'Quezon City', 'Makati']}
      />

      <h3 className="text-[14px] text-[#71AE4C] font-medium mb-3">Filter by Property Type</h3>
      <DropdownProperties
        iconSrc={homepage.src}
        label="Select Type"
        options={['Apartment', 'House', 'Townhouse', 'Condo']}
      />

      <h3 className="text-[14px] text-[#71AE4C] font-medium mb-3">Filter by Budget</h3>
      <DropdownProperties
        iconSrc={budget.src}
        label="Select Budget"
        options={['₱2M - ₱5M', '₱5M - ₱10M', '₱10M - ₱20M', '₱20M+']}
      />

      <button className="w-full bg-[#71AE4C] hover:bg-[#000000] transition-all text-white text-[12px] mt-4 p-3 rounded-lg shadow-md">
        Show Results
      </button>
    </div>
  )
}

export default Filters
