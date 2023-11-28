import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieData = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="ml-14 -mt-44 relative z-10">
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
