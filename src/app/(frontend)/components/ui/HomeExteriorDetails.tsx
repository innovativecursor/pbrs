const HomeExteriorDetails = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Home Exterior Details</h2>
      <div className="border rounded-lg p-4 grid grid-cols-2 gap-4">
        <div className="border-r p-4">
          <h3 className="font-semibold">Living room</h3>
          <p>Modern facade with a landscaped front yard</p>
        </div>
        <div className="p-4">
          <h3 className="font-semibold">Dining Area</h3>
          <p>Covered carport with secure gated entrance</p>
        </div>
        <div className="border-t border-r p-4">
          <h3 className="font-semibold">Dining Area</h3>
          <p>Secure perimeter fencing</p>
        </div>
        <div className="border-t p-4">
          <h3 className="font-semibold">Community Area</h3>
          <p>Proximity to parks, community areas, and playgrounds</p>
        </div>
        <div className="border-t border-r p-4">
          <h3 className="font-semibold">Terrace</h3>
          <p>Terrace with a scenic view</p>
        </div>
        <div className="border-t p-4">
          <h3 className="font-semibold">Paint</h3>
          <p>High-quality exterior paint and finishing</p>
        </div>
      </div>
    </div>
  )
}

export default HomeExteriorDetails
