const HomeInteriorDetails = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Home Interior Details</h2>
      <div className="border rounded-lg p-4 grid grid-cols-2 gap-4">
        <div className="border-r p-4">
          <h3 className="font-semibold">Living room</h3>
          <p>Spacious living room with natural light and high ceilings</p>
        </div>
        <div className="p-4">
          <h3 className="font-semibold">Dining Area</h3>
          <p>Elegant dining area with modern lighting fixtures</p>
        </div>
        <div className="border-t border-r p-4 col-span-1">
          <h3 className="font-semibold">Bedroom</h3>
          <ul className="list-none space-y-1">
            <li>&#10004; Master bedroom with walk-in closet and en-suite bathroom</li>
            <li>&#10004; Additional bedrooms with ample storage space</li>
            <li>&#10004; Energy-efficient lighting and ventilation</li>
          </ul>
        </div>
        <div className="border-t p-4">
          <ul className="list-none space-y-1">
            <li>&#10004; Contemporary bathrooms with premium fixtures</li>
            <li>&#10004; Wooden flooring in bedrooms and tiled flooring in common areas</li>
          </ul>
        </div>
        <div className="border-t border-r p-4">
          <h3 className="font-semibold">Bathroom</h3>
          <p>Contemporary bathrooms with premium fixtures</p>
        </div>
        <div className="border-t p-4">
          <h3 className="font-semibold">Kitchen</h3>
          <p>Fully equipped kitchen with granite countertops and built-in cabinets</p>
        </div>
      </div>
    </div>
  )
}

export default HomeInteriorDetails
