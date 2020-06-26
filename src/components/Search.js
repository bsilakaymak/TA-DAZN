import React, { Fragment, useState } from "react";
import Movie from "./Movie";
import Character from "./Character";

const Search = ({ searchList, movieMod, placeHolder }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleOnChange = (searchValue) => {
    const results = [];
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
  };
  return (
    <Fragment>
      <input
        className="search-input"
        type="text"
        value={searchValue}
        placeholder={placeHolder}
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleOnChange(searchValue);
        }}
      />

      {searchValue.length > 2 && searchResults.length !== 0 && (
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
