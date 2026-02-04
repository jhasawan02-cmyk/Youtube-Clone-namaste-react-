import React from "react";
import VideoCard from "./VideoCard";

function VideoContainer() {
  return (
      <div className="grid grid-cols-4 py-5 px-3 gap-5 ">
        <VideoCard />
      </div>
  );
}

export default VideoContainer;