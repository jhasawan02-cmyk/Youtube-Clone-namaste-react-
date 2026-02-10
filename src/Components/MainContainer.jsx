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
    "kishore kumar",
    "Dance",
  ];

  return (
    <div className="w-full h-screen bg-gray-50 pt-16">
      <div className="w-full p-2">
        <div className="flex flex-row whitespace-nowrap overflow-x-auto  gap-4 items-center justify-center">
          {BtnDetail.map((item, index) => (
            <ContainerBtn key={index} name={item} />
          ))}
        </div>
        <VideoContainer />
      </div>
    </div>
  );
}

export default MainContainer;
