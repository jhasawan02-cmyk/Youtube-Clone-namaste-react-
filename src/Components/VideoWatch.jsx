
import React from "react";
import VideoPlayer from "./VideoPlayer";
import SuggestedVideo from "./SuggestedVideo";
import Comments from "./Comments";
import { Link } from "react-router";

function VideoWatch() {
  return (
    <div className="w-full h-screen bg-gray-50 flex gap-1 py-5 mt-13">
      <div className="flex-10/12 flex flex-col">
        <VideoPlayer />
        <Comments />
      </div>
      <SuggestedVideo />
    </div>
  );
}

export default VideoWatch;
