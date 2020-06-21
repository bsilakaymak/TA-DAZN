import React, { useEffect, useState } from "react";

const Character = ({ char }) => {
  const [charFilms, setCharFilms] = useState([]);
  const [charVehicles, setCharVehicles] = useState([]);
  const [charStarship, setCharStarship] = useState([]);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [filmsOpen, setFilmsOpen] = useState(false);
  const [shipOpen, setShipOpen] = useState(false);
  const [vehicleOpen, setVehicleOpen] = useState(false);
  const getDetails = async (arr, type) => {
    setDetailsLoading(true);
    try {
      const allResponses = await Promise.all(
        arr.map((url) => fetch(url).then((res) => res.json()))
      );
      if (type === "film") {
        setCharFilms(allResponses);
        setDetailsLoading(false);
      } else if (type === "vehicle") {
        setCharVehicles(allResponses);
        setDetailsLoading(false);
      } else if (type === "starship") {
        setCharStarship(allResponses);
        setDetailsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDetails(char.films, "film");
  }, []);
  useEffect(() => {
    getDetails(char.vehicles, "vehicle");
  }, []);
  useEffect(() => {
    getDetails(char.starships, "starship");
  }, []);
  return (
    <div className="char-item">
      <p><em>Name: </em>{char.name}</p>
      <p><em>Birth: </em>{char.birth_year}</p>
      <p><em>Height: </em>{char.height}<em> Mass:</em> {char.mass}</p>
      <p><em>Gender: </em>{char.gender}</p>
      <div className="details">
        <h4
          onClick={() => {
            setFilmsOpen(!filmsOpen);
          }}
        >
          Films
        </h4>
        <div className={filmsOpen ? "" : "hidden"}>
          {charFilms.map((cf) => {
            return <p>{cf.title}</p>;
          })}
        </div>
        <h4
          onClick={() => {
            setShipOpen(!shipOpen);
          }}
        >
          Starships
        </h4>
        <div className={shipOpen ? "" : "hidden"}>
          {charStarship.length === 0 && <p>This character has no starships</p>}
          {charStarship.map((cs) => {
            return <p>{cs.name}</p>;
          })}
        </div>

        <h4
          onClick={() => {
            setVehicleOpen(!vehicleOpen);
          }}
        >
          Vehicles
        </h4>
        <div className={vehicleOpen ? "" : "hidden"}>
        {charVehicles.length === 0 && <p>This character has no vehicles</p>}
          {charVehicles.map((cv) => {
            return <p>{cv.name}</p>;
          })}
        </div>
      </div>
      <ul></ul>{" "}
    </div>
  );
};

export default Character;
