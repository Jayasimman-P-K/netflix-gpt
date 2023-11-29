import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieData = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="ml-6 md:ml-12 md:-mt-60 -mt-10 pt-2 relative z-10">
        <MovieList
          title="Now Playing"
          movieData={movieData?.nowPlayingMovies}
        />
        <MovieList title="Popular" movieData={movieData?.popularMovies} />
        <MovieList title="Top Rated" movieData={movieData?.topRatedMovies} />
        <MovieList title="Upcoming" movieData={movieData?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
