import React from 'react'

const CallUs = () => {
  return (
    <section className="relative py-16 px-6 md:px-20">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/fence.jpg')` }} // Replace with your background image
      />
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.6)] z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 text-black">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            Your <span className="text-red-500">Trusted, Local,</span> Minneapolis <br />
            Based Fence Company
          </h2>
          <p className="mt-4 max-w-lg">
            The Next Day Fences team has over a decade of experience building fences in Minneapolis and
            the surrounding metro area using the latest technology and offering the best warranties to our valued
            customers, earning us a reputation that we are proud to stand behind.
          </p>

          <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition">
            Call Us!
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img src="/fence.jpg" alt="Fence Example" className="rounded shadow-md w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  )
}

export default CallUs