import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieData, title }) => {
  return (
    <div className="py-1">
      <h1 className="py-1 text-2xl font-semibold px-0.5 text-white">{title}</h1>
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
