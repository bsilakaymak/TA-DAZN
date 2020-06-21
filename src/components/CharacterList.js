import React, { Fragment, useContext } from "react";
import Character from "./Character";
const CharacterList = ({ chars }) => {
  return (
    <Fragment>
      {chars && (
        <div className="char-list">
          {chars.map((char) => (
            <Character char={char}  />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default CharacterList;
