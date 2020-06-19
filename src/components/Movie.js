import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie-item">
        <h3>{movie.title}</h3>
        <p>{movie.opening_crawl}</p>
        <p>Released: {movie.release_date}</p>
    </div>
  );
};

export default Movie;
