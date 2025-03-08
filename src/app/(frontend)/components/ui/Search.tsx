'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import SearchButton from './SearchButton'

import map from '../../public/assets/searchBarIcons/pin_icon.png'
import wallet from '../../public/assets/searchBarIcons/wallet.png'
import home from '../../public/assets/searchBarIcons/home_icon.png'

import { fetchBudgets, fetchLocations, fetchPropertyTypes } from '../../utils/api'

const Search = () => {
  const router = useRouter()

  const [locations, setLocations] = useState<string[]>(['Location'])
  const [budgets, setBudgets] = useState<string[]>(['Budget'])
  const [propertyTypes, setPropertyTypes] = useState<string[]>(['Property Type'])

  const [selectedPropertyType, setSelectedPropertyType] = useState<string>('Property Type')
  const [selectedLocation, setSelectedLocation] = useState<string>('Location')
  const [selectedBudget, setSelectedBudget] = useState<string>('Budget')

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const fetchedLocations = await fetchLocations()
        const fetchedBudgets = await fetchBudgets()
        const fetchedPropertyTypes = await fetchPropertyTypes()

        setLocations(['Location', ...fetchedLocations])
        setBudgets(['Budget', ...fetchedBudgets.map((b) => `$${b.toLocaleString()}`)])
        setPropertyTypes(['Property Type', ...fetchedPropertyTypes])
      } catch (error) {
        console.error('Error fetching filters:', error)
      }
    }

    loadFilters()
  }, [])

  // Function to handle search
  const handleSearch = () => {
    const queryParams = new URLSearchParams()

    if (selectedPropertyType !== 'Property Type') queryParams.append('type', selectedPropertyType)
    if (selectedLocation !== 'Location') queryParams.append('location', selectedLocation)
    if (selectedBudget !== 'Budget')
      queryParams.append('budget', selectedBudget.replace(/\$/g, '').replace(/,/g, ''))

    router.push(`/properties?${queryParams.toString()}`)
  }

  return (
    <div className="relative z-10 mt-8 bg-white/20 backdrop-blur-xl border-[1px] border-[#fff] rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 shadow-lg w-full max-w-5xl px-4 md:px-0">
      <Dropdown icon={home} options={propertyTypes} onSelect={setSelectedPropertyType} />
      <Dropdown withBorder icon={map} options={locations} onSelect={setSelectedLocation} />
      <Dropdown icon={wallet} options={budgets} onSelect={setSelectedBudget} />
      <div className="mr-[0] sm:mr-[16px]">
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </div>
    </div>
  )
}

export default Search
