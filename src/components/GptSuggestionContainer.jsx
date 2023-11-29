import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptSuggestionContainer = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="bg-black w-11/12 my-8 p-6 px-12 bg-opacity-[85%]">
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
