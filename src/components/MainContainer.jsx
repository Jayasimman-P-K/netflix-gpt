import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  //   console.log(movies);
  if (!movies) return;

  const { title, overview, id } = movies[0];

  return (
    <div className="">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
