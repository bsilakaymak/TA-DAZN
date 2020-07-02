import React, { Fragment, useState } from "react";
import { getData } from "../helpers/getData";

const CharDetails = ({ urls, detailName, placeholder }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [charDetails, setCharDetails] = useState([]);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const getDetails = async (urls) => {
    try {
      const allResponses = await Promise.all(
        urls.map((url) => getData(url.replace(/^http:/, "https:")))
      );
      setLoading(false);
      setError(false);
      return allResponses;
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  if (error) return <h2>Something Went Wrong</h2>;
  if (loading) return <div className="details-loading-skeleton"></div>;
  return (
    <Fragment>
      <h4
        onClick={() => {
          getDetails(urls).then((responses) => setCharDetails(responses));
          setDetailsOpen(true);
        }}
      >
        {detailName}
      </h4>
      {charDetails && (
        <div className={detailsOpen ? "" : "hidden"}>
          {charDetails.length === 0 && !loading && <p>{placeholder}</p>}
          {charDetails.map((cd, i) => {
            return <p key={i}>{cd.title ? cd.title : cd.name}</p>;
          })}
        </div>
      )}
    </Fragment>
  );
};

export default CharDetails;
