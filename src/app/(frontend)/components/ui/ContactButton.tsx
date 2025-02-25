'use client'

import React from 'react'

interface ButtonProps {
  text: string
  onClick?: () => void
  className?: string
}

const ContactButton: React.FC<ButtonProps> = ({ text, onClick, className = '' }) => {
  return (
    <button
      className={`bg-[#71AE4C] mt-2 text-[#fff] text-[14px] px-12 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#5E943D] ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default ContactButton
