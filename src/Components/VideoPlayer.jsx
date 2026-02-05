
import React from "react";
import { useSearchParams } from "react-router";

function VideoPlayer() {
  const [searchParam]  = useSearchParams() ;

  const videoParam = searchParam.get("v");

  return (
    <div className="w-full h-140 rounded-xl border bg-white shadow-sm flex  text-gray-500 text-lg mb-6">
      <iframe 
        width= "100%"
        height= "100%"
        title="Youtube-title"
        src = {`https://www.youtube.com/embed/${videoParam}?autoplay=1`}
        allowFullScreen
      >
      </iframe>
    </div>
  );
}

export default VideoPlayer;
