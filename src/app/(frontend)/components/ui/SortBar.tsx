'use client'

import React, { useState } from 'react'
import { FaTh, FaList } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { IoChevronDown } from 'react-icons/io5'

interface SortBarProps {
  viewMode: 'grid' | 'list'
  setViewMode: (mode: 'grid' | 'list') => void
  totalResults: number
  onSortChange: (option: string) => void
  selectedSort: string
}

const SortBar: React.FC<SortBarProps> = ({
  viewMode,
  setViewMode,
  totalResults,
  onSortChange,
  selectedSort,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low']

  return (
    <div className="flex justify-between items-center bg-white p-3 shadow-md rounded-lg mb-6">
      {/* View Mode Icons */}
      <div className="flex items-center gap-3">
        <button
          className={`p-2 rounded-lg text-sm ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
          onClick={() => setViewMode('grid')}
        >
          <FaTh size={16} />
        </button>

        <button
          className={`p-2 rounded-lg text-sm ${viewMode === 'list' ? 'bg-gray-200' : ''} hidden md:inline-flex`}
          onClick={() => setViewMode('list')}
        >
          <FaList size={16} />
        </button>

        <span className="text-gray-600 text-xs">Showing all {totalResults} Results</span>
      </div>

      {/* Custom Sort Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs"
        >
          {selectedSort}
          <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <IoChevronDown size={14} color="#71AE4C" />
          </motion.div>
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-lg overflow-hidden z-20"
            >
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    onSortChange(option)
                    setDropdownOpen(false)
                  }}
                  className="block w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100 text-xs"
                >
                  {option}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default SortBar
