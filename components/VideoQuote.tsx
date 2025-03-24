import React from 'react'
import { ArrowRight } from 'lucide-react'

const VideoQuote = () => {
  return (
    <section className="my-16">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">
          Curious How We Install Our Fences? Click The Videos Below!
        </h2>
      </div>

      {/* Video Thumbnails */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 px-4">
        {/* Video 1 */}
        <div className="border shadow-lg rounded-md overflow-hidden w-full md:w-1/4">
          <a
            href="https://www.youtube.com/watch?v=QggJzZdIYPI"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative"
          >
            {/* Replace with your actual thumbnail image */}
            <img
              src="/fence2.jpg"
              alt="Horizontal Fence Video"
              className="w-full h-auto"
            />
            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Small circular overlay behind the icon */}
              <div className="bg-black/40 text-white text-4xl p-2 rounded-full">
                ▶
              </div>
            </div>
          </a>
          <div className="p-4 text-center">
            <p className="font-semibold">Horizontal Fence</p>
          </div>
        </div>

        {/* Video 2 */}
        <div className="border shadow-lg rounded-md overflow-hidden w-full md:w-1/4">
          <a
            href="https://www.youtube.com/watch?v=VIDEO_2"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative"
          >
            <img
              src="/fence2.jpg"
              alt="Horizontal Fence Video"
              className="w-full h-auto"
            />
            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Small circular overlay behind the icon */}
              <div className="bg-black/40 text-white text-4xl p-2 rounded-full">
                ▶
              </div>
            </div>
          </a>
          <div className="p-4 text-center">
            <p className="font-semibold">White Vinyl Fence</p>
          </div>
        </div>

        {/* Video 3 */}
        <div className="border shadow-lg rounded-md overflow-hidden w-full md:w-1/4">
          <a
            href="https://www.youtube.com/watch?v=VIDEO_3"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative"
          >
            <img
              src="/fence2.jpg"
              alt="Horizontal Fence Video"
              className="w-full h-auto"
            />
            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Small circular overlay behind the icon */}
              <div className="bg-black/40 text-white text-4xl p-2 rounded-full">
                ▶
              </div>
            </div>
          </a>
          <div className="p-4 text-center">
            <p className="font-semibold">Ornamental Fence</p>
          </div>
        </div>
      </div>

      {/* Instant Fence Quote Section */}
      <div className="bg-red-700 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text Content */}
          <div>
            <h3 className="text-xl font-bold mb-2">Instant Fence Quote</h3>
            <p className="text-sm md:text-base">
              Our FREE online estimator allows you to easily compare different fence designs, heights,
              and gate configurations without taking any measurements yourself!
            </p>
          </div>
          {/* Button */}
          <a
            href="#"
            className="inline-flex items-center bg-white text-red-700 font-semibold px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition"
          >
            <span>Get An Instant Fence Estimate Now!</span>
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default VideoQuote