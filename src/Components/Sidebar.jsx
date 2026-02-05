import React from "react";
import { sidebar_home_icon } from "../utils/constant";
import { Link } from "react-router";

function Sidebar() {
  const  sideList = [
    "History",
    "Playlist",
    "Watch Later",
    "Liked Videos",
    "Your Videos",
  ]
  return (
    <div className=" py-8 flex-2/12 bg-white sticky ">
      <div  className="mt-18">
        <div className="border-b  mb-15 ">
          <div className="flex px-1">
            <img
              alt="image"
              className=" mt-2.5 h-8  cursor-pointer"
              src={sidebar_home_icon}
            />
           <Link to="/"> <h3 className="py-1 ml-4 text-4xl cursor-pointer text-blue-900 font-light mb-2">Home</h3> </Link>
          </div>
          <h3 className=" ml-13 text-3xl cursor-pointer font-light text-blue-900 ">Shorts</h3>
        </div>

        <div className="border-b py-2 text-3xl ">
          <h3 className="ml-8 cursor-pointer font-light text-blue-900 ">Subscriptions</h3>
        </div>

        <div className="p-3 text-3xl  mt-5">
          <ul>
            
            {sideList.map((item) => (
                 <li className="py-1 ml-5 text-3xl mb-1 font-light text-blue-900  cursor-pointer w-fit">{item}</li> 
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
