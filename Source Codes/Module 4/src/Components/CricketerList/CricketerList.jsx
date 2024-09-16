import React from "react";

const CricketerList = ({ cricketers }) => {
  return (
    <>
      <div className="container-xl p-3 mt-2 border rounded-1">
        <ul style={{ listStyleType: "none" }}>
          {cricketers.map((cricketer) => (
            <li
              className="my-2 d-flex flex-row justify-content-around"
              key={cricketer.id}
            >
              <span>{cricketer.name}</span>
              <span>{cricketer.category}</span>
              <span>{cricketer.runs}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CricketerList;
