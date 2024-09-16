import React, { useState } from "react";
const IncreaseDecrease = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Incrementor(+)
      </button>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrementor(-)
      </button>
    </>
  );
};

export default IncreaseDecrease;
