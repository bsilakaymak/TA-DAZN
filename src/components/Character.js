import React, { useEffect, useState } from "react";
import CharDetails from "./CharDetails";

const Character = ({ char }) => {
  return (
    <div className="char-item">
      <div className="char-info">
        <p>
          <em>Name: </em>
          {char.name}
        </p>
        <p>
          <em>Birth: </em>
          {char.birth_year}
        </p>
        <p>
          <em>Height: </em>
          {char.height}
          <em> Mass:</em> {char.mass}
        </p>
        <p>
          <em>Gender: </em>
          {char.gender}
        </p>
      </div>
      <div className="details">
        <CharDetails
          urls={char.films}
          detailName="Films"
          placeholder="This character has no films"
        />
        <CharDetails
          urls={char.vehicles}
          detailName="Vehicles"
          placeholder="This character has no vehicles"
        />
        <CharDetails
          urls={char.starships}
          detailName="Starships"
          placeholder="This character has no starships"
        />

        {/* <h4
          onClick={() => {
            getDetails(char.films).then(responses=> setCharFilms(responses))
            setFilmsOpen(true);
          }}
        >
          Films
        </h4>
        {charFilms && (
          <div className={filmsOpen ? "" : "hidden"}>
            {charFilms.map((cf, i) => {
              return <p key={i}>{cf.title}</p>;
            })}
          </div>
        )}
        <h4
          onClick={async() => {
            getDetails(char.starships).then(responses=> setCharStarship(responses))
            setShipOpen(true);

          }}
        >
          Starships
        </h4>
        {charStarship && (
          <div className={shipOpen ? "" : "hidden"}>
            {charStarship.length === 0 && (
              <p>This character has no starships</p>
            )}
            {charStarship.map((cs, i) => {
              return <p key={i}>{cs.name}</p>;
            })}
          </div>
        )}

        <h4
          onClick={() => {
            getDetails(char.vehicles).then(responses=> setCharVehicles(responses))
            setVehicleOpen(true);
          }}
        >
          Vehicles
        </h4>
        {charVehicles && (
          <div className={vehicleOpen ? "" : "hidden"}>
            {charVehicles.length === 0 && <p>This character has no vehicles</p>}
            {charVehicles.map((cv, i) => {
              return <p key={i}>{cv.name}</p>;
            })}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Character;
