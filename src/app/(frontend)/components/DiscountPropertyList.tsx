import React from 'react'
import DiscountPropertyCard from './ui/DiscountPropertyCard'
import cityImage1 from '../public/assets/propertiesCities/city_image_1.png'
import cityImage2 from '../public/assets/propertiesCities/city_image_2.png'
import cityImage3 from '../public/assets/propertiesCities/city_image_3.png'

const properties = [
  {
    image: cityImage1,
    title: 'Pre-Selling Townhouses',
    location: 'Bacoor, Cavite',
    price: 'Starts at ₱3,500,000',
    bedrooms: 3,
    bathrooms: 2,
    size: '820 sq Ft',
    garage: '1 Garage',
    badge: 'Up to 10% Discount!',
    buttonText: 'Reserve Now',
  },
  {
    image: cityImage2,
    title: 'Luxury Condos',
    location: 'Bacoor, Cavite',
    price: 'Starts at ₱6,500,000',
    bedrooms: 3,
    bathrooms: 2,
    size: '820 sq Ft',
    garage: '1 Garage',
    badge: '0% Interest for 2 Years!',
    buttonText: 'Inquire Today',
  },
  {
    image: cityImage3,
    title: 'Duplex Home',
    location: 'Cavite City',
    price: 'Starts at ₱3,500,000',
    bedrooms: 3,
    bathrooms: 2,
    size: '820 sq Ft',
    garage: '1 Garage',
    badge: '15% Discount for Early Buyers!',
    buttonText: 'Reserve Today!',
  },
  {
    image: cityImage1,
    title: 'Pre-Selling Condo',
    location: 'Bacoor, Cavite',
    price: '₱3,800,000',
    bedrooms: 3,
    bathrooms: 2,
    size: '820 sq Ft',
    garage: 'City View',
    badge: '5% Down Payment Only!',
    buttonText: 'Reserve Now',
  },
]

const DiscountPropertyList: React.FC = () => {
  return (
    <section className="py-12">
      <h4 className="text-[18px] font-medium uppercase text-justify mb-5 text-[#71AE4C]">
        Limited-Time Property Deals – Grab Yours Now!
      </h4>
      <h2 className="text-[48px] font-bold text-justify mb-8">
        Popular Properties & Special Offers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property, index) => (
          <DiscountPropertyCard key={index} {...property} />
        ))}
      </div>
    </section>
  )
}

export default DiscountPropertyList
