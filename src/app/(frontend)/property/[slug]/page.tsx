import Breadcrumbs from '../../components/ui/Breadcrumbs'
import PropertyGallery from '../../components/ui/PropertyGallery'
import PropertyInfo from '../../components/ui/PropertyInfo'
import PropertyAgent from '../../components/ui/PropertyAgent'
import PropertyDescription from '../../components/ui/PropertyDescription'
import PropertyFeatures from '../../components/ui/PropertyFeatures'
import HomeInteriorDetails from '../../components/ui/HomeInteriorDetails'
import HomeExteriorDetails from '../../components/ui/HomeExteriorDetails'
import BackButton from '../../components/ui/BackButton'
import InquiryForm from '../../components/ui/InquiryForm'

const PropertyPage = () => {
  return (
    <div className="mx-auto w-full max-w-full">
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto p-6 w-full">
        <BackButton />
        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 border-b border-gray-300 pb-10 w-full max-w-[95%] mx-auto">
          <div className="w-full">
            <PropertyGallery />
          </div>
          <div className="w-full">
            <PropertyInfo />
          </div>
        </div>

        {/* Features & Property Agent Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 relative overflow-hidden border-b border-gray-300 pb-10 w-full max-w-[95%] mx-auto">
          <div className="md:col-span-1 lg:col-span-2 w-full">
            <PropertyDescription />
            <PropertyFeatures />
          </div>

          {/* Floating Property Agent */}
          <div className="relative md:col-span-1 w-full max-w-[90%] mx-auto">
            <PropertyAgent />
          </div>
        </div>

        {/* HomeInteriorDetails & HomeExteriorDetails Section */}
        <div className="w-full max-w-[95%] mx-auto">
          <HomeInteriorDetails />
          <HomeExteriorDetails />
        </div>
        <div className="w-full max-w-[95%] mx-auto pt-8 pb-15">
          <InquiryForm />
        </div>
      </div>
    </div>
  )
}

export default PropertyPage
