import React from "react";
import { MOVIE_CARD_URL } from "../utils/constant";

const MovieCard = ({ poster_path, title }) => {
  return (
    <img
      className="p-1 h-64 rounded-lg"
      src={MOVIE_CARD_URL + poster_path}
      alt={title}
    />
  );
};

export default MovieCard;
