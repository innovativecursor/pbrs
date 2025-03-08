import Breadcrumbs from '../../components/ui/Breadcrumbs'
import PropertyGallery from '../../components/ui/PropertyGallery'
import PropertyInfo from '../../components/ui/PropertyInfo'

const PropertyPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumbs />
      <button className="mt-4 text-gray-700">← Back</button>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Sidebar (Optional for Filters/Extras) */}

        {/* Main Content */}
        <div className="md:col-span-6 flex gap-8">
          <PropertyGallery />
          <PropertyInfo />
        </div>
      </div>
    </div>
  )
}

export default PropertyPage
