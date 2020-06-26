import React, { useEffect, useState } from "react";
import { getData } from "../helpers/getData";

const Character = ({ char }) => {
  const [charFilms, setCharFilms] = useState([]);
  const [charVehicles, setCharVehicles] = useState([]);
  const [charStarship, setCharStarship] = useState([]);
  const [filmsOpen, setFilmsOpen] = useState(false);
  const [shipOpen, setShipOpen] = useState(false);
  const [vehicleOpen, setVehicleOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getDetails = async (urls) => {
    try {
      const allResponses = await Promise.all(urls.map((url) => getData(url)));
      setLoading(false);
      setError(false);
      return allResponses;
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    (async () => {
      const [films, vehicles, starships] = await Promise.all([
        getDetails(char.films),
        getDetails(char.vehicles),
        getDetails(char.starships),
      ]);
      setCharFilms(films);
      setCharVehicles(vehicles);
      setCharStarship(starships);
    })();
  }, [char.films, char.starships, char.vehicles]);
  if (error) return <h2>Something Went Wrong</h2>;
  if (loading) return <div className="details-loading-skeleton"></div>;
  return (
    <div className="char-item">
      <div>
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
        <h4
          onClick={() => {
            setFilmsOpen(!filmsOpen);
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
          onClick={() => {
            setShipOpen(!shipOpen);
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
            setVehicleOpen(!vehicleOpen);
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
        )}
      </div>
      <ul></ul>{" "}
    </div>
  );
};

export default Character;
