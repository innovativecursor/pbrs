'use client'

import { useRouter } from 'next/navigation'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { motion } from 'framer-motion'

const BackButton = () => {
  const router = useRouter()

  return (
    <motion.button
      onClick={() => router.push('/properties')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="text-gray-700 flex items-center transition-all duration-300 cursor-pointer"
    >
      <IoIosArrowRoundBack size={30} />
      <span className="ml-1">Back</span>
    </motion.button>
  )
}

export default BackButton
