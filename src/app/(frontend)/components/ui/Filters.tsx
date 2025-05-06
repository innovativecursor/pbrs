'use client'

import React, { useEffect, useRef, useState } from 'react'
import DropdownProperties from './DropdownProperties'
import homepage from '../../public/assets/propertiesHero/home-2.png'
import budget from '../../public/assets/propertiesHero/budegt_image.png'
import location from '../../public/assets/propertiesHero/location.png'
import { fetchData } from '../../utils/api'
import { useRouter, useSearchParams } from 'next/navigation'
import Toaster, { showToast } from './Toaster'

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
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedBudgets, setSelectedBudgets] = useState<string[]>([])

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
          const price = Number(item.prop_price)

          if (price < 100000) return '₱0 - ₱999,999'
          else if (price < 5000000) return '₱1M - ₱5M'
          else if (price < 10000000) return '₱5M - ₱10M'
          else if (price < 25000000) return '₱10M - ₱25M'
          else if (price < 50000000) return '₱25M - ₱50M'
          else return '₱50M+'
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
    filterType: 'location' | 'type' | 'budget',
  ) => {
    const isAlreadySelected = selectedItems.includes(option)

    // 🚫 Prevent more than one selection
    if (!isAlreadySelected && selectedItems.length >= 1) {
      showToast(`You can only select one ${filterType}`, 'error')
      return
    }

    const updated = isAlreadySelected
      ? selectedItems.filter((item) => item !== option)
      : [...selectedItems, option]

    setSelectedItems(updated)

    if (filterType === 'location') {
      handleFilterChange(updated, selectedTypes, selectedBudgets)
    } else if (filterType === 'type') {
      handleFilterChange(selectedLocations, updated, selectedBudgets)
    } else if (filterType === 'budget') {
      handleFilterChange(selectedLocations, selectedTypes, updated)
    }
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
    if (typeVals.length) {
      const encodedTypes = typeVals.map((type) => type.replace(/&/g, '__AND__'))
      params.set('type', encodedTypes.join(','))
    }

    const budgetMap: Record<string, string> = {
      '₱0 - ₱999,999': '0-1000000',
      '₱1M - ₱5M': '1000000-5000000',
      '₱5M - ₱10M': '5000000-10000000',
      '₱10M - ₱25M': '10000000-25000000',
      '₱25M - ₱50M': '25000000-50000000',
      '₱50M+': '50000000-999999999',
    }

    if (budgetVals.length) {
      const budgetRanges = budgetVals.map((label) => budgetMap[label]).filter(Boolean)
      params.set('budget', budgetRanges.join(','))
    }

    router.push(`?${params.toString()}`)
  }

  const handleApplyFilters = () => {
    handleFilterChange()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="bg-white p-6 rounded-lg shadow-md">
      <Toaster />
      <h3 className="text-[14px] text-[#71AE4C] font-medium mb-3">Filter by Location</h3>
      <DropdownProperties
        iconSrc={location.src}
        label="Select Location"
        options={locations.length > 0 ? locations : ['Location not available currently']}
        selectedItems={selectedLocations}
        onChange={(option) =>
          handleMultiSelect(option, selectedLocations, setSelectedLocations, 'location')
        }
        isOpen={openDropdown === 'location'}
        setIsOpen={() => setOpenDropdown((prev) => (prev === 'location' ? null : 'location'))}
      />

      <h3 className="text-[14px] text-[#71AE4C] font-medium mb-3">Filter by Property Type</h3>
      <DropdownProperties
        iconSrc={homepage.src}
        label="Select Type"
        options={propertyTypes.length > 0 ? propertyTypes : ['No type available currently']}
        selectedItems={selectedTypes}
        onChange={(option) => handleMultiSelect(option, selectedTypes, setSelectedTypes, 'type')}
        isOpen={openDropdown === 'type'}
        setIsOpen={() => setOpenDropdown((prev) => (prev === 'type' ? null : 'type'))}
      />

      <h3 className="text-[14px] text-[#71AE4C] font-medium mb-3">Filter by Budget</h3>
      <DropdownProperties
        iconSrc={budget.src}
        label="Select Budget"
        options={budgets.length > 0 ? budgets : ['No budget available currently']}
        selectedItems={selectedBudgets}
        onChange={(option) =>
          handleMultiSelect(option, selectedBudgets, setSelectedBudgets, 'budget')
        }
        isOpen={openDropdown === 'budget'}
        setIsOpen={() => setOpenDropdown((prev) => (prev === 'budget' ? null : 'budget'))}
      />

      <button
        onClick={handleApplyFilters}
        className="mt-4 text-[12px] w-full bg-[#71AE4C] text-white p-3 rounded-xl hover:bg-[#3E7B1A]"
      >
        Show Results
      </button>
    </div>
  )
}

export default Filters
