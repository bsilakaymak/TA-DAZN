import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies && (
        <div>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.title}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
