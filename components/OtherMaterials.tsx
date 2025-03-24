import React from 'react'

const OtherMaterials = () => {
  const materials = [
    { name: 'WOOD', image: '/fence.jpg' },
    { name: 'VINYL', image: '/fence.jpg' },
    { name: 'ORNAMENTAL', image: '/fence.jpg' },
  ]

  return (
    <section className="py-16 px-4 text-center">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-1">Explore Our Material Options</h2>
      <div className="w-24 h-1 bg-red-600 mx-auto mb-10" />

      {/* Material Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {materials.map((material, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs h-40 rounded-md overflow-hidden shadow-md mx-auto"
          >
            <img
              src={material.image}
              alt={material.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="text-white text-xl font-semibold tracking-wide">
                {material.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OtherMaterials