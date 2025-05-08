'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { submitContactUs } from '../../utils/api'
import { showToast } from './Toaster'
import { error } from 'console'

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: '',
    message: '',
  })

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const success = await submitContactUs(formData)

    if (success) {
      // Optional: Reset form or show a success message
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        contactMethod: '',
        message: '',
      })
      showToast(`Thank you, we'll get back to you!`, 'success')
    } else {
      showToast('Failed to submit inquiry.', 'error')
    }
  }

  return (
    <section id="inquiry">
      <div className="p-8 rounded-xl max-w-7xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-center">Get in Touch with Us!</h2>
        <p className="text-center text-gray-600 mb-8 mt-5 max-w-[530px] mx-auto">
          Have questions about this property? Fill out the form below, and our agent will reach out
          to you shortly!
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12 lg:p-18 xl:p-24 bg-gray-100 rounded-xl"
        >
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name and surname"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Preferred Contact Method</label>
            <div className="relative">
              <button
                type="button"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-justify"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {formData.contactMethod || 'Select the contact method'}
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute w-full bg-white border rounded-lg shadow-md mt-1 z-10"
                  >
                    {['Email', 'Phone Call', 'WhatsApp'].map((method) => (
                      <li
                        key={method}
                        className="p-3 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, contactMethod: method }))
                          setDropdownOpen(false)
                        }}
                      >
                        {method}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you're looking for..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-28"
              required
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#71AE4C] text-white font-semibold py-3 rounded-lg hover:bg-[#000000] transition"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default InquiryForm
