import React from "react";
import { useSelector } from "react-redux";
import Videobackground from "./Videobackground";
import Videotitle from "./Videotitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    // yaha problem arhi h

    return <div>Loading...</div>;
  }

  const mainMovie = movies[0];
  console.log(mainMovie);

  return (
    <div>
      {/* Passing mainMovie as a prop if needed */}
      <Videotitle movie={mainMovie} />
      <Videobackground movie={mainMovie} />
    </div>
  );
};

export default MainContainer;
