import React from 'react'

// 1. Define your gallery items here:
const galleryItems = [
  {
    title: 'Hogwire',
    src: '/fence.jpg', // Replace with your actual image path
  },
  {
    title: 'Stockade - Side by Side Picket',
    src: '/fence2.jpg',
  },
  {
    title: 'Board on Board',
    src: '/fence.jpg',
  },
  {
    title: 'Horizontal',
    src: '/fence2.jpg',
  },
  {
    title: 'Custom Cedar',
    src: '/fence.jpg',
  },
  {
    title: 'Cortaman - Lattice Top',
    src: '/fence2.jpg',
  },
  // Add or remove items as needed
]

const Gallery = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold mb-1">
        Recent <span className="text-red-600">Wood Projects</span>
      </h2>
      <div className="h-1 w-16 bg-red-600 mb-8" />

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-auto rounded shadow"
            />
            <p className="mt-2 text-sm text-center text-gray-700">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
