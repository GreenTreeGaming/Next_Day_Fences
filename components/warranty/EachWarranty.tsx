import React from 'react'
import { ShieldCheck, Wrench, Package, Trees } from 'lucide-react' // Example icons

const warranties = [
  {
    title: 'Vinyl Warranty',
    Icon: ShieldCheck, // use the imported icon
    description: `Our Vinyl Fences are designed to withstand extreme weather conditions while maintaining their color and structural integrity. Enjoy the benefits of a driven steel post system with no rotting, cracking, or warping.`,
    bullets: [
      'Lifetime Post Warranty',
      'UV-resistant panels',
      'Minimal maintenance required',
    ],
  },
  {
    title: 'Ornamental Steel Warranty',
    Icon: Wrench,
    description: `Our Ornamental Steel Fences offer the perfect balance of beauty and strength. The steel posts are driven deep for maximum stability, ensuring your fence will stay secure for years to come.`,
    bullets: [
      'No concrete footings needed',
      'Weather-resistant finish',
      'Rust protection guaranteed',
    ],
  },
  {
    title: 'Ornamental Aluminum Warranty',
    Icon: Package,
    description: `Aluminum fences are lightweight yet sturdy, providing a classic look without sacrificing durability. Our post system ensures minimal ground disruption and maximum longevity.`,
    bullets: [
      'Corrosion-resistant material',
      'Lifetime structural warranty',
      'Variety of decorative styles',
    ],
  },
  {
    title: 'Cedar Wood Warranty',
    Icon: Trees,
    description: `Enjoy the natural beauty of cedar with our advanced post system. This warranty covers rot, warping, and any structural failures related to post movement for the lifetime of your fence.`,
    bullets: [
      'Premium-grade cedar boards',
      'Lifetime post replacement',
      'Customizable designs',
    ],
  },
]

const EachWarranty = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {warranties.map(({ title, Icon, description, bullets }, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
          >
            {/* Text Content */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-red-600 mb-2">
                {title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                {description}
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1 mb-4">
                {bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <button className="bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 transition text-sm md:text-base">
                More Info
              </button>
            </div>

            {/* Icon */}
            <div className="flex justify-center md:justify-end">
              <Icon className="h-16 w-16 text-red-600" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EachWarranty
