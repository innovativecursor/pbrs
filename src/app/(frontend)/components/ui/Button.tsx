import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg border border-white text-white text-[16px] cursor-pointer bg-transparent transition hover:bg-white hover:text-black ${className}`}
      {...props}
    >
      <span className="cursor-pointer">{children}</span>
    </button>
  )
}
