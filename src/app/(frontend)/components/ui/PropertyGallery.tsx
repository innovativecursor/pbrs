import Image from 'next/image'

const PropertyGallery = () => {
  return (
    <div>
      {/* Main Image */}
      <Image src="/house.jpg" width={600} height={400} alt="House" className="rounded-lg w-full" />

      {/* Thumbnail Images */}
      <div className="flex gap-2 mt-3">
        <div className="border-2 border-green-500 rounded-lg p-1">
          <Image
            src="/house.jpg"
            width={100}
            height={80}
            alt="House Thumbnail"
            className="rounded-lg"
          />
        </div>
        <Image src="/bathroom.jpg" width={100} height={80} alt="Bathroom" className="rounded-lg" />
        <div className="relative">
          <Image
            src="/livingroom.jpg"
            width={100}
            height={80}
            alt="Living Room"
            className="rounded-lg"
          />
          <span className="absolute bottom-1 right-1 bg-black text-white text-xs px-2 py-1 rounded">
            12
          </span>
        </div>
      </div>
    </div>
  )
}

export default PropertyGallery
