import React, { useContext, useEffect, useState, Fragment } from "react";
import MovieList from "./MoviesList";
import CharacterList from "./CharacterList";
import {getData} from '../helpers/getData';

const MovieApp = () => {
  const [charsOpen, setCharsOpen] = useState(false);
  const [chars, setChars] = useState([]);
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    getData('https://swapi.dev/api/films/').then(res=>setMovies(res.results));
    getData('https://swapi.dev/api/people/').then(res=>setChars(res.results))
  }, [])
  return (
    <div className="app-container">
      <button onClick={() => setCharsOpen(!charsOpen)}>
        {charsOpen ? "Go Back To Movies" : "Go to Charactes"}
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
