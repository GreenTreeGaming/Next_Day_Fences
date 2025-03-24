import React from 'react'

const HeaderWood = () => {
  return (
    <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/fence2.jpg')" }} // Replace with your background image
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Why A Wood Fence?</h1>
        <p className="mb-6 text-sm md:text-base leading-relaxed">
          Aesthetically, there’s no substitute for the visual charm that real wood offers.
          The rich blends of grain and color tones present in the boards create a fence
          that is mesmerizingly beautiful. This aspect coupled with our expert advice for
          how to properly maintain your new fence makes a wood fence a great option for
          most homeowners.
        </p>

        {/* Subtext */}
        <p className="bg-white bg-opacity-80 text-black py-2 px-4 inline-block rounded mb-6 text-sm md:text-base">
          All our wood fences come standard with our steel post technology
        </p>

        {/* Button */}
        <div>
          <a href="/steel-posts">
            <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition">
              Let&apos;s Look
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeaderWood
