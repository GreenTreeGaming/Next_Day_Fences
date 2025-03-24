import React from 'react'
import { Check, Settings, ThumbsUp, DollarSign } from 'lucide-react'

const Header = () => {
  return (
    <header>
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center flex justify-center items-center text-white text-center px-4" style={{ backgroundImage: `url('/fence2.jpg')` }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold drop-shadow-lg">NEXT DAY FENCES</h1>
          <p className="mt-3 text-lg font-semibold drop-shadow-md">YOUR TRUSTED MINNEAPOLIS FENCE CONTRACTOR</p>
          <p className="mb-6 text-lg font-semibold drop-shadow-md">NEXT DAY FENCES</p>

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <a
              href="tel:612-868-4879"
              className="bg-black text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-800 transition"
            >
              Call Us
            </a>
            <a
              href="https://qualify.mysalesman.com/start?613CA592"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Instant Quote
            </a>
          </div>

          {/* Location */}
          <p className="text-lg font-medium mt-4 drop-shadow-sm">
            Located In{' '}
            <a
              href="https://www.google.com/maps/place/Minneapolis,+MN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline hover:text-blue-400 transition"
            >
              Minneapolis, MN
            </a>
          </p>
        </div>
      </div>

      {/* Value Props Section */}
      <div className="bg-red-700 text-white py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-8 px-4">
        <div>
          <Check className="mx-auto mb-2" size={32} />
          <p><span className="font-bold">Lifetime Warranty</span> On Every<br />Post we Install No Matter The<br />Design Or Style.</p>
        </div>
        <div>
          <Settings className="mx-auto mb-2" size={32} />
          <p>Exclusive <span className="font-bold">Driven Steel Post</span><br />Technology For Every Type Of<br />Fence We Install.</p>
        </div>
        <div>
          <ThumbsUp className="mx-auto mb-2" size={32} />
          <p>Over 490 5 Star Reviews on<br /><span className="font-bold">Google</span>, <span className="font-bold">Facebook</span>, and<br /><span className="font-bold">Nextdoor</span>.</p>
        </div>
        <div>
          <DollarSign className="mx-auto mb-2" size={32} />
          <p>Competitive Pricing Without<br />Sacrificing On Our Quality<br />Materials.</p>
        </div>
      </div>
    </header>
  )
}

export default Header