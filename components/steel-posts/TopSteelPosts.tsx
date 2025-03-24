import React from 'react'

const TopSteelPosts = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6" style={{ backgroundImage: `url('/fence.jpg')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Every Fence We Install Has <span className="text-red-500 font-bold">Driven Steel Posts!</span>
        </h2>
        <p className="text-lg mb-12">Why Should you Consider Steel Posts for Your Fence?</p>

        {/* 3 Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left text-white">
          {/* Feature 1 */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-2">No Post<br /><span className="text-white">Rot</span></h3>
            <p className="text-sm leading-relaxed">
              Our steel posts will be the last posts you will ever need installed at your home. They will NEVER rot, warp, or crack. They can also withstand 73 mph tornado force winds.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-2">Superior<br /><span className="text-white">Process</span></h3>
            <p className="text-sm leading-relaxed">
              Since we are using steel posts we are able to drive them in the ground past the frost line. By driving the fence posts 4-5 ft we eliminate frost heave, the dirty/concrete mess, and the delay needed for concrete to cure.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-2">Identical<br /><span className="text-white">Look</span></h3>
            <p className="text-sm leading-relaxed">
              We offer our steel fence posts with the SAME designs as those offering wood posts and concrete footings. That means you don’t have to sacrifice aesthetics to get the benefits and warranty of driven steel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopSteelPosts