import React from 'react'
import './styles.css'
import { Poppins, Albert_Sans } from 'next/font/google'

// Define the font loaders in the module scope
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const albertSans = Albert_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'PBRS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
