import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${VITE_API_KEY}`
      );
      const json = await response.json();
      setVideos(json.items);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 b">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} info={video} />
        ))}
      </div>
    </div>
  );
}

export default VideoContainer;
