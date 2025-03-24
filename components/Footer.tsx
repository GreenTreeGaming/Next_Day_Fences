import React from 'react'
import { Mail, Phone, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Location Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Where Are We Located?</h3>
          <p className="mb-2 text-sm">
            Next Day Fences is located at{' '}
            <a
              href="https://maps.google.com?q=3463+Hiawatha+Ave+Minneapolis,+MN+55406"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              3463 Hiawatha Ave Minneapolis, MN 55406
            </a>
            . We encourage customers to stop by to say hello and check out our
            extensive inventory!
          </p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.7083785379993!2d-93.22812458447055!3d44.94698417909857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d087bb8f0ef%3A0x94b9aeaa89cc01e!2s3463%20Hiawatha%20Ave%2C%20Minneapolis%2C%20MN%2055406!5e0!3m2!1sen!2sus!4v1711143672329!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Next Day Fences Location"
              className="rounded-md shadow-md"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Service Areas */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-red-500">Minnesota Service Areas</h3>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            {[
              'St. Paul', 'Eagan', 'Bloomington', 'Golden Valley', 'Maple Grove', 'Robbinsdale',
              'Hopkins', 'Eden Prairie', 'Savage', 'Apple Valley', 'West Saint Paul', 'Roseville',
              'New Brighton', 'Minnetonka', 'Twin Cities', 'Mounds View', 'Coon Rapids', 'Columbia Heights',
              'Blaine', 'Fridley', 'Crystal', 'Champlin', 'Anoka', 'Ham Lake', 'Shoreview', 'Spring Lake Park',
              'Stillwater', 'Forest Lake', 'Minneapolis', 'Richfield', 'Burnsville', 'Wayzata', 'Plymouth',
              'New Hope', 'Prior Lake', 'Chaska', 'Chanhassen', 'Maplewood', 'Cottage Grove', 'Oakdale', 'Andover',
              'Brooklyn Park', 'Brooklyn Center', 'Rogers', 'Otsego', 'Elk River'
            ].map((city, idx) => (
              <span key={idx}>{city}, MN</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/10 pt-6 text-sm text-gray-300 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Contact Info */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>612-868-4879</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@nextdayfences.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 justify-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={20} className="text-white hover:text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} className="text-white hover:text-pink-500" />
          </a>
        </div>
      </div>

      {/* Built By Credit */}
      <div className="mt-4 text-center text-xs text-gray-500">
        Built by{" "}
        <a
          href="https://sarvajithkarun.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          Sarvajith Karun
        </a>
      </div>
    </footer>
  )
}

export default Footer
