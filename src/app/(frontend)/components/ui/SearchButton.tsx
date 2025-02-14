import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const SearchButton: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-[#71AE4C] text-[#fff] px-14 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#5E943D] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default SearchButton
