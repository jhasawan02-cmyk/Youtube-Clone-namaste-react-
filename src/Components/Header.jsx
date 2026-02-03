import React from "react";
import { bell_icon_header, hamburger_icon_header, mic_icon_header, search_icon_header, user_avatr_icon, user_icon_header, youtube_logo_header } from "../utils/constant";

function Header() {
  return (
    <div className=" w-full h-fit flex items-center px-2 bg-gray-400">
      
   
      <div className="flex items-center w-3/12 py-0.5">
        <img
          alt="hamburger-icon"
          className="h-16 cursor-pointer"
          src={hamburger_icon_header}
        />
        <img
          alt="youtube-logo"
          className="h-16 ml-2 cursor-pointer"
          src= {youtube_logo_header}
        />
      </div>

      
      <div className="flex justify-center items-center w-6/12 ">
        <div className="flex items-center w-full max-w-xl border rounded-full overflow-hidden  ">
          <input
            placeholder="Search"
            className="px-4 py-2 w-full outline-none border-r"
          />
          <img
            alt="search-icon"
            className="h-8 px-3 cursor-pointer "
            src = {search_icon_header}
          />
        </div>

        <img
          alt="mic-icon"
          className="h-13 ml-2 cursor-pointer"
          src = {mic_icon_header}
        />
      </div>

      
      <div className="flex items-center justify-end w-3/12">
        <img
          alt="bellIcon-logo"
          className="h-18 mr-3 cursor-pointer"
          src = {bell_icon_header}
        />
        <img
          alt="user-avatar"
          className="h-12 cursor-pointer"
          src = {user_avatr_icon}
        />
      </div>

    </div>
  );
}

export default Header;
