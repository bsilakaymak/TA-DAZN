import React, { useContext, useEffect, useState, Fragment } from "react";
import MovieList from "./MoviesList";
import { SWContext } from "../contexts/SWProvider";
import CharacterList from "./CharacterList";

const MovieApp = () => {
  const [charsOpen, setCharsOpen] = useState(false);
  const {
    getMovies,
    movies,
    getChars,
    chars,
    charsLoading,
    moviesLoading,
  } = useContext(SWContext);
  useEffect(() => {
    getMovies();
    return () => {
      getMovies();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getChars();
    return () => {
      getChars();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (charsLoading || moviesLoading) return <h3>Loading...</h3>;
  return (
    <div className="app-container">
      <button onClick={() => setCharsOpen(!charsOpen)}>
        {charsOpen ? "Go Back To Movies" : "Go to Charactes"}
      </button>
      {charsOpen ? (
        <CharacterList chars={chars} charsLoading={charsLoading} />
      ) : (
        <Fragment>
          <MovieList movies={movies} />
        </Fragment>
      )}
    </div>
  );
};
export default MovieApp;
