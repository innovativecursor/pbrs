import React, { useEffect, useState } from 'react'
import DropdownProperties from './DropdownProperties'
import homepage from '../../public/assets/propertiesHero/home-2.png'
import budget from '../../public/assets/propertiesHero/budegt_image.png'
import location from '../../public/assets/propertiesHero/location.png'
import { fetchData } from '../../utils/api'

const Filters: React.FC<{ onFilterChange: (filters: any) => void }> = ({ onFilterChange }) => {
  const [locations, setLocations] = useState<string[]>([])
  const [propertyTypes, setPropertyTypes] = useState<string[]>([])
  const [budgets, setBudgets] = useState<string[]>([])

  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null)

  useEffect(() => {
    async function fetchFilters() {
      try {
        const [locationData, typeData, budgetData] = await Promise.all([
          fetchData('location'),
          fetchData('property'),
          fetchData('property'),
        ])

        setLocations(locationData.map((loc: any) => loc.location_city)) // Extract city names
        setPropertyTypes(
          typeData.map((type: any) => type.prop_type?.property_type || 'Unknown Type'),
        ) // Extract property types safely
        setBudgets(budgetData.map((budget: any) => budget.prop_price)) // Extract price ranges
      } catch (error) {
        console.error('Error fetching filter data:', error)
      }
    }

    fetchFilters()
  }, [])

  const handleFilterChange = () => {
    onFilterChange({
      location: selectedLocation,
      type: selectedType,
      budget: selectedBudget,
    })
  }

  const handleApplyFilters = () => {
    handleFilterChange()
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-[14px] text-[#71AE4C] font-medium mb-3">Filter by Location</h3>
      <DropdownProperties
        iconSrc={location.src}
        label="Select Location"
        options={locations.length > 0 ? locations : ['Location not available currently']}
        onChange={(option) => {
          if (option !== 'Location not available currently') {
            setSelectedLocation(option)
            handleFilterChange()
          }
        }}
      />

      <h3 className="text-[14px] text-[#71AE4C] font-medium mb-3">Filter by Property Type</h3>
      <DropdownProperties
        iconSrc={homepage.src}
        label="Select Type"
        options={propertyTypes.length > 0 ? propertyTypes : ['No type available currently']}
        onChange={(option) => {
          if (option !== 'No type available currently') {
            setSelectedType(option)
            handleFilterChange()
          }
        }}
      />

      <h3 className="text-[14px] text-[#71AE4C] font-medium mb-3">Filter by Budget</h3>
      <DropdownProperties
        iconSrc={budget.src}
        label="Select Budget"
        options={budgets.length > 0 ? budgets : ['No budget available']}
        onChange={(option) => {
          if (option !== 'No budget available') {
            setSelectedBudget(option)
            handleFilterChange()
          }
        }}
      />

      <button
        onClick={handleApplyFilters}
        className="w-full bg-[#71AE4C] hover:bg-[#000000] transition-all text-white text-[12px] mt-4 p-3 rounded-lg shadow-md"
      >
        Show Results
      </button>
    </div>
  )
}

export default Filters
