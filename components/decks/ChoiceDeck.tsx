import React from "react"

// Example data array for modular items
const materials = [
  {
    title: "Cedar",
    image: "/fence.jpg", // Replace with your actual cedar image
    description: `Cedar is naturally resistant to rot and insects, making it a classic choice
    for decks. It offers a warm, rustic look that can be stained or left to
    weather naturally for a silvery patina.`,
  },
  {
    title: "Composite",
    image: "/fence2.jpg",
    description: `Composite decking is a low-maintenance alternative that resists fading,
    staining, and rotting. It’s made from a blend of wood fibers and
    recycled plastic, providing the natural look of wood without the upkeep.`,
  },
  {
    title: "Cedar-Tone Treated",
    image: "/fence.jpg",
    description: `Cedar-tone treated wood is pressure-treated for enhanced durability while
    maintaining a cedar-like appearance. It’s a cost-effective option that
    still offers warmth and beauty in outdoor spaces.`,
  },
]

const ChoiceDeck = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
        Decking Material Choice
      </h2>

      {/* Material List */}
      <div className="space-y-12">
        {materials.map((material, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div>
              <img
                src={material.image}
                alt={material.title}
                className="w-full h-auto rounded shadow"
              />
            </div>

            {/* Text & Button */}
            <div className="text-gray-800">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {material.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                {material.description}
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ChoiceDeck
