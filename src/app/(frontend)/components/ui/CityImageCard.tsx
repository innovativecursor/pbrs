import Image, { StaticImageData } from 'next/image'

type CityImageCardProps = {
  img: string | StaticImageData
  cityName: string
  index: number
}

const CityImageCard: React.FC<CityImageCardProps> = ({ img, cityName, index }) => {
  return (
    <div className="relative overflow-hidden shadow-md group">
      <Image
        src={typeof img === 'string' ? img : img.src}
        alt={`City ${index + 1}`}
        width={350} // Enforcing consistent width for all images
        height={250} // Enforcing consistent height for all images
        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/40 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white font-semibold text-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          {cityName}
        </span>
      </div>
    </div>
  )
}

export default CityImageCard
