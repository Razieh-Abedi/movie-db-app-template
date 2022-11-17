import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { API_ENDPOINT } from "./context";

function SingleMovie() {
  const { id } = useParams();
  const id2 = id.slice(1);
  const { isLoading, error, data: movie } = useFetch(`&i=${id2}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link className="btn" to="/">
          back to movies
        </Link>
      </div>
    );
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link className="btn" to="/">
          back to movies
        </Link>
      </div>
    </section>
  );
}

export default SingleMovie;
