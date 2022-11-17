import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_ENDPOINT } from "./context";

function SingleMovie() {
  const { id } = useParams();
  const id2 = id.slice(1)
  console.log(id);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "False") {
        setError({ show: true, msg: data.Error });
        setIsLoading(false);
      } else {
        setMovie(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id2}`);
    // fetchMovie(`${API_ENDPOINT}`)
  }, [id2]);

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
