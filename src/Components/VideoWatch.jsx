
import React, { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import SuggestedVideo from "./SuggestedVideo";
import Comments from "./Comments";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

function VideoWatch() {
  const dispatch = useDispatch() ;
  useEffect(() =>{
    dispatch(closeMenu());
  },[dispatch])

  return (
    <div className="w-full h-screen bg-gray-50 flex gap-1 py-5 mt-13 px-2">
      <div className="flex-10/12 flex flex-col">
        <VideoPlayer />
        <Comments />
      </div>
      <SuggestedVideo />
    </div>
  );
}

export default VideoWatch;
