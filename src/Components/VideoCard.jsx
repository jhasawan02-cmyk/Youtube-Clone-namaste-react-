import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/constant";

function VideoCard() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=${API_KEY}`
      );
      const json = await data.json();
      setVideos(json.items);
    };
    fetchData();
  }, []);

  if (videos.length === 0) {
    return <div className="col-span-full py-20 text-center text-gray-400 font-medium">Loading contents...</div>;
  }

  return (
    <>
      {videos.map((video) => (
        <div 
          key={video.id} 
          className="flex flex-col gap-2 cursor-pointer transition-transform duration-200 hover:opacity-90"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
            <img
              alt="thumbnail"
              src={video.snippet.thumbnails.medium.url}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col px-1">
            <h3 className="text-[15px] font-semibold text-gray-900 leading-tight line-clamp-2">
              {video.snippet.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1 hover:text-gray-800 transition-colors">
              {video.snippet.channelTitle}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default VideoCard;