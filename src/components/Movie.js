import React, { useState } from "react";

const Movie = ({ movie }) => {
  const [detailsOpen, setDetailsOpen] = useState(false)
  return (
    <div className="movie-item">
        <h3>{movie.title}</h3>
        <button onClick={()=>setDetailsOpen(!detailsOpen)}>{detailsOpen ? `Close` : `More Info` }</button>
        <div className={detailsOpen ? `more-info`: `hidden`}>
          <div>
          <p>{movie.opening_crawl}</p>
        </div>
        <p><em>Director: </em>{movie.director}</p>
        <p><em>Released: </em>{movie.release_date}</p>
        </div>
        
    </div>
  );
};

export default Movie;
