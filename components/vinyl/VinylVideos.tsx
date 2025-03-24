"use client"

import React from "react"

const VinylVideos = () => {
  // Example video data
  const videos = [
    {
      title: "WHITE VINYL",
      url: "https://www.youtube.com/watch?v=VIDEO_ID",
      thumbnail: "/fence.jpg", // Replace with your real image
    },
    {
      title: "TAN VINYL",
      url: "https://www.youtube.com/watch?v=VIDEO_ID",
      thumbnail: "/fence2.jpg",
    },
    {
      title: "MOCHA VINYL",
      url: "https://www.youtube.com/watch?v=VIDEO_ID",
      thumbnail: "/fence.jpg",
    },
  ]

  return (
    <section
      className="relative h-[500px] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/fence.jpg')" }} // Replace with your background image
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Curious How We Install Our <span className="text-red-500">Vinyl</span> Fences?
        </h2>

        {/* Videos Container */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white text-black rounded shadow-md overflow-hidden max-w-xs w-full"
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <img
                  src={video.thumbnail}
                  alt={`${video.title} Fence Video`}
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
                <p className="font-semibold text-sm">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VinylVideos
