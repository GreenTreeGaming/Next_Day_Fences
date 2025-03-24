import React from 'react'

const HowItStarted = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        How It Started!
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image */}
        <div className="flex-1">
          <img
            src="/founders.webp"
            alt="Next Day Fences Founders"
            className="w-full h-auto rounded shadow"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-gray-800 text-sm md:text-base leading-relaxed">
          <p className="mb-4">
            Next Day Fences is a locally owned and operated company
            based out of Minneapolis, Minnesota. It was founded by Max Wiczek,
            who has been in the fencing industry for over a decade. From the
            simple idea that fences needed to be built better, Next Day has
            grown to become one of the leading fence builders in the Twin
            Cities.
          </p>
          <p className="mb-4">
            Drawing inspiration from the local surroundings, Max set out to
            create fences that could withstand Minnesota’s harsh winters while
            still offering top-notch craftsmanship. Over the years, Next Day Fences has embraced the latest innovations in fencing
            materials and installation methods, consistently delivering quality
            and durability for every project.
          </p>
          <p>
            Today, Next Day Fences remains true to its roots—serving
            homeowners and businesses across Minneapolis with a commitment to
            excellence and a passion for building fences that stand the test of
            time. Whether it’s a custom cedar fence, ornamental steel, or a
            modern vinyl enclosure, we take pride in every board we set and
            every post we drive.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItStarted
