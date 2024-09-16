import React from "react";

const ODIRunTag = ({ odiRuns }) => {
  if (parseInt(odiRuns) > 10000)
    return (
      <>
        <button className="btn btn-outline-danger">10000+ ODI Runs</button>
      </>
    );
  else if (parseInt(odiRuns) > 8000)
    return (
      <>
        <button className="btn btn-outline-success">8000+ ODI Runs</button>
      </>
    );
  else if (parseInt(odiRuns) > 5000) {
    return (
      <>
        <button className="btn btn-outline-info">5000+ ODI Runs</button>
      </>
    );
  }
};

export default ODIRunTag;
