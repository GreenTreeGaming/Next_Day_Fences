import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

const ContactUs = () => {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        Contact <span className="text-red-600">Us</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {/* Contact Info */}
          <div className="mb-6 space-y-2">
            <h3 className="text-lg font-semibold">Next Day Fences</h3>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Phone size={16} />
              <span>612-868-4879</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Mail size={16} />
              <span>info@nextdayfences.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <MapPin size={16} />
              <span>3463 Hiawatha Ave Minneapolis, MN 55406</span>
            </div>
          </div>

          {/* Quote CTA */}
          <div className="mb-6 flex items-center gap-4">
            <p className="font-medium text-sm md:text-base">
              Want An Instant Quote <span className="text-red-600">Now</span>?
            </p>
            <button className="bg-red-600 text-white px-4 py-1 rounded-md font-semibold hover:bg-red-700 transition text-sm md:text-base">
              Learn More
            </button>
          </div>

          {/* Fence Image */}
          <div>
            <img
              src="/fence.jpg"
              alt="Fence Example"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Form</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First & Last Name"
              className="border border-gray-300 px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              placeholder="Address"
              className="border border-gray-300 px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <textarea
            placeholder="We would love to learn about your project!"
            className="border border-gray-300 px-3 py-2 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
            rows={4}
          ></textarea>

          <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition text-sm md:text-base">
            Submit
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
