'use client'

import { useState, useEffect } from 'react'
import HeroProperties from '../components/HeroProperties'
import Filters from '../components/ui/Filters'
import HelpCard from '../components/ui/HelpCard'
import SortBar from '../components/ui/SortBar'
import DiscountPropertyList from '../components/DiscountPropertyList'
import { fetchData } from '../utils/api'
import PropertyList from '../components/PropetyList'
import Loader from '../components/ui/Loader'

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [properties, setProperties] = useState([])
  const [filteredProperties, setFilteredProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProperties() {
      try {
        const data = await fetchData('property')
        setProperties(data)
        setFilteredProperties(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  const handleFilterChange = (filters: any) => {
    let filtered = properties

    if (filters.location) {
      filtered = filtered.filter(
        (property: any) => property.prop_location?.location_city === filters.location,
      )
    }

    if (filters.type) {
      filtered = filtered.filter((property: any) => property.prop_type === filters.type)
    }

    if (filters.budget) {
      let min = 0,
        max = Infinity

      if (typeof filters.budget === 'string') {
        const priceRange = filters.budget.match(/\d+/g)?.map(Number)
        if (priceRange) {
          min = priceRange[0] ?? 0
          max = priceRange[1] ?? Infinity
        }
      } else if (typeof filters.budget === 'number') {
        min = filters.budget
        max = filters.budget
      }

      filtered = filtered.filter(
        (property: any) => property.prop_price >= min && property.prop_price <= max,
      )
    }

    setFilteredProperties(filtered)
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
            />

            {loading ? (
              <div className="flex justify-center items-center py-24">
                <Loader />
              </div>
            ) : (
              <PropertyList viewMode={viewMode} properties={filteredProperties} />
            )}
          </div>

          <div className="md:col-span-5">
            <DiscountPropertyList />
          </div>
        </div>
      </div>
    </>
  )
}
