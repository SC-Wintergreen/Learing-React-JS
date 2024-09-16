import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";

const DisplayData = ({ cricketers, onDeleteCricketers, onHighlightToggle }) => {
  return (
    <div className="container my-2 py-2">
      {cricketers.map((cricketer) => (
        <div className="row mb-2" key={cricketer.id}>
          <div className="col d-flex flex-row justify-content-center gap-4">
            <span
              className={`w-25  fw-semibold d-flex flex-row align-items-center justify-content-center ${
                cricketer.marked ? `text-danger` : ``
              }`}
            >
              {cricketer.cricketerName}
            </span>
            <span
              className={`w-25  fw-semibold d-flex flex-row align-items-center justify-content-center ${
                cricketer.marked ? `text-danger` : ``
              }`}
            >
              {cricketer.formatName}
            </span>
            <span
              className={`w-25  fw-semibold d-flex flex-row align-items-center justify-content-center ${
                cricketer.marked ? `text-danger` : ``
              }`}
            >
              {cricketer.runs}
            </span>
            <span className=" w-25  fw-semibold d-flex flex-row gap-2 justify-content-center">
              <button
                className="btn btn-primary"
                onClick={() => onHighlightToggle(cricketer.id)}
              >
                <FaLightbulb size={18} />
              </button>

              <button
                className="btn btn-danger"
                onClick={() => onDeleteCricketers(cricketer.id)}
              >
                <MdDeleteForever size={18} />
              </button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
