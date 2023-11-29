import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptPage: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptPage: (state, action) => {
      state.showGptPage = !state.showGptPage;
    },
    addMovieDatas: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
    clearMovieDatas: (state, action) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const { toggleGptPage, addMovieDatas, clearMovieDatas } =
  gptSlice.actions;

export default gptSlice.reducer;
