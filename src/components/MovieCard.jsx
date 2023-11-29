import React from "react";
import { MOVIE_CARD_URL } from "../utils/constant";

const MovieCard = ({ poster_path, title }) => {
  if (!poster_path) return null;
  return (
    <img
      className="mr-3 h-52 md:h-64 rounded-lg"
      src={MOVIE_CARD_URL + poster_path}
      alt={title}
    />
  );
};

export default MovieCard;
