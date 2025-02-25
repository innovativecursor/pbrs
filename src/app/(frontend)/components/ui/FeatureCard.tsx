'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
}

const FeatureCard: React.FC<FeatureCardProps & { index: number }> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      className="bg-[#E9FBE9] p-6 rounded-lg text-center flex flex-col items-center"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="flex flex-col items-center bg-[#E9FBE9] gap-[15px]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div className="bg-white p-4 rounded-full mb-4 shadow-lg">{icon}</motion.div>
        <motion.h3 className="text-lg font-medium">{title}</motion.h3>
        <motion.p className="text-[#393939] mt-2 w-full sm:w-[13rem]">{description}</motion.p>
      </motion.div>
    </motion.div>
  )
}

export default FeatureCard
