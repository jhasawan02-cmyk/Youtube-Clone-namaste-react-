import React from "react";
import { sidebar_home_icon } from "../utils/constant";

function Sidebar() {
  return (
    <div className=" py-8 flex-2/12 bg-gray-200">
      <div >
        <div className="border-b p-3 mb-15 ">
          <div className="flex">
            <img
              alt="image"
              className="w-7.5 mt-2.5 h-8  cursor-pointer"
              src={sidebar_home_icon}
            />
            <h3 className="py-1 ml-5 text-4xl cursor-pointer">Home</h3>
          </div>
          <h3 className="py-1 ml-13 text-3xl cursor-pointer">Shorts</h3>
        </div>

        <div className="border-b py-1  text-3xl ">
          <h3 className="ml-9 cursor-pointer">Subscription</h3>
        </div>

        <div className="p-3 text-3xl  mt-5">
          <ul>
            <li className="py-1 ml-13 text-3xl cursor-pointer">History</li>
            <li className="py-1 ml-13 text-3xl cursor-pointer">Playlist</li>
            <li className="py-1 ml-13 text-3xl cursor-pointer">Watch Later</li>
            <li className="py-1 ml-13 text-3xl cursor-pointer">Liked Videos</li>
            <li className="py-1 ml-13 text-3xl cursor-pointer">Your Videos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
