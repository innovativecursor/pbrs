'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import HeroProperties from '../components/HeroProperties'
import Filters from '../components/ui/Filters'
import HelpCard from '../components/ui/HelpCard'
import SortBar from '../components/ui/SortBar'
import DiscountPropertyList from '../components/DiscountPropertyList'

import Loader from '../components/ui/Loader'

import { fetchData } from '../utils/api'
import PropertyList from '../components/PropetyList'
import ContactSection from '../components/ContactSection'
export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [properties, setProperties] = useState<any[]>([])
  const [filteredProperties, setFilteredProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filteredResultsChanged, setFilteredResultsChanged] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    async function fetchProperties() {
      try {
        const storedFilters = sessionStorage.getItem('searchFilters')

        if (storedFilters) {
          sessionStorage.removeItem('searchFilters') // Clear after use
        }

        const res = await fetch(`/api/properties?${storedFilters}`)
        if (!res.ok) throw new Error('Failed to fetch results')
        const data = await res.json()
        //Calling the queried API over here
        setProperties(data?.properties?.docs)
        setFilteredProperties(data?.properties?.docs)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [filteredResultsChanged])
  const handleFilterChange = (trigger: boolean) => {
    if (trigger) setFilteredResultsChanged(!filteredResultsChanged)
  }
  const [sortOption, setSortOption] = useState('Featured')
  const handleSortChange = (option: string) => {
    setSortOption(option)

    let sorted = [...filteredProperties]

    if (option === 'Price: Low to High') {
      sorted.sort((a, b) => a.prop_price - b.prop_price)
    } else if (option === 'Price: High to Low') {
      sorted.sort((a, b) => b.prop_price - a.prop_price)
    } else {
      sorted = [...properties] // Featured: show as initially fetched
    }

    setFilteredProperties(sorted)
  }
  return (
    <>
      <HeroProperties />
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 space-y-6">
            <Filters onFilterChange={handleFilterChange} />
            <HelpCard />
          </div>

          <div className="md:col-span-3">
            <SortBar
              viewMode={viewMode}
              setViewMode={setViewMode}
              totalResults={filteredProperties.length}
              onSortChange={handleSortChange}
              selectedSort={sortOption}
            />

            {loading ? (
              <div className="flex justify-center items-center py-24">
                <Loader />
              </div>
            ) : (
              <div className="min-w-0 overflow-hidden">
                <PropertyList viewMode={viewMode} properties={filteredProperties} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FAF1F9]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <DiscountPropertyList />
        </div>
      </div>
      <section id="propContact">
        <div className="w-full">
          <div className="max-w-7xl mx-auto">
            <ContactSection />
          </div>
        </div>
      </section>
    </>
  )
}
