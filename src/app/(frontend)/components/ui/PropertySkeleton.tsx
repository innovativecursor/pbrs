import React from 'react'

const PropertySkeleton: React.FC = () => {
  return (
    <div className="w-full bg-white border border-[#F1F1F1] overflow-hidden rounded-md shadow-md animate-pulse">
      <div className="w-full h-56 bg-gray-300" />
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-300 rounded w-1/2 mb-3" />
        <div className="h-5 bg-gray-300 rounded w-1/4 mb-4" />

        <div className="grid grid-cols-2 gap-2">
          <div className="h-3 bg-gray-300 rounded w-full" />
          <div className="h-3 bg-gray-300 rounded w-full" />
          <div className="h-3 bg-gray-300 rounded w-full" />
          <div className="h-3 bg-gray-300 rounded w-full" />
        </div>
      </div>
    </div>
  )
}

export default PropertySkeleton
