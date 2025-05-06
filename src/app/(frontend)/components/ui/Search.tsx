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

  const [locations, setLocations] = useState(['Location'])
  const [budgets, setBudgets] = useState(['Budget'])
  const [propertyTypes, setPropertyTypes] = useState(['PropertyType'])

  const [selectedPropertyType, setSelectedPropertyType] = useState('PropertyType')
  const [selectedLocation, setSelectedLocation] = useState('Location')
  const [selectedBudget, setSelectedBudget] = useState('Budget')

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const fetchedLocations = await fetchLocations()
        // const fetchedBudgets = await fetchBudgets()
        const fetchedPropertyTypes = await fetchPropertyTypes()

        const getBudgetRangeLabel = ['Under 3M', 'Under 5M', 'Under 10M']

        // const uniqueBudgetRanges = Array.from(
        //   new Set(fetchedBudgets.map((b) => getBudgetRangeLabel(b))),
        // )

        setLocations(['Location', ...fetchedLocations])
        setBudgets(['Budget', ...getBudgetRangeLabel])
        setPropertyTypes(['PropertyType', ...fetchedPropertyTypes])
      } catch (error) {
        console.error('Error fetching filters:', error)
      }
    }

    loadFilters()
  }, [])

  const handleSearch = () => {
    const queryParams = new URLSearchParams()

    if (selectedPropertyType !== 'PropertyType')
      queryParams.append('propertyType', encodeURIComponent(selectedPropertyType))

    if (selectedLocation !== 'Location')
      queryParams.append('location', encodeURIComponent(selectedLocation))

    if (selectedBudget !== 'Budget') {
      // Process budget range selection
      let budgetValue = '0'
      switch (selectedBudget) {
        case 'Under 3M':
          budgetValue = '2999999'
          break
        case 'Under 5M':
          budgetValue = '4999999'
          break
        case 'Under 10M':
          budgetValue = '9999999'
          break
      }
      queryParams.append('budget', budgetValue)
    }

    router.push(`/properties?${queryParams.toString()}`)
  }
  return (
    <div className="relative z-10 mt-8 bg-white/20 backdrop-blur-xl border-[1px] border-[#fff] rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 shadow-lg w-full max-w-5xl px-4 md:px-0">
      <div className="flex-1 min-w-[160px] w-full">
        <Dropdown icon={home} options={propertyTypes} onSelect={setSelectedPropertyType} />
      </div>
      <div className="flex-1 min-w-[160px] w-full">
        <Dropdown withBorder icon={map} options={locations} onSelect={setSelectedLocation} />
      </div>
      <div className="flex-1 min-w-[160px] w-full">
        <Dropdown icon={wallet} options={budgets} onSelect={setSelectedBudget} />
      </div>
      <div className="w-full md:w-auto mr-0 sm:mr-4">
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </div>
    </div>
  )
}

export default Search
