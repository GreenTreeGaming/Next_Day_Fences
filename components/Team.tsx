import React from 'react'

const Team = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1 max-w-sm">
          <img
            src="/ceo.jpg" // Replace with the actual path
            alt="Name Here - Next Day Fences"
            className="w-full rounded-md shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            About Next Day Fences
          </h2>
          <div className="h-1 w-24 bg-red-600 mb-4" />

          <p className="mb-4 text-gray-800">
            Hi my name is Name Here, founder and owner of Next Day Fences. Five years ago I started Next Day
            with the simple idea that fences needed to be built better.
          </p>

          <p className="mb-4 text-gray-800">
            We have grown our team without sacrificing quality or customer service. We strive to find the most
            innovative ways to build fence that allow us to provide the strongest, quickest, and most beautiful ways
            possible to build a fence for our valued customers. This innovation has allowed us to bring new products
            to market that we not only use on our own installations, but wholesale to the 30 plus fence companies we
            work with locally and across the country, with the goal being to raise the standards in our trade. We
            specialize in the driven post method that has revolutionized the industry, and our company allowing us to
            provide a lifetime warranty on every post we install.
          </p>

          <button className="bg-red-600 text-white px-6 py-2 mt-4 font-semibold rounded hover:bg-red-700 transition">
            Meet The Rest Of The Team!
          </button>
        </div>
      </div>
    </section>
  )
}

export default Team