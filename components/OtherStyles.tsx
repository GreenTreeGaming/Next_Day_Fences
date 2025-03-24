import React from 'react'

const OtherStyles = () => {
  const videos = [
    {
      title: 'Craftsman Side by Side',
      url: 'https://www.youtube.com/watch?v=QggJzZdIYPI',
      thumbnail: '/fence2.jpg',
    },
    {
      title: 'Stockade Side by Side',
      url: 'https://www.youtube.com/watch?v=QggJzZdIYPI',
      thumbnail: '/fence2.jpg',
    },
    {
      title: 'Hogwire Fence',
      url: 'https://www.youtube.com/watch?v=QggJzZdIYPI',
      thumbnail: '/fence2.jpg',
    },
    {
      title: 'Tan Vinyl Fence',
      url: 'https://www.youtube.com/watch?v=QggJzZdIYPI',
      thumbnail: '/fence2.jpg',
    },
  ]

  return (
    <section className="bg-gray-200 py-16 px-4">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold">
          Want To Know How We Build The Rest Of Our Fence{' '}
          <span className="text-red-600 font-bold">Styles?</span>
        </h2>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-md overflow-hidden w-full max-w-sm mx-auto"
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
              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/40 text-white text-4xl p-2 rounded-full">
                  ▶
                </div>
              </div>
            </a>
            <div className="p-4 text-center">
              <p className="font-semibold">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OtherStyles