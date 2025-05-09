'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryItem {
  id: string
  image: {
    id: number
    url: string
    mimeType: string
    filename: string
  }
}

interface PropertyGalleryProps {
  images: GalleryItem[]
}

const PropertyGallery = ({ images }: PropertyGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleOpen = (index: number) => {
    setSelectedIndex(index)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      {images.length > 0 && (
        <div className="relative cursor-pointer" onClick={() => handleOpen(selectedIndex)}>
          {images[selectedIndex].image.mimeType?.startsWith('image') ? (
            <Image
              src={
                images[selectedIndex].image.url.startsWith('/api')
                  ? images[selectedIndex].image.url
                  : `/api${images[selectedIndex].image.url}`
              }
              alt={images[selectedIndex].image.filename}
              width={1000}
              height={600}
              className="rounded-[13px] object-cover w-full h-[40vh] max-h-[40vh]"
            />
          ) : (
            <video
              src={
                images[selectedIndex].image.url?.startsWith('/api')
                  ? images[selectedIndex].image.url
                  : `/api${images[selectedIndex].image.url}`
              }
              controls
              className="rounded-[13px] w-full h-[40vh] object-cover max-h-[40vh]"
            />
          )}
        </div>
      )}

      {/* Thumbnails below the main image - scrollable container */}
      <div className="overflow-x-auto flex space-x-2 pb-4">
        {images.map((item, index) => (
          <div
            key={item.id}
            className="cursor-pointer relative flex-shrink-0"
            onClick={() => setSelectedIndex(index)} // ✅ Only update main view, don't open modal
          >
            {item.image.mimeType?.startsWith('image') ? (
              <Image
                src={item.image.url.startsWith('/api') ? item.image.url : `/api${item.image.url}`}
                alt={item.image.filename}
                width={200}
                height={100}
                className="rounded-[13px] object-cover w-[200px] h-[132px]"
              />
            ) : (
              <video
                src={item.image.url?.startsWith('/api') ? item.image.url : `/api${item.image.url}`}
                controls
                className="rounded-[13px] w-[200px] h-[132px] object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal for viewing the full-size image/video */}
      <AnimatePresence>
        {isOpen && (
          <Dialog
            open={isOpen}
            onClose={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          >
            <Dialog.Panel className="relative max-w-4xl mx-auto">
              <button onClick={handleClose} className="absolute top-2 right-2 text-white text-2xl">
                <IoClose />
              </button>
              <div className="flex items-center justify-center">
                {images[selectedIndex].image.mimeType.startsWith('image') ? (
                  <Image
                    src={
                      images[selectedIndex].image.url.startsWith('/api')
                        ? images[selectedIndex].image.url
                        : `/api${images[selectedIndex].image.url}`
                    }
                    alt={images[selectedIndex].image.filename}
                    width={1000}
                    height={600}
                    className="rounded-[13px] max-h-[80vh] object-contain"
                  />
                ) : (
                  <video
                    src={
                      images[selectedIndex].image.url?.startsWith('/api')
                        ? images[selectedIndex].image.url
                        : `/api${images[selectedIndex].image.url}`
                    }
                    controls
                    className="rounded-[13px] max-h-[80vh] object-contain"
                  />
                )}
              </div>
              <div className="flex justify-between mt-4">
                <button onClick={handlePrev} className="text-white text-3xl">
                  <IoChevronBack />
                </button>
                <button onClick={handleNext} className="text-white text-3xl">
                  <IoChevronForward />
                </button>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PropertyGallery
