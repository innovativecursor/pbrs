'use client'

import React, { useEffect, useState } from 'react'
import DropdownProperties from './DropdownProperties'
import homepage from '../../public/assets/propertiesHero/home-2.png'
import budget from '../../public/assets/propertiesHero/budegt_image.png'
import location from '../../public/assets/propertiesHero/location.png'
import { fetchData } from '../../utils/api'
import { useRouter, useSearchParams } from 'next/navigation'

// Define types
interface LocationData {
  location_city: string
}

interface PropertyData {
  prop_type?: { property_type?: string }
  prop_price: number
}

const Filters: React.FC<{ onFilterChange: (filters: any) => void }> = ({ onFilterChange }) => {
  const [locations, setLocations] = useState<string[]>([])
  const [propertyTypes, setPropertyTypes] = useState<string[]>([])
  const [budgets, setBudgets] = useState<string[]>([])

  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedBudgets, setSelectedBudgets] = useState<string[]>([])

  // Shared state for controlling open dropdown
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    async function fetchFilters() {
      try {
        const [locationData, propertyData] = await Promise.all([
          fetchData('location') as Promise<LocationData[]>,
          fetchData('property') as Promise<PropertyData[]>,
        ])

        const uniqueLocations = Array.from(new Set(locationData.map((loc) => loc.location_city)))
        setLocations(uniqueLocations)

        const rawTypes = propertyData.map((type) => type.prop_type?.property_type || 'Unknown Type')
        const uniqueTypes = Array.from(new Set(rawTypes))
        setPropertyTypes(uniqueTypes)

        const priceRanges = propertyData.map((item) => {
          const price = item.prop_price
          if (price >= 1000000 && price <= 5000000) return '1-5M'
          if (price > 5000000 && price <= 10000000) return '5-10M'
          if (price > 10000000 && price <= 25000000) return '10-25M'
          if (price > 25000000) return '25M+'
          return 'Under 1M'
        })

        const uniqueBudgetRanges = Array.from(new Set(priceRanges))
        setBudgets(uniqueBudgetRanges)
      } catch (error) {
        console.error('Error fetching filter data:', error)
      }
    }

    fetchFilters()
  }, [])

  const handleMultiSelect = (
    option: string,
    selectedItems: string[],
    setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    const isAlreadySelected = selectedItems.includes(option)
    const updated = isAlreadySelected
      ? selectedItems.filter((item) => item !== option)
      : [...selectedItems, option]

    setSelectedItems(updated)
    handleFilterChange(updated, selectedTypes, selectedBudgets)
  }

  const handleFilterChange = (
    locationVals = selectedLocations,
    typeVals = selectedTypes,
    budgetVals = selectedBudgets,
  ) => {
    onFilterChange({
      location: locationVals,
      type: typeVals,
      budget: budgetVals,
    })

    const params = new URLSearchParams()

    if (locationVals.length) params.set('location', locationVals.join(','))
    if (typeVals.length) params.set('type', typeVals.join(','))
    if (budgetVals.length) params.set('budget', budgetVals.join(','))

    router.push(`?${params.toString()}`)
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
        selectedItems={selectedLocations}
        onChange={(option) => handleMultiSelect(option, selectedLocations, setSelectedLocations)}
        isOpen={openDropdown === 'location'}
        setIsOpen={() => setOpenDropdown((prev) => (prev === 'location' ? null : 'location'))}
      />

      <h3 className="text-[14px] text-[#71AE4C] font-medium mb-3">Filter by Property Type</h3>
      <DropdownProperties
        iconSrc={homepage.src}
        label="Select Type"
        options={propertyTypes.length > 0 ? propertyTypes : ['No type available currently']}
        selectedItems={selectedTypes}
        onChange={(option) => handleMultiSelect(option, selectedTypes, setSelectedTypes)}
        isOpen={openDropdown === 'type'}
        setIsOpen={() => setOpenDropdown((prev) => (prev === 'type' ? null : 'type'))}
      />

      <h3 className="text-[14px] text-[#71AE4C] font-medium mb-3">Filter by Budget</h3>
      <DropdownProperties
        iconSrc={budget.src}
        label="Select Budget"
        options={budgets.length > 0 ? budgets : ['No budget available currently']}
        selectedItems={selectedBudgets}
        onChange={(option) => handleMultiSelect(option, selectedBudgets, setSelectedBudgets)}
        isOpen={openDropdown === 'budget'}
        setIsOpen={() => setOpenDropdown((prev) => (prev === 'budget' ? null : 'budget'))}
      />

      <button
        onClick={handleApplyFilters}
        className="mt-4 w-full bg-[#71AE4C] text-white p-3 rounded-full hover:bg-[#3E7B1A]"
      >
        Apply Filters
      </button>
    </div>
  )
}

export default Filters
