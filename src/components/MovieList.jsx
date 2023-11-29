import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieData, title }) => {
  return (
    <div className="pb-4">
      <h1 className="py-2 text-lg md:text-3xl font-semibold px-0.5 text-white">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        {movieData?.map((movie) => (
          <MovieCard
            key={movie?.id}
            poster_path={movie?.poster_path}
            title={movie?.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
