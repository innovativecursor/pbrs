'use client'

import Link from 'next/link'
import HeroProperties from '../components/HeroProperties'
import Filters from '../components/ui/Filters'
import HelpCard from '../components/ui/HelpCard'
import SortBar from '../components/ui/SortBar'
// Fix typo in import
import { useState } from 'react'
import PropertyList from '../components/PropetyList'

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <>
      <HeroProperties />
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <Filters />
            <HelpCard />
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <SortBar viewMode={viewMode} setViewMode={setViewMode} />
            <PropertyList viewMode={viewMode} />
          </div>
        </div>
      </div>
    </>
  )
}
