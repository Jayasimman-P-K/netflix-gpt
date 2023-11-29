import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptSuggestionContainer = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="bg-black md:w-11/12 mt-8 md:p-6  pl-6 py-6 md:pl-12 bg-opacity-[85%]">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movieData={movieResults[index]}
        />
      ))}
      {/* <MovieList title={movieNames[0]} movieData={moiveResults[0]} /> */}
    </div>
  );
};

export default GptSuggestionContainer;
