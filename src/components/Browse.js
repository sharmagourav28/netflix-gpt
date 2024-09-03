import React, { useEffect } from "react";
import Header from "./Header";

import useNowPlayingMovies from "./../hooks/useNowPlayingMovies";

const Browse = () => {
  // fetch data from TMDB api and update the store
  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
