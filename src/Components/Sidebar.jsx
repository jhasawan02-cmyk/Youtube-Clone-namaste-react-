import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {
  const sideList = [
    "History",
    "Playlist",
    "Watch Later",
    "Liked Videos",
    "Your Videos",
  ];

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="py-6 w-2/12 bg-white sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r">
      <div className="mt-6">
        <div className="border-b pb-4 mb-6">
          <div className="ml-6">
            <Link to="/">
              <h3 className="cursor-pointer text-gray-800 text-lg font-medium py-2 px-2 rounded hover:bg-gray-100 w-fit">
                Home
              </h3>
            </Link>
          </div>
          <h3 className="ml-6 text-lg cursor-pointer font-medium text-gray-800 py-2 px-2 rounded hover:bg-gray-100 w-fit">
            Shorts
          </h3>
        </div>

        <div className="border-b pb-4 mb-6">
          <h3 className="ml-6 cursor-pointer font-medium text-gray-800 text-lg py-2 px-2 rounded hover:bg-gray-100 w-fit">
            Subscriptions
          </h3>
        </div>

        <div className="px-4">
          <ul>
            {sideList.map((item, index) => (
              <li
                key={index}
                className="py-2 px-3 mb-1 text-gray-700 text-base font-medium cursor-pointer rounded hover:bg-gray-100 w-fit"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
