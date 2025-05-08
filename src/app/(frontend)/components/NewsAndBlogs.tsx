'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import tilt from '../public/assets/tilt_image.png'
import { fetchNewsBlogs } from '../utils/api'
import BlogCard from './ui/BlogCard'

const NewsAndBlogs = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchNewsBlogs()
        setBlogs(
          data.sort(
            (a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
          ),
        )
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getBlogs()
  }, [])

  // Hide the section if there are no blogs and no errors
  if (!loading && blogs.length === 0 && !error) return null

  return (
    <section id="news">
      <motion.section
        className="w-full max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-[#71AE4C] font-semibold mt-[40px] mb-[33px] uppercase tracking-wide text-sm flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }}
          viewport={{ once: false }}
        >
          News & Blogs
          <Image src={tilt} width={120} height={120} alt="vector" className="mt-[5px]" />
        </motion.h3>

        <motion.h2
          className="text-2xl mb-[60px] md:text-[48px] font-semibold text-center mt-2 w-full max-w-[47rem] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
          viewport={{ once: false }}
        >
          Find a home that perfectly fits your lifestyle and budget.
        </motion.h2>

        {loading && <p className="text-center text-gray-500">Loading blogs...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: index * 0.2 },
              }}
              viewport={{ once: false }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </section>
  )
}

export default NewsAndBlogs
