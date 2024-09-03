import React from "react";
import Header from "./Header";

import useNowPlayingMovies from "./../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondayConatiner from "./SecondayConatiner";

const Browse = () => {
  // fetch data from TMDB api and update the store
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondayConatiner />
      {/*
      MainContainer 
        - VideoBackground
        - VideoTitle
        Secondary Container
         - MoviesList * n
         - cards *n
         - 

               */}
    </div>
  );
};

export default Browse;
