import React from "react";
import { PLAY_ICON } from "../utils/logos";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-14 text-white absolute bg-gradient-to-r from-black aspect-video w-full">
      <h1 className="text-6xl font-bold my-8 w-1/2">{title}</h1>
      <h1 className="my-4 w-1/3 text-lg font-semibold">{overview}</h1>
      <div className="flex my-2">
        <button className="rounded-md py-2 px-6 flex items-center bg-white text-black">
          <img className="w-8 h-8 p-1" src={PLAY_ICON} alt="playIcon" />
          <p className="mx-2 font-semibold text-lg">Play</p>
        </button>
        <button className="rounded-md mx-4 px-8 py-2 font-semibold text-lg bg-black bg-opacity-75 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
