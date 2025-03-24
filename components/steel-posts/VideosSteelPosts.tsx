import React from "react";

const videos = [
  {
    title: "CRAFTSMAN OVERLAP",
    label: "Craftsman Design with Grizzly Posts",
    thumbnail: "/fence.jpg",
    url: "https://www.youtube.com/watch?v=QggJzZdIYPI",
  },
  {
    title: "WHITE VINYL",
    label: "White Vinyl with 2 3/8 Galvanized Posts",
    thumbnail: "/fence2.jpg",
    url: "https://www.youtube.com/watch?v=QggJzZdIYPI",
  },
  {
    title: "ORNAMENTAL",
    label: "Ornamental Steel with 1 5/8 Galvanized Posts",
    thumbnail: "/fence.jpg",
    url: "https://www.youtube.com/watch?v=QggJzZdIYPI",
  },
];

const VideosSteelPosts = () => {
  return (
    <section className="py-20 px-4 bg-white text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        Wood, Vinyl, and Steel Fencing{" "}
        <span className="text-red-600">With Steel Posts</span>
      </h2>

      {/* Video Grid */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-full max-w-xs mx-auto border rounded-md overflow-hidden shadow"
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
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 text-white text-3xl p-2 rounded-full">
                  ▶
                </div>
              </div>
            </a>
            <div className="bg-red-600 text-white text-sm px-4 py-3 font-medium">
              {video.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideosSteelPosts;