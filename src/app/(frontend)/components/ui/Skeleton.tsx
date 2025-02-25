import React from 'react'

const Skeleton: React.FC = () => {
  return (
    <div className="border shadow-md p-3 sm:p-4 text-center rounded-lg animate-pulse">
      <div className="w-full h-40 sm:h-56 bg-gray-300 rounded-md" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mt-3" />
      <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto mt-2" />
      <div className="flex justify-center gap-3 mt-2">
        <div className="h-5 w-5 bg-gray-300 rounded-full" />
        <div className="h-5 w-5 bg-gray-300 rounded-full" />
      </div>
    </div>
  )
}

export default Skeleton
