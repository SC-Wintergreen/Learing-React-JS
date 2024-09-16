import React from "react";

const Button = ({ type, color, content }) => {
  return (
    <>
      <button
        type={type === "submit" ? "submit" : ""}
        className={`btn ${color}`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
