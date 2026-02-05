
import React from "react";
import { useSearchParams } from "react-router";

function VideoPlayer() {
  const [searchParam]  = useSearchParams() ;

  const videoParam = searchParam.get("v");

  return (
    <div className=" h-140  mb-6">
      <iframe 
        width= "100%"
        height= "100%"
        title="Youtube-title"
        src = {`https://www.youtube.com/embed/${videoParam}`}
        allowFullScreen
      >
      </iframe>
    </div>
  );
}

export default VideoPlayer;
