import React from "react";

const Display = () => {
  return (
    <div className="container my-2 py-2">
      <div className="row">
        <div className="col d-flex flex-row justify-content-center gap-4">
          <span className=" w-25  fw-semibold d-flex flex-row align-items-center justify-content-center">
            Cricketer Name
          </span>
          <span className=" w-25  fw-semibold d-flex flex-row align-items-center justify-content-center">
            Format
          </span>
          <span className=" w-25  fw-semibold d-flex flex-row align-items-center justify-content-center">
            Runs
          </span>
          <span className=" w-25  fw-semibold d-flex flex-row align-items-center justify-content-center">
            Actions
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Display;
