import React from "react";
import ContainerBtn from "./ContainerBtn";
import VideoContainer from "./VideoContainer";
import { Link } from "react-router";

function MainContainer() {
  const BtnDetail = [
    "All",
    "Music",
    "Dance",
    "New",
    "Sitcome",
    "Comedy",
    "Arjit Singh",
    "Space",
    "Drama",
    "Movies",
    "Kapil Sharma",
  ];

  return (
    <div className="w-full h-screen bg-gray-100 pt-16 ">
    <div className="w-12/12  p-2 border-gray-100 rounded-lg border h-auto overflow-x-auto overflow-y-auto  mt-3 ">
      <div className="flex flex-row  justify-evenly whitespace-nowrap  scrollbar-x-auto ">
        {BtnDetail.map((item, idex) => (
          <ContainerBtn key={idex} name={item} />
        ))}
      </div>
      <VideoContainer />
    </div>
    </div>

  );
}

export default MainContainer;
