import React, { Fragment, useState } from "react";
import Search from "./Search";
import Character from "./Character";
const CharacterList = ({ chars }) => {
  const [allCharsOpen, setAllCharsOpen] = useState(false);
  return (
    <Fragment>
      {!allCharsOpen && (
        <Search
          searchList={chars}
          movieMod={false}
          placeHolder="Search a character"
        />
      )}
      <h4 className="search-btn" onClick={() => setAllCharsOpen(!allCharsOpen)}>
        {allCharsOpen ? "Search a character" : "See All Characters"}
      </h4>
      {allCharsOpen && chars && (
        <div className="char-list">
          {chars.map((char) => (
            <Character char={char} key={char.name} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default CharacterList;
