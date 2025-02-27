import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const ButtonProperties: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-[#71AE4C] text-white text-sm md:text-base px-6 md:px-10 lg:px-16 py-2 md:py-3 rounded-lg 
      transition-all duration-300 ease-in-out hover:bg-[#5E943D] inline-flex items-center justify-center 
      min-w-max whitespace-nowrap ${className}`}
      {...props}
    >
      <span className="cursor-pointer">{children}</span>
    </button>
  )
}
