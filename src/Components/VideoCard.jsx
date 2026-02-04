import React from "react";

function VideoCard({ info }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
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
    </div>
  );
}

export default VideoCard;
