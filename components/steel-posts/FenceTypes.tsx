import React from "react";

const FenceTypes = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Ornamental Fence Row */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Will I see the steel post on my ornamental fence?
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-6">
              Our fence installation process is engineered to impress homeowners with the clean look it gives
              compared to concrete sets while also adding lifetime stability. We drive all our posts deep
              in the ground!
            </p>
            <button className="bg-red-600 text-white px-6 py-2 font-semibold rounded hover:bg-red-700 transition">
              I Want To See The Posts!
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src="/fence.jpg"
              alt="Ornamental Fence"
              className="w-full h-auto rounded shadow-md"
            />
          </div>
        </div>

        {/* Vinyl Fence Row (Reversed) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Will I see the steel post on my vinyl fence?
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-6">
              Our vinyl fences are designed to impress homeowners with the sleek look it gives
              compared to concrete sets while also adding lifetime stability. We drive all our posts deep
              in the ground!
            </p>
            <button className="bg-red-600 text-white px-6 py-2 font-semibold rounded hover:bg-red-700 transition">
              I Want To See The Posts!
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src="/fence2.jpg"
              alt="Vinyl Fence"
              className="w-full h-auto rounded shadow-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FenceTypes;
