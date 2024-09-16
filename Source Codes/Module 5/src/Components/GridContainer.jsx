import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import { data } from "../data/data";

const GridContainer = () => {
  const [selectedID, setSelectedID] = useState(null);

  const handleClick = function (id) {
    if (id === selectedID) setSelectedID(null);
    else setSelectedID(id);
  };
  return (
    <>
      <div className="container-xxl text-center p-5 border border-primary rounded-1 mt-5">
        <div className="row g-2">
          {data.map((element) => (
            <div className="col-6 fw-semibold" key={element.id}>
              <div
                style={{ cursor: "pointer" }}
                className={`p-3 border rounded-1 ${
                  selectedID == element.id ? `bg-success text-white ` : ``
                }`}
                onClick={() => handleClick(element.id)}
              >
                {selectedID == element.id ? element.answer : element.question}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GridContainer;
