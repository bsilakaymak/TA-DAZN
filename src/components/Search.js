import React, { Fragment, useState, useEffect } from "react";
import Movie from "./Movie";
import Character from "./Character";

const Search = ({ searchList, movieMod, placeHolder }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = [];
    if (searchValue.length > 0) {
      searchList.forEach((s) => {
        if (movieMod) {
          if (s.title.toLowerCase().includes(searchValue.toLowerCase())) {
            results.push(s);
          }
          return;
        }
        if (movieMod === false) {
          if (s.name.toLowerCase().includes(searchValue.toLowerCase())) {
            results.push(s);
          }
        }
      });
      setSearchResults(results);
    }else{
      setSearchResults([])
    }
  }, [searchValue]);

  return (
    <Fragment>
      <input
        className="search-input"
        type="text"
        value={searchValue}
        placeholder={placeHolder}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      {searchResults.length !== 0 && (
        <div>
          <div>
            {movieMod &&
              searchResults.map((movie) => (
                <Movie movie={movie} key={movie.title} />
              ))}
            {movieMod === false &&
              searchResults.map((char) => (
                <Character char={char} key={char.name} />
              ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default Search;
