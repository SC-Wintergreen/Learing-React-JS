import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import TestRunTag from "../Tags/TestRunTag";
import T20IRunTag from "../Tags/T20IRunTag";
import ActiveTag from "../Tags/ActiveTag";
import RetiredTag from "../Tags/RetiredTag";
import ODIRunTag from "../Tags/ODIRunTag";
const Cards = ({
  cricketerName,
  cricketerNationality,
  cricketerRole,
  cricketerImage,
  t20IRuns,
  odiRuns,
  testRuns,
  active,
}) => {
  return (
    <>
      <div className="card" style={{ width: "22rem" }}>
        <img
          src={cricketerImage}
          className="card-img-top"
          height="300px"
          width="400px"
          alt={cricketerName}
        />
        <div className="card-body">
          <h5 className="card-title">{cricketerName}</h5>
          <div className=" d-flex  p-2 justify-content-between flex-wrap row-gap-1  col-gap-1">
            {active ? <ActiveTag /> : <RetiredTag />}
            <TestRunTag testRuns={testRuns} />
            <T20IRunTag t20IRuns={t20IRuns} />
            <ODIRunTag odiRuns={odiRuns} />
          </div>
          <p className="card-text">
            {cricketerName} Is An {cricketerNationality} Cricketer, Who Is A{" "}
            {cricketerRole}
          </p>
          <a href="#" className="btn btn-primary">
            Know More
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
