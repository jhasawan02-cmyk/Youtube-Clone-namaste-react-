import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import SuggestedVideo from "./SuggestedVideo";
import Comments from "./Comments";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

function VideoWatch() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  const [commentCount, setCommentCount] = useState(0);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col md:flex-row items-stretch gap-6 py-5 mt-13 px-1">
      

      <div className="grow lg:w-[70%] flex flex-col gap-1">
        <VideoPlayer />
        <Comments
          commentVideoID={videoId}
          setCommentCount={setCommentCount}
        />
      </div>


      <div className="lg:w-[30%] flex flex-col">
        <SuggestedVideo commentCount={commentCount} />
      </div>

    </div>
  );
}


export default VideoWatch;
