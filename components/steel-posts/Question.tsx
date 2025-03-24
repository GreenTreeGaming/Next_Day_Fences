import React from 'react'

const Question = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Will I see the steel post if I choose a wood fence?
      </h2>

      {/* Images */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img
          src="/fence.jpg"
          alt="Fence Post 1"
          className="w-full h-auto rounded-md shadow"
        />
        <img
          src="/fence2.jpg"
          alt="Fence Post 2"
          className="w-full h-auto rounded-md shadow"
        />
        <img
          src="/fence.jpg"
          alt="Fence Post 3"
          className="w-full h-auto rounded-md shadow"
        />
      </div>

      {/* Description + Button */}
      <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-start md:items-center gap-6">
        <p className="flex-1 text-gray-700 text-sm md:text-base">
          Regardless of the style of wood fence you choose, your steel posts will be virtually hidden.
          Sitting just on the back of most wood fence panels, the steel posts do all the work. No more
          rotting posts, cracked concrete, or warped posts with our galvanized steel Grizzly posts
          installed on every wood fence we install.
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition">
          I Want To See The Posts!
        </button>
      </div>
    </section>
  )
}

export default Question
