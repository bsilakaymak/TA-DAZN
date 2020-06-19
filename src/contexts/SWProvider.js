import React, { useState, createContext } from "react";
import axios from "axios";

export const SWContext = createContext();

const SWProvider = (props) => {
  //movies
  const [movies, setMovies] = useState([]);
  const [moviesLoading, setMoviesLoading] = useState(false)
  const getMovies = async () => {
    setMoviesLoading(true)
    try {
      axios
        .get("https://swapi.dev/api/films/")
        .then((response) => setMovies(response.data.results));
        setMoviesLoading(false)
    } catch (error) {
      if (error) {
        console.error(error);
        setMoviesLoading(false)
      }
    }
  };

  //characters
  const [chars, setChars] = useState([]);
  const [charsLoading, setCharsLoading] = useState(false);
  const getChars = async () => {
    setCharsLoading(true);

    try {
      const res = await axios.get("https://swapi.dev/api/people/");

      setChars(res.data.results);
      setCharsLoading(false)
    } catch (error) {
      if (error) {
        console.error(error);
        setCharsLoading(false)
      }
    }
  };

  return (
    <SWContext.Provider
      value={{
        getMovies,
        movies,
        getChars,
        chars,
        charsLoading,
        moviesLoading
      }}
    >
      {props.children}
    </SWContext.Provider>
  );
};

export default SWProvider;
