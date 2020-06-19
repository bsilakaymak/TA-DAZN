import React, { Fragment, useContext } from "react";
import Character from "./Character";
import { SWContext } from "../contexts/SWProvider";
const CharacterList = ({ chars }) => {
  const {charsLoading} = useContext(SWContext)
  if(charsLoading) return <h3>Loading...</h3>
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
