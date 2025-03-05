import Image from 'next/image'

const PropertyGallery = () => {
  return (
    <div className="flex gap-4">
      <Image src="/house.jpg" width={600} height={400} alt="House" className="rounded-lg" />
      <div className="grid grid-cols-3 gap-2">
        <Image src="/bathroom.jpg" width={150} height={100} alt="Bathroom" className="rounded-lg" />
        <Image
          src="/livingroom.jpg"
          width={150}
          height={100}
          alt="Living Room"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

export default PropertyGallery
