import React from 'react'

// Define the interface for props
interface PropertyDescriptionProps {
  description: string
}

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({ description }) => {
  return (
    <div className="mb-6 border-b border-gray-300 pb-10">
      <h2 className="text-2xl font-medium mb-4">Description</h2>
      <p className="text-[#242424] text-[16px] font-light mt-3 w-full max-w-[600px]">
        {description}
      </p>
    </div>
  )
}

export default PropertyDescription
