'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import './styles.css'
import { Poppins, Albert_Sans } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className={`${pathname.includes('/property') ? 'pt-[80px]' : ''}`}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
