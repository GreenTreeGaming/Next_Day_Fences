import React from 'react'

const HeaderOurTeam = () => {
  return (
    <section className="w-full">
      {/* Map Section */}
      <div className="relative w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.7083785379993!2d-93.22812458447055!3d44.94698417909857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d087bb8f0ef%3A0x94b9aeaa89cc01e!2s3463%20Hiawatha%20Ave%2C%20Minneapolis%2C%20MN%2055406!5e0!3m2!1sen!2sus!4v1711143672329!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Next Day Fences of Minneapolis"
          className="absolute inset-0"
        ></iframe>

        {/* Overlay Card */}
        <div className="absolute top-4 left-4 bg-white p-4 shadow-lg rounded w-[250px]">
          <h2 className="text-md font-bold mb-1">
            Next Day Fences of Minneapolis
          </h2>
          <p className="text-sm mb-1">3463 Hiawatha Ave Minneapolis, MN 55406</p>
          <p className="text-sm font-semibold">612-868-4879</p>
        </div>
      </div>

      {/* Red Banner */}
      <div className="bg-red-700 text-white text-center py-8 px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Minneapolis, Minnesota Fence Company
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base">
          Next Day Fences is proud to be the leading fencing company
          serving Minneapolis, MN and the surrounding metro areas.
        </p>
      </div>
    </section>
  )
}

export default HeaderOurTeam
