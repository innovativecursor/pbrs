const HomeExteriorDetails = () => {
  return (
    <div className="my-8 pt-8">
      <h2 className="text-2xl font-medium mb-4">Home Exterior Details</h2>
      <div className="border-[0.5px] border-[#ACACAC] rounded-lg grid grid-cols-2 gap-0">
        <div className="border-b border-r border-[#ACACAC] p-6">
          <h3 className="font-medium">Living room</h3>
          <p className="text-[#181818] text-[14px] mt-1">
            Modern facade with a landscaped front yard
          </p>
        </div>
        <div className="border-b border-[#ACACAC] p-6">
          <h3 className="font-medium">Dining Area</h3>
          <p className="text-[#181818] text-[14px] mt-1">
            Covered carport with secure gated entrance
          </p>
        </div>

        <div className="border-b border-r border-[#ACACAC] p-6">
          <h3 className="font-medium">Dining Area</h3>
          <p className="text-[#181818] text-[14px] mt-1">Secure perimeter fencing</p>
        </div>
        <div className="border-b border-[#ACACAC] p-6">
          <h3 className="font-medium">Community Area</h3>
          <p className="text-[#181818] text-[14px] mt-1">
            Proximity to parks, community areas, and playgrounds
          </p>
        </div>

        <div className="border-r border-[#ACACAC] p-6">
          <h3 className="font-medium">Terrace</h3>
          <p className="text-[#181818] text-[14px] mt-1">Terrace with a scenic view</p>
        </div>
        <div className="p-6">
          <h3 className="font-medium">Paint</h3>
          <p className="text-[#181818] text-[14px] mt-1">
            High-quality exterior paint and finishing
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeExteriorDetails
