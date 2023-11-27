import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data?.json();
    // console.log(json?.results?.filter((video) => video.type === "Trailer"));
    const filterTrailers = json?.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterTrailers.length
      ? filterTrailers[0]
      : json?.results[0];
    // console.log(trailer, filterTrailers[0], json?.results[0]);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
