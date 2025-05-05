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

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [properties, setProperties] = useState<any[]>([])
  const [filteredProperties, setFilteredProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const searchParams = useSearchParams()

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

  useEffect(() => {
    if (!properties.length) return

    const type = searchParams.get('type')
    const location = searchParams.get('location')
    const budget = searchParams.get('budget')

    let filtered = [...properties]

    if (type) {
      filtered = filtered.filter(
        (p: any) =>
          typeof p.prop_type === 'string' && p.prop_type.toLowerCase() === type.toLowerCase(),
      )
    }

    if (location) {
      filtered = filtered.filter(
        (p: any) => p.prop_location?.location_city?.toLowerCase() === location.toLowerCase(),
      )
    }

    if (budget) {
      const max = parseInt(budget, 10)
      if (!isNaN(max)) {
        filtered = filtered.filter((p: any) => p.prop_price <= max)
      }
    }

    setFilteredProperties(filtered)
  }, [searchParams, properties])

  const handleFilterChange = (filters: any) => {
    let filtered = [...properties]

    if (filters.location?.length) {
      filtered = filtered.filter((p: any) =>
        filters.location.includes(p.prop_location?.location_city),
      )
    }

    if (filters.type?.length) {
      filtered = filtered.filter((p: any) => filters.type.includes(p.prop_type))
    }

    if (filters.budget?.length) {
      const max = parseInt(filters.budget[0], 10)
      if (!isNaN(max)) {
        filtered = filtered.filter((p: any) => p.prop_price <= max)
      }
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
        </div>
      </div>

      <div className="w-full bg-[#FAF1F9]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <DiscountPropertyList />
        </div>
      </div>
    </>
  )
}
