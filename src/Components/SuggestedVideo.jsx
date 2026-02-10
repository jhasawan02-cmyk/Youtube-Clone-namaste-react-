import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";


const VITE_API_KEY = import.meta.env.VITE_API_KEY;

function SuggestedVideos() {
  const [videos, setVideos] = useState([]);
  const [searchParam] = useSearchParams();
  const currentVideoId = searchParam.get("v");
  const commentCount = useSelector((store) => store.app.commentCount);


useEffect(() => {
    const getSuggestedVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${VITE_API_KEY}`
        );
        
        const data = await response.json();
        
        console.log("Suggested Videos Data:", data);

        if (data.items) {
          setVideos(data.items);
        } else {
          console.error("API Error or No Items:", data);
        }
      } catch (error) {
        console.error("Network Error:", error);
      }
    };

    getSuggestedVideos();
  }, [currentVideoId]);

  return (
    <div className="flex flex-col gap-1 w-full text-sm h-full overflow-y-auto">
      <h3 className="font-bold text-lg px-2">Suggested Videos</h3>
      
      {videos.slice(0, commentCount).map((video) => (
        <Link 
          key={video.id} 
          to={`/watch?v=${video.id}`} 
          className="flex gap-2 hover:bg-gray-100 p-1 rounded-lg transition-all"
        >
          <div className="relative shrink-0">
            <img 
              src={video.snippet.thumbnails.medium.url} 
              alt={video.snippet.title} 
              className="w-40 h-24 object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col overflow-hidden">
            <h4 className="text-sm font-bold line-clamp-2 text-gray-900 leading-tight">
              {video.snippet.title}
            </h4>
            <p className="text-xs text-gray-600 mt-1">{video.snippet.channelTitle}</p>
            <div className="flex text-[10px] text-gray-500 gap-1">
              <span>{parseInt(video.statistics.viewCount).toLocaleString()} views</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SuggestedVideos;