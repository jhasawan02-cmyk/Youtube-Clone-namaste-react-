
import React from "react";
import VideoPlayer from "./VideoPlayer";
import SuggestedVideo from "./SuggestedVideo";
import Comments from "./Comments";
import { Link } from "react-router";

function VideoWatch() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex gap-6 p-4">
      <div className="flex-1 flex flex-col">
        <VideoPlayer />
        <Comments />
      </div>
      <SuggestedVideo />
    </div>
  );
}

export default VideoWatch;
