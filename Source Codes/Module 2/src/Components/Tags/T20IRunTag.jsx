import React from "react";

const T20IRunTag = ({ t20IRuns }) => {
  if (parseInt(t20IRuns) > 5000)
    return (
      <>
        <button className="btn btn-outline-danger">5000+ T20I Runs</button>
      </>
    );
  else if (parseInt(t20IRuns) > 4000)
    return (
      <>
        <button className="btn btn-outline-success">4000+ T20I Runs</button>
      </>
    );
  else if (parseInt(t20IRuns) > 2000) {
    return (
      <>
        <button className="btn btn-outline-info">2000+ T20I Runs</button>
      </>
    );
  }
};

export default T20IRunTag;
