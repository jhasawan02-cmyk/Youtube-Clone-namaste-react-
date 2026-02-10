import React, { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import SuggestedVideo from "./SuggestedVideo";
import Comments from "./Comments";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

function VideoWatch() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col md:flex-row gap-6 py-5 mt-13 px-4">
      <div className="grow lg:w-[70%] flex flex-col gap-1">
        <VideoPlayer />
        <Comments />
      </div>
      <div className="lg:w-[30%]">
        <SuggestedVideo />
      </div>
    </div>
  );
}

export default VideoWatch;
