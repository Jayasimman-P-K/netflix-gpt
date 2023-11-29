import React from "react";
import { BG_IMG } from "../utils/logos";
import GptSearchBar from "./GptSearchBar";
import GptSuggestionContainer from "./GptSuggestionContainer";
import { useSelector } from "react-redux";

const GptPage = () => {
  const isSuggestion = useSelector((store) => store.gpt.movieNames);
  return (
    <div className="flex items-center flex-col ">
      <div className=" -z-10 fixed w-full">
        <img
          className="md:h-auto h-screen object-cover"
          src={BG_IMG}
          alt="logo"
        />
      </div>
      <GptSearchBar />
      {isSuggestion && <GptSuggestionContainer />}
    </div>
  );
};

export default GptPage;
