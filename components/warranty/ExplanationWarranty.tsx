import React from 'react'

const ExplanationWarranty = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-gray-800">
      {/* Warranty Exclusions */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Warranty Exclusions
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed">
          <li>
            All warranty claims are subject to normal and proper use. Abuse and
            improper use is not covered.
          </li>
          <li>
            Warranty does not cover damage caused by extreme weather,
            hurricanes, natural disasters, or acts of God.
          </li>
          <li>
            Next Day Fences is not responsible for damages due to
            customer negligence, unauthorized modifications, or third-party
            alterations.
          </li>
          <li>
          Next Day Fences at its sole discretion holds the right to
            determine if a warranty claim for faulty craftsmanship and/or
            materials is to be covered and compensated for material and labor.
          </li>
        </ul>
      </div>

      {/* How To File a Warranty Claim */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          How To File a Warranty Claim
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm md:text-base leading-relaxed">
          <li>
            Take pictures of the problem you are having with your Next Day
            installed fence.
          </li>
          <li>
            Email the photos along with a brief description to{' '}
            <a
              href="mailto:info@nextdayfences.com"
              className="text-red-600 underline"
            >
              info@nextdayfence.com
            </a>
            .
          </li>
          <li>
            Provide basic proof of purchase and installation address of your
            property.
          </li>
          <li>
            Once reviewed, our team will reach out to schedule a visit or set up
            an appointment to either fix the issue or order replacement parts.
            Any labor or materials covered under warranty will be at no charge.
          </li>
        </ol>
      </div>
    </section>
  )
}

export default ExplanationWarranty
