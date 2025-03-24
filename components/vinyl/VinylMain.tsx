"use client"

import React, { useState } from "react"

type ImageItem = {
  src: string
  alt: string
}

const images: ImageItem[] = [
  { src: "/fence.jpg", alt: "Vinyl Fence Main" },
  { src: "/fence2.jpg", alt: "Vinyl Fence Close-up 1" },
  { src: "/fence.jpg", alt: "Vinyl Fence Close-up 2" },
  { src: "/fence2.jpg", alt: "Vinyl Fence Close-up 3" },
]

const VinylMain: React.FC = () => {
  // State for selected image (typed as number)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  // Handler for clicking a thumbnail with index typed as number
  const handleThumbnailClick = (index: number): void => {
    setSelectedIndex(index)
  }

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Main Image + Thumbnails */}
        <div>
          {/* Main Image */}
          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="w-full h-auto rounded shadow mb-4"
          />

          {/* Thumbnails Row */}
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className="focus:outline-none"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-auto rounded shadow border-2 ${
                    selectedIndex === index
                      ? "border-red-600"
                      : "border-transparent"
                  } hover:border-red-600 transition`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Heading, Text, CTA, Features, Specs, etc. */}
        <div className="text-gray-800">
          {/* Heading + Description */}
          <h2 className="text-red-600 text-2xl md:text-3xl font-bold mb-2">
            Vinyl <span className="text-black">Fence</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            Vinyl fences are the best solution for homeowners who want a
            maintenance-free fence that still offers exceptional privacy. They
            bring heavy duty yet attractive panels to your yard, while still
            providing a sleek modern look that is perfect for a variety of home
            styles. Our steel post technology is also standard on every vinyl
            fence, which is a premium, no-rot alternative to wood.
          </p>

          {/* CTA Button */}
          <a
            href="/contact-us"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition mb-8"
          >
            Ready To Talk?
          </a>

          {/* Features */}
          <h3 className="font-bold text-lg mb-2">Features</h3>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base mb-6">
            <li>2" x 4" and 2" x 6" Main Rail</li>
            <li>Top Tongue &amp; Groove Pickets</li>
            <li>Steel Post Installation</li>
            <li>Available in White, Tan, and other Colors</li>
          </ul>

          {/* Details & Specs */}
          <h3 className="font-bold text-lg mb-2">Details &amp; Specs</h3>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base mb-6">
            <li>Height: 3 - 6 feet</li>
            <li>Footing Depth: 2 - 3.5 feet</li>
            <li>Gate Sizes: 4 - 12 feet</li>
          </ul>

          {/* Homeland Vinyl Difference */}
          <h3 className="font-bold text-lg mb-2">The Homeland Vinyl Difference</h3>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            <li>Most reinforcement used at gates and posts</li>
            <li>UV protectant to avoid yellowing</li>
            <li>Durable, low-maintenance material</li>
            <li>Lifetime limited warranty</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default VinylMain
