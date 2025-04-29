const HomeExteriorDetails = ({
  garageDesc,
  balconyDesc,
  accessibilityDesc,
  backyardDesc,
  terraceDesc,
}: {
  garageDesc: string
  balconyDesc: string | null
  accessibilityDesc: string
  backyardDesc: string
  terraceDesc: string | null
}) => {
  return (
    <div className="my-8 pt-8">
      <h2 className="text-2xl font-medium mb-4">Home Exterior Details</h2>
      <div className="border-[0.5px] border-[#ACACAC] rounded-lg grid grid-cols-2 gap-0">
        <div className="border-b border-r border-[#ACACAC] p-6">
          <h3 className="font-medium">Garage</h3>
          <p className="text-[#181818] text-[14px] mt-1">{garageDesc}</p>
        </div>
        <div className="border-b border-[#ACACAC] p-6">
          <h3 className="font-medium">Balcony</h3>
          <p className="text-[#181818] text-[14px] mt-1">{balconyDesc || 'No balcony available'}</p>
        </div>

        <div className="border-b border-r border-[#ACACAC] p-6">
          <h3 className="font-medium">Accessibility</h3>
          <p className="text-[#181818] text-[14px] mt-1">{accessibilityDesc}</p>
        </div>
        <div className="border-b border-[#ACACAC] p-6">
          <h3 className="font-medium">Backyard</h3>
          <p className="text-[#181818] text-[14px] mt-1">{backyardDesc}</p>
        </div>

        <div className="border-r border-[#ACACAC] p-6">
          <h3 className="font-medium">Terrace</h3>
          <p className="text-[#181818] text-[14px] mt-1">{terraceDesc || 'No terrace available'}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeExteriorDetails
