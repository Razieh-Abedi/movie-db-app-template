import React from "react";
import { useGlobalContext } from "./context";
// import { Link } from "./react-router-dom";

function Movies() {
  const { movies, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return <section className="movies">
    {movies.map((movie)=>{
      console.log(movie);
      return <h4>movie</h4>
    })}
  </section>;
}

export default Movies;
