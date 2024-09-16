import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const StepsAndDateCounter = () => {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  const increaseSteps = function () {
    setSteps(steps + 1);
  };

  const decreaseSteps = function () {
    setSteps(steps - 1);
  };

  const currDate = new Date("september 14 2024");
  currDate.setDate(currDate.getDate() + count);

  return (
    <>
      <div className="container-xl border border-primary my-5">
        <div className="row my-2 ">
          <div className="col d-flex flex-column justify-content-center align-items-center p-2">
            <h1 className="my-2">{`Steps: ${steps}  `}</h1>
            <h3 className="">
              {`Date ${Math.abs(count)} day ${
                count > 0 ? "Later" : "Ago"
              }: ${currDate.toDateString()}`}
              :
            </h3>
          </div>
        </div>

        <div className="row d-flex flex-row justify-content-around mb-5">
          <div className="col-lg-4 d-flex justify-content-around  mx-2">
            <button className="btn btn-primary" onClick={decreaseSteps}>
              Decrease Steps (-)
            </button>
            <button className="btn btn-primary" onClick={increaseSteps}>
              Increase Steps (+)
            </button>
          </div>
          <div className="col-lg-4 d-flex justify-content-around ">
            <button
              className="btn btn-success"
              onClick={() => setCount(count - steps)}
            >
              Decrease Date (-)
            </button>
            <button
              className="btn btn-success"
              onClick={() => setCount(count + steps)}
            >
              Increase Date (+)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsAndDateCounter;
