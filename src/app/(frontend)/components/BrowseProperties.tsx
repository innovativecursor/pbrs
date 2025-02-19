import React from 'react'
import Image from 'next/image'
import tilt from '../public/assets/tilt_image.png'

const BrowseProperties: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col items-center px-6 md:px-8 py-16 pb-36">
      <h3 className="text-[#71AE4C] font-semibold mt-[40px] mb-[33px] uppercase tracking-wide text-sm flex flex-col justify-center items-center">
        Explore Our Featured Properties
        <Image src={tilt} width="120" height="120" alt="vector" className="mt-[5px]" />
      </h3>
      <h2 className="text-2xl mb-[60px] md:text-[48px] w-full max-w-[47rem] font-semibold text-center mt-2">
        Find a home that perfectly fits your lifestyle and budget.
      </h2>

      {/* Merged Steps Section */}
      <div className="border border-[#CFCFCF] rounded-lg bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              id: '01',
              title: 'Browse Listings',
              desc: 'Explore our selection of properties that match your needs and budget.',
              shadow: 'hover:shadow-lg hover:shadow-[#A0A0A0]/60 transition ease-in', // Top, left, bottom
            },
            {
              id: '02',
              title: 'Schedule a Site Tour',
              desc: 'Contact us to book a visit and personally view the property.',
              shadow: 'hover:shadow-xl hover:shadow-[#A0A0A0]/60 transition ease-in', // All sides
            },
            {
              id: '03',
              title: 'Get Expert Assistance',
              desc: 'Our real estate experts will guide you through the buying process, answering all your questions.',
              shadow: 'hover:shadow-xl hover:shadow-[#A0A0A0]/60 transition ease-in', // All sides
            },
            {
              id: '04',
              title: 'Secure Your Dream Home',
              desc: 'Finalize the paperwork and move into your new home hassle-free.',
              shadow: 'hover:shadow-lg hover:shadow-[#A0A0A0]/60 transition ease-in', // Right, top, bottom
            },
          ].map((step, index, array) => (
            <div
              key={step.id}
              className={`flex flex-col items-start text-left p-6 transition-shadow duration-300 ease-in-out ${step.shadow} ${
                index !== array.length - 1 ? 'border-r border-gray-300' : ''
              }`}
            >
              {/* Step Number */}
              <span className="text-[#71AE4C] text-[48px] font-bold">{step.id}</span>

              {/* Title */}
              <h4 className="text-[16px] font-medium mt-5">{step.title}</h4>

              {/* Description (Aligned properly) */}
              <p className="text-[#828282] text-[13px] mt-5 min-h-[60px] leading-relaxed flex-grow flex items-center">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrowseProperties
