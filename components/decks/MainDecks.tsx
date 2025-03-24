import React from "react"

const MainDecks = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div>
          <img
            src="/fence.jpg" // Replace with your actual deck image
            alt="Deck Example"
            className="w-full h-auto rounded shadow"
          />
        </div>

        {/* Text Content */}
        <div className="text-gray-800">
          {/* Title + Underline */}
          <h2 className="text-2xl md:text-3xl font-bold mb-1">Decks</h2>
          <div className="h-1 w-16 bg-red-600 mb-6"></div>

          <p className="text-sm md:text-base leading-relaxed mb-6">
            At Ridgeline Fence and Deck, we specialize in lower level decks and deck refinishing.
            These types of projects work well within our current business model. We’ll work
            with you to design a deck that’s ideal for relaxing, grilling, or entertaining
            friends and family. Depending on the project, we can create a 3D rendering of
            the deck to make sure it is exactly as you pictured.
          </p>

          {/* Button */}
          <a
            href="/contact-us"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  )
}

export default MainDecks
