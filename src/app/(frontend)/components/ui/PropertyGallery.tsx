'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

// Importing images and video
import houseImage from '../../public/assets/propertyImages/interiors-1.jpeg'
import interior1 from '../../public/assets/propertyImages/interiors-2.jpg'
import interior2 from '../../public/assets/propertyImages/interiors-3.jpg'
import videoThumbnail from '../../public/assets/propertyImages/thumbnail_image.jpg' // Thumbnail for video preview

const PropertyGallery = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVideo, setIsVideo] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0) // Tracks which media is shown as main image
  const videoSrc = 'https://www.youtube.com/watch?v=R_9-JElwV2A'

  // Images and videos array
  const mediaItems = [
    { type: 'image', src: houseImage.src },
    { type: 'image', src: interior1.src },
    { type: 'image', src: interior2.src },
    { type: 'video', src: videoSrc, thumbnail: videoThumbnail.src },
  ]

  // Function to open modal with the selected media
  const openModal = (index: number) => {
    setActiveIndex(index)
    setIsVideo(mediaItems[index].type === 'video')
    setIsOpen(true)
  }

  // Function to change the main image on thumbnail click
  const changeMainImage = (index: number) => {
    setSelectedIndex(index) // Updates the main image
    openModal(index) // Opens the modal as well
  }

  return (
    <div className="relative">
      {/* ✅ Main Image (Dynamic) */}
      {mediaItems[selectedIndex].type === 'video' ? (
        mediaItems[selectedIndex].src.includes('youtube.com') ||
        mediaItems[selectedIndex].src.includes('youtu.be') ? (
          <iframe
            width="600"
            height="400"
            src={mediaItems[selectedIndex].src.replace('watch?v=', 'embed/')}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg w-full cursor-pointer"
          ></iframe>
        ) : (
          <video
            controls
            className="rounded-lg w-full cursor-pointer"
            onClick={() => openModal(selectedIndex)}
          >
            <source src={mediaItems[selectedIndex].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      ) : (
        <Image
          src={mediaItems[selectedIndex].src}
          width={600}
          height={400}
          alt="House"
          className="rounded-lg w-full cursor-pointer"
          onClick={() => openModal(selectedIndex)}
        />
      )}

      {/* ✅ Thumbnail Images */}
      <div className="flex gap-2 mt-3 overflow-x-auto">
        {mediaItems.map((media, index) => (
          <div
            key={index}
            className={`border-4 ${
              selectedIndex === index ? 'border-[#71AE4C]' : 'border-transparent'
            } rounded-lg cursor-pointer`}
            onClick={() => changeMainImage(index)}
          >
            <Image
              src={media.type === 'video' ? media.thumbnail! : media.src}
              width={100}
              height={80}
              alt={`Thumbnail ${index}`}
            />
          </div>
        ))}
      </div>

      {/* ✅ Modal for full-screen view */}
      <AnimatePresence>
        {isOpen && (
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-md"
          >
            <Dialog.Panel className="relative bg-white p-4 shadow-lg w-full max-w-[90%] max-h-[80vh] md:max-w-screen-sm md:h-auto flex items-center justify-center rounded-lg">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-50"
              >
                <IoClose size={24} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1))
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 z-50 hidden md:flex"
              >
                <IoChevronBack size={24} />
              </button>

              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1))
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 z-50 hidden md:flex"
              >
                <IoChevronForward size={24} />
              </button>

              {/* ✅ Full-Screen Media */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-[350px] flex items-center justify-center"
              >
                {isVideo ? (
                  <video
                    key={activeIndex} // 🔥 Forces re-render when activeIndex changes
                    controls
                    className="w-full h-full object-cover rounded-lg"
                  >
                    <source src={mediaItems[activeIndex].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={mediaItems[activeIndex].src}
                    fill
                    alt="Enlarged Media"
                    className="object-cover rounded-lg"
                  />
                )}
              </motion.div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PropertyGallery
