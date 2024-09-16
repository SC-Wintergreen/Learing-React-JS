import React from "react";

const TestRunTag = ({ testRuns }) => {
  if (parseInt(testRuns) > 10000)
    return (
      <>
        <button className="btn btn-outline-danger">10000+ Test Runs</button>
      </>
    );
  else if (parseInt(testRuns) > 8000)
    return (
      <>
        <button className="btn btn-outline-success">8000+ Test Runs</button>
      </>
    );
  else if (parseInt(testRuns) > 5000) {
    return (
      <>
        <button className="btn btn-outline-info">5000+ Test Runs</button>
      </>
    );
  }
};

export default TestRunTag;
