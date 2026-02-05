import React from "react";
import { Link } from "react-router";

function VideoCard({info}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer">
      <Link to = {`/watch?v=${info.id}`}>
      <div className="w-full aspect-video overflow-hidden">
        <img
          alt="thumbnail"
          src={info.snippet.thumbnails.medium.url}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3 space-y-1">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
          {info.snippet.title}
        </h3>
        <p className="text-xs text-gray-600">
          {info.snippet.channelTitle}
        </p>
      </div> 
      </Link>
    </div>
  );
}

export default VideoCard;
