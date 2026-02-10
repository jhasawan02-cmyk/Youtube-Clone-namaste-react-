import React from "react";
import { Link } from "react-router-dom";


function Sidebar() {
  const  sideList = [
    "History",
    "Playlist",
    "Watch Later",
    "Liked Videos",
    "Your Videos",
  ]
  return (
    <div className=" py-8 w-2/12 bg-white sticky top-16 h-screen overflow-y-auto scrollbar-hide">
      <div  className="mt-18">
        <div className="border-b  mb-15 ">
          <div className="flex  ml-9">
           <Link to="/"> <h3 className="  cursor-pointer text-black  text-2xl font-sm mb-2">Home</h3></Link> 
          </div>
          <h3 className=" ml-9 text-2xl cursor-pointer font-sm text-black">Shorts</h3>
        </div>

        <div className="border-b py-2 text-2xl ">
          <h3 className="ml-9 cursor-pointer font-sm text-black  ">Subscriptions</h3>
        </div>

        <div className="p-3 text-3xl  mt-5">
          <ul>
            
            {sideList.map((item) => (
                 <li className="py-1 ml-5 text-2xl mb-1 font-sm text-black cursor-pointer w-fit">{item}</li> 
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
