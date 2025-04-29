'use client'

import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import iconImage from '../../public/assets/pbrs_logo.png'

export const showToast = (message: string, type: 'success' | 'error') => {
  const customIcon = (
    <Image src={iconImage} width={20} height={20} alt="Success" className="w-6 h-6" />
  )

  toast(message, {
    type: type,
    icon: type === 'success' ? customIcon : undefined,
  })
}

const Toaster = () => {
  return <ToastContainer theme="dark" position="top-center" autoClose={3000} />
}

export default Toaster
