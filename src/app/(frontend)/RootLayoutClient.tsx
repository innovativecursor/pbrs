'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import './styles.css'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/ui/Loader' // Assuming you have a Loader component
import Toaster from './components/ui/Toaster'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true) // Show loader
    const timer = setTimeout(() => setLoading(false), 600) // Fake delay for UX

    return () => clearTimeout(timer)
  }, [pathname]) // Run on route change

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster />
        <Navbar />
        {loading && <Loader />} {/* Show Loader when loading */}
        <main
          className={`${pathname.includes('/property') ? 'pt-[80px]' : ''} ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
