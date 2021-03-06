import React, { useEffect, useState, Fragment } from "react";
import MovieList from "./MoviesList";
import CharacterList from "./CharacterList";
import { getData } from "../helpers/getData";

const MovieApp = () => {
  const [charsOpen, setCharsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [chars, setChars] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData("https://swapi.dev/api/films/")
      .then((res) => {
        setMovies(res.results);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
    getData("https://swapi.dev/api/people/")
      .then((res) => {
        setChars(res.results);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
    setLoading(false);
  }, []);
  if (error) return <h2>Something Went Wrong</h2>;
  if (loading) return <h2>Loading...</h2>;
  return (
    <div className="app-container">
      <button
        className="app-main-btns"
        onClick={() => setCharsOpen(!charsOpen)}
      >
        {charsOpen ? (
          <span>
            Go back to Movies <i className="fa fa-film" aria-hidden="true"></i>
          </span>
        ) : (
          <span>
            Go to characters <i className="fa fa-user" aria-hidden="true"></i>
          </span>
        )}
      </button>
      {charsOpen ? (
        <CharacterList chars={chars} />
      ) : (
        <Fragment>
          <MovieList movies={movies} />
        </Fragment>
      )}
    </div>
  );
};
export default MovieApp;
