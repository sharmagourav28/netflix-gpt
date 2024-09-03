import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    nowPLayingMovie: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPLaying = action.payload;
    },
  },
});

// Correct the export statement
export const { addNowPlayingMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
