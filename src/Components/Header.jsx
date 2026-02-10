import React from "react";
import {
  bell_icon_header,
  hamburger_icon_header,
  mic_icon_header,
  search_icon_header,
  user_avatr_icon,
  youtube_logo_header,
} from "../utils/constant";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Header() {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="w-full h-16 flex items-center px-4 bg-white fixed top-0 left-0 border-b z-10">
      <div className="flex items-center w-3/12">
        <img
          onClick={() => toggleMenuHandler()}
          alt="hamburger-icon"
          className="h-12 cursor-pointer p-1 rounded hover:bg-gray-100"
          src={hamburger_icon_header}
        />
        <Link to="/">
          <img
            alt="youtube-logo"
            className="h-12 ml-3 cursor-pointer"
            src={youtube_logo_header}
          />
        </Link>
      </div>

      <div className="flex justify-center items-center w-6/12">
        <div className="flex items-center w-full max-w-xl border rounded-full overflow-hidden bg-gray-50">
          <input
            placeholder="Search"
            className="px-4 py-2 w-full outline-none bg-transparent"
          />
          <img
            alt="search-icon"
            className="h-10 px-3 cursor-pointer hover:bg-gray-200 rounded-full"
            src={search_icon_header}
          />
        </div>

        <img
          alt="mic-icon"
          className="h-12 ml-3 cursor-pointer p-2 rounded-full hover:bg-gray-100"
          src={mic_icon_header}
        />
      </div>

      <div className="flex items-center justify-end w-3/12">
        <img
          alt="bellIcon-logo"
          className="h-12 mr-3 cursor-pointer p-2 rounded-full hover:bg-gray-100"
          src={bell_icon_header}
        />
        <img
          alt="user-avatar"
          className="h-12 cursor-pointer rounded-full"
          src={user_avatr_icon}
        />
      </div>
    </div>
  );
}

export default Header;
