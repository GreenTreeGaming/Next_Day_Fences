"use client"

import React, { useState } from "react"

type ImageItem = {
  src: string
  alt: string
}

const AluminumMain: React.FC = () => {
  // Array of images for the fence
  const images: ImageItem[] = [
    { src: "/fence.jpg", alt: "Aluminum Fence 1" },
    { src: "/fence2.jpg", alt: "Aluminum Fence 2" },
    { src: "/fence2.jpg", alt: "Aluminum Fence 3" },
    { src: "/fence2.jpg", alt: "Aluminum Fence 4" },
  ]

  // State for selected image
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  // Handler for clicking a thumbnail (ensuring index is a number)
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

        {/* Right Column: Heading, Text, CTA, Details & Specs, Features */}
        <div className="text-gray-800">
          <h2 className="text-red-600 text-2xl md:text-3xl font-bold mb-2">
            Aluminum <span className="text-black">Fence</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            If you prefer an open concept fence that has a luxurious yet narrow profile,
            aluminum is a fantastic solution for many backyards and lots.
            Aluminum fences are both strong and stylish, providing a sleek look
            while still offering top-notch stability. Our aluminum posts are driven deep
            for added support, ensuring your fence stands firm year after year.
            Next Day Fences' aluminum fencing is the superior strength
            alternative to aluminum, giving you the peace of mind Minneapolis's harsh
            winters demand.
          </p>

          {/* Call-to-Action Button */}
          <a
            href="/contact-us"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition mb-8"
          >
            Ready To Talk?
          </a>

          {/* Info Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Details & Specs */}
            <div>
              <h3 className="font-bold text-lg mb-2">Details &amp; Specs</h3>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                <li>Height: 4 - 5 feet</li>
                <li>Footing Depth: 2 - 3 feet</li>
                <li>Gate Sizes: 4 - 12 feet</li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-bold text-lg mb-2">Features</h3>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                <li>2.5" Aluminum Posts</li>
                <li>Driven Post Installation</li>
                <li>Strong Aluminum Framework &amp; Rails</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AluminumMain
