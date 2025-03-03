'use client'

import React from 'react'
import { FaTh, FaList } from 'react-icons/fa'

interface SortBarProps {
  viewMode: 'grid' | 'list'
  setViewMode: (mode: 'grid' | 'list') => void
}

const SortBar: React.FC<SortBarProps> = ({ viewMode, setViewMode }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg mb-6">
      {/* Grid View Icon */}
      <div className="flex items-center gap-4">
        <button
          className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
          onClick={() => setViewMode('grid')}
        >
          <FaTh size={18} />
        </button>

        {/* List View Icon */}
        <button
          className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
          onClick={() => setViewMode('list')}
        >
          <FaList size={18} />
        </button>
        {/* Results Count */}
        <span className="text-gray-700">Showing all 09 Results</span>
      </div>

      {/* View Toggle & Sort Option */}

      {/* Sort Dropdown */}
      <select className="border p-2 rounded-lg">
        <option>Sort by Latest</option>
      </select>
    </div>
  )
}

export default SortBar
