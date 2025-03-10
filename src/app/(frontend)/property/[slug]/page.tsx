import Breadcrumbs from '../../components/ui/Breadcrumbs'
import PropertyGallery from '../../components/ui/PropertyGallery'
import PropertyInfo from '../../components/ui/PropertyInfo'
import PropertyAgent from '../../components/ui/PropertyAgent'
import PropertyDescription from '../../components/ui/PropertyDescription'
import PropertyFeatures from '../../components/ui/PropertyFeatures'
import { IoIosArrowRoundBack } from 'react-icons/io'
import HomeInteriorDetails from '../../components/ui/HomeInteriorDetails'
import HomeExteriorDetails from '../../components/ui/HomeExteriorDetails'
import BackButton from '../../components/ui/BackButton'

const PropertyPage = () => {
  return (
    <div className="mx-auto">
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto p-6">
        <BackButton />
        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 border-b border-gray-300 pb-10">
          <div className="w-full">
            <PropertyGallery />
          </div>
          <div className="w-full">
            <PropertyInfo />
          </div>
        </div>

        {/* Features & Property Agent Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 relative overflow-hidden border-b border-gray-300 pb-10">
          <div className="md:col-span-2">
            <PropertyDescription />
            <PropertyFeatures />
          </div>

          {/* Floating Property Agent */}
          <div className="relative">
            <PropertyAgent />
          </div>
        </div>

        {/* HomeInteriorDetails & HomeExteriorDetails Section */}
        <div className="md:col-span-5">
          <HomeInteriorDetails />
          <HomeExteriorDetails />
        </div>
      </div>
    </div>
  )
}

export default PropertyPage
