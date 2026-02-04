import React from "react";
import ContainerBtn from "./ContainerBtn";
import VideoContainer from "./VideoContainer";

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
    <div className="flex-10/12  p-2 border-gray-100 rounded-lg border h-auto overflow-y-auto ">
      <div className="flex flex-row  justify-evenly whitespace-nowrap  ">
        {BtnDetail.map((item, idex) => (
          <ContainerBtn key={idex} name={item} />
        ))}
      </div>
      <VideoContainer />
    </div>
  );
}

export default MainContainer;
