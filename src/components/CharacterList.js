import React, { Fragment } from "react";
import Character from "./Character";
const CharacterList = ({ chars }) => {
  return (
    <Fragment>
      {chars && (
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
