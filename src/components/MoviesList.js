import React, { useState } from "react";
import Search from "./Search";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  const [allMoviesOpen, setAllMoviesOpen] = useState(false);
  return (
    <div className="movie-list">
      {!allMoviesOpen && (
        <Search
          searchList={movies}
          movieMod={true}
          placeHolder="Search a movie"
        />
      )}
      <h4
        className="search-btn"
        onClick={() => setAllMoviesOpen(!allMoviesOpen)}
      >
        {allMoviesOpen ? "Search movies" : "See all movies"}
      </h4>
      {movies && allMoviesOpen && (
        <div>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
