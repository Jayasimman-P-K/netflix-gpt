import React from "react";
import { PLAY_ICON } from "../utils/logos";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%]  md:pt-[7.5%] px-6 md:px-12 text-white absolute bg-gradient-to-r from-black aspect-video w-full">
      <h1 className="text-lg md:text-6xl font-bold my-4 md:my-8 md:w-1/2 w-1/3">
        {title}
      </h1>
      <h1 className="my-4 w-1/3 text-lg font-semibold max-h-40 overflow-x-scroll no-scrollbar md:inline-block hidden">
        {overview}
      </h1>
      <div className="flex md:my-2">
        <button className="rounded-md py-0.5 md:py-2 px-2 md:px-6 flex items-center bg-white text-black">
          <img className="md:w-8 md:h-8 w-4" src={PLAY_ICON} alt="playIcon" />
          <p className="md:mx-2 font-semibold md:text-lg px-1.5 md:px-0">
            Play
          </p>
        </button>
        <button className="rounded-md mx-4 px-8 py-2 font-semibold text-lg bg-opacity-75 bg-neutral-600 md:flex items-center hidden">
          <p>More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
