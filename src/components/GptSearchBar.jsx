import React, { useRef } from "react";
import openAI from "../utils/openAI";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieDatas } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data?.json();

    return json?.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me seven movie names with comma seperated like the example result given ahead. Example: Leo, Viduthalai, Vikram, Ponniyin Selvan, KGF, Jailer, Jawan. important: results must be in the form of example provided, it shouls not change no matter the cost";

    const gptResuts = await openAI.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResuts?.choices[0]?.message?.content?.split(", ");

    const promiseArray = gptMovies?.map((movie) => searchTmdb(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addMovieDatas({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <>
      <form
        className="mt-[30%]  md:mt-[10%] w-[95%]  md:w-2/3  bg-black flex justify-center py-4 md:py-6 px-1 md:px-0 rounded-lg bg-opacity-[85%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className=" w-9/12 mx-2 md:mx-4 p-2 md:px-4 rounded-lg"
          type="text"
          placeholder="What are you planning tonight ?"
        />
        <button
          className="bg-red-600 w-2/12 mx-2 md:mx-4 md:p-2 px-2 rounded-lg text-white font-semibold md:text-lg hover:scale-95"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default GptSearchBar;
