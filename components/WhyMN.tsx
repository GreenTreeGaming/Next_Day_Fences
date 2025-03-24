import React from 'react'

const WhyMN = () => {
  const videos = [
    {
      title: 'Testing Driven Vinyl Fence Posts VS. Concreted',
      url: 'https://www.youtube.com/watch?v=QggJzZdIYPI',
      thumbnail: '/fence.jpg',
    },
    {
      title: 'Testing Driven Ornamental Steel VS. Concreted Aluminum',
      url: 'https://www.youtube.com/watch?v=QggJzZdIYPI',
      thumbnail: '/fence2.jpg',
    },
    {
      title: 'Testing the Strength of Professional Grade Vinyl VS. Cheap',
      url: 'https://www.youtube.com/watch?v=QggJzZdIYPI',
      thumbnail: '/fence.jpg',
    },
    {
      title: 'Testing The Strength of Aluminum Panels Vs. Steel',
      url: 'https://www.youtube.com/watch?v=QggJzZdIYPI',
      thumbnail: '/fence2.jpg',
    },
  ]

  return (
    <section className="relative py-20 px-4 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/fence2.jpg')` }} // replace with your image
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-center font-semibold mb-12">
          We Drive <span className="text-red-500 font-bold">ALL</span> Our Fence Posts In
          <br />
          Minneapolis. Learn <span className="text-red-500 font-bold">Why!</span>
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 shadow-md rounded-md overflow-hidden w-full max-w-sm mx-auto"
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-auto"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 text-white text-4xl p-2 rounded-full">
                    ▶
                  </div>
                </div>
              </a>
              <div className="p-4 text-center bg-black bg-opacity-30 text-white">
                <p className="font-medium text-sm">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyMN