import React from 'react'

const OrnamentalVideo = () => {
  return (
    <section className="relative h-[500px] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/fence.jpg')" }} // Replace with your image
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Curious How We Install Our <span className="text-red-500">Ornamental Fences</span>?
        </h2>

        {/* Video Card */}
        <div className="inline-block bg-white text-black rounded shadow-md overflow-hidden max-w-sm">
          <a
            href="https://www.youtube.com/watch?v=QggJzZdIYPI"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative"
          >
            <img
              src="/fence2.jpg"
              alt="Ornamental Fence Video"
              className="w-full h-auto"
            />
            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 text-white text-4xl p-3 rounded-full">
                ▶
              </div>
            </div>
          </a>
          <div className="p-4 text-center">
            <p className="font-semibold text-sm">ORNAMENTAL FENCE</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrnamentalVideo
