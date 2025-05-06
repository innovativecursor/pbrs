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

        const getBudgetRangeLabel = (value: number): string => {
          if (value <= 5000000) return '1-5M'
          if (value <= 10000000) return '5-10M'
          if (value <= 20000000) return '10-20M'
          if (value <= 50000000) return '20-50M'
          return '50M+'
        }

        const uniqueBudgetRanges = Array.from(
          new Set(fetchedBudgets.map((b) => getBudgetRangeLabel(b))),
        )

        setLocations(['Location', ...fetchedLocations])
        setBudgets(['Budget', ...uniqueBudgetRanges])
        setPropertyTypes(['Property Type', ...fetchedPropertyTypes])
      } catch (error) {
        console.error('Error fetching filters:', error)
      }
    }

    loadFilters()
  }, [])

  const handleSearch = () => {
    const queryParams = new URLSearchParams()

    if (selectedPropertyType !== 'Property Type') queryParams.append('type', selectedPropertyType)
    if (selectedLocation !== 'Location') queryParams.append('location', selectedLocation)

    if (selectedBudget !== 'Budget') {
      switch (selectedBudget) {
        case '1-5M':
          queryParams.append('budget', '5000000')
          break
        case '5-10M':
          queryParams.append('budget', '10000000')
          break
        case '10-20M':
          queryParams.append('budget', '20000000')
          break
        case '20-50M':
          queryParams.append('budget', '50000000')
          break
        case '50M+':
          queryParams.append('budget', '99999999')
          break
      }
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
