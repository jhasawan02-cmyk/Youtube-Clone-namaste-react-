import React from "react";

function Sidebar() {
  return (
    <div className="border  py-8 flex-2/12">
      <div className="">
        <div className="border-b p-3 mb-15 ">
          <div className="flex">
            <img
              alt="image"
              className="w-7.5 mt-2.5 h-8 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR75_v-te2LMN2SYKNo5wlIm6XBACW75i-ww&s"
            />
            <h3 className="py-1 ml-5 text-4xl">Home</h3>
          </div>
          <h3 className="py-1 ml-13 text-3xl">Shorts</h3>
        </div>

        <div className="border-b py-1  text-3xl ">
          <h3 className="ml-14">Subscription</h3>
        </div>

        <div className="p-3 text-3xl  mt-5">
          <ul>
            <li className="py-1 ml-13 text-3xl">History</li>
            <li className="py-1 ml-13 text-3xl">Playlist</li>
            <li className="py-1 ml-13 text-3xl">Watch Later</li>
            <li className="py-1 ml-13 text-3xl">Liked Videos</li>
            <li className="py-1 ml-13 text-3xl">Your Videos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
