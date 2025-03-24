import React from 'react'

const HeaderWarranty = () => {
  return (
    <section className="w-full">
      {/* Hero / Background Image */}
      <div
        className="relative h-60 md:h-72 bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/fence2.jpg')" }} // Replace with your image path
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-0"></div>

        {/* Title + Subtitle */}
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl font-bold">
            Next Day Fences
          </h1>
          <p className="text-md md:text-xl font-semibold mt-1">
            WARRANTY INFORMATION
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            We Make it <span className="text-red-600">Simple</span>
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-1">
            <li>
              <strong>Post Installation</strong>
            </li>
            <li>
              <strong>Material</strong>
            </li>
            <li>
              <strong>Labor</strong>
            </li>
          </ul>
          <p className="mt-4 text-lg font-bold text-red-600">
            For <span className="text-black">Every</span> Material
          </p>
        </div>

        {/* Right Column: Logo */}
        <div className="flex items-center justify-center">
          <img
            src="/fencelogo.jpg"
            alt="Next Day Fences Logo"
            className="max-h-40 md:max-h-48"
          />
        </div>
      </div>
    </section>
  )
}

export default HeaderWarranty
