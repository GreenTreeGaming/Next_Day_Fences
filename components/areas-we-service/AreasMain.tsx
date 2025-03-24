import React from "react"

// Service Areas array for easy maintenance
const serviceAreas = [
  "St. Paul, MN",
  "Eagan, MN",
  "Bloomington, MN",
  "Golden Valley, MN",
  "Maple Grove, MN",
  "Robbinsdale, MN",
  "Hopkins, MN",
  "Eden Prairie, MN",
  "Savage, MN",
  "Apple Valley, MN",
  "West Saint Paul, MN",
  "Roseville, MN",
  "New Brighton, MN",
  "Minnetonka, MN",
  "Twin Cities, MN",
  "Mounds View, MN",
  "Coon Rapids, MN",
  "Columbia Heights, MN",
  "Blaine, MN",
  "Fridley, MN",
  "Crystal, MN",
  "Champlin, MN",
  "Anoka, MN",
  "Ham Lake, MN",
  "Shoreview, MN",
  "Spring Lake Park, MN",
  "Stillwater, MN",
  "Forest Lake, MN",
  "Minneapolis, MN",
  "Richfield, MN",
  "Burnsville, MN",
  "Wayzata, MN",
  "Plymouth, MN",
  "New Hope, MN",
  "Prior Lake, MN",
  "Chaska, MN",
  "Chanhassen, MN",
  "Maplewood, MN",
  "Cottage Grove, MN",
  "Oakdale, MN",
  "Andover, MN",
  "Brooklyn Park, MN",
  "Brooklyn Center, MN",
  "Rogers, MN",
  "Otsego, MN",
  "Elk River, MN",
]

const AreasMain = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Minnesota Service Areas
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-12">
          We proudly serve the following locations throughout Minnesota,
          offering top-notch fence installations, repairs, and more.
        </p>

        {/* Grid of Service Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow hover:shadow-md transition text-gray-900 text-sm font-semibold"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AreasMain
