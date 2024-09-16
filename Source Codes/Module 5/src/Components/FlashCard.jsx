import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const FlashCard = ({ id, question, answer }) => {
  return (
    <>
      <div className="col-6" key={id}>
        <div className="p-3 border rounded-1">{question}</div>
      </div>
    </>
  );
};

export default FlashCard;
