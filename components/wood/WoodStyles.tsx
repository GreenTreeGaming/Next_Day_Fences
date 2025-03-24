import React from "react"

const woodStylesData = [
  {
    name: "Craftsman",
    image: "/fence.jpg", // Replace with your actual image path
    bullets: [
      "Three decorative trim boards per panel",
      "Similar look inside and out",
      "Contours to changes in grade",
    ],
  },
  {
    name: "Horizontal",
    image: "/fence2.jpg",
    bullets: [
      "Modern design",
      "Completely customizable picket design",
      "Level pickets with stair-steps to accommodate grade",
    ],
  },
  {
    name: "Stockade",
    image: "/fence2.jpg",
    bullets: [
      "Classic 'dog-eared' picket tops",
      "Finished side faces out",
      "Contours to changes in grade",
    ],
  },
  // Add more styles as needed
]

const WoodStyles = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        View Our <span className="text-red-600">Wood</span> Fence Styles
      </h2>

      {/* Styles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {woodStylesData.map((style, index) => (
          <div key={index} className="rounded shadow overflow-hidden">
            {/* Image + Overlay */}
            <div className="relative h-56 md:h-64">
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay with Bullets */}
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center p-4 text-white">
                <ul className="space-y-1 text-sm md:text-base">
                  {style.bullets.map((bullet, i2) => (
                    <li key={i2} className="list-none">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section: Style Name + Button */}
            <div className="bg-gray-200 p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{style.name}</h3>
              <button className="bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 transition text-sm md:text-base">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WoodStyles
