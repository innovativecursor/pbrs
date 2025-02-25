import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const ButtonProperties: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-[#71AE4C] text-[#fff] text-[14px] px-16 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#5E943D] ${className}`}
      {...props}
    >
      <span className="cursor-pointer">{children}</span>
    </button>
  )
}
