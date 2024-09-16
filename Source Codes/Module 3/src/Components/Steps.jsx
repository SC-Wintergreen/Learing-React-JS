import React, { useState } from "react";
import "../index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Steps = () => {
  const [step, setStep] = useState(0);

  function incrementStep() {
    console.log(step);
    if (step == messages.length) {
      setStep(0);
    } else setStep(step + 1);
  }

  function decrementStep() {
    console.log(step);
    if (step < 0) {
      setStep(0);
    } else setStep(step - 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? `active` : ``}>1</div>
        <div className={step >= 2 ? `active` : ``}>2</div>
        <div className={step >= 3 ? `active` : ``}>3</div>
      </div>

      <p className="message">
        {step > 0 && step <= messages.length ? messages[step - 1] : ""}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          className="previous"
          onClick={decrementStep}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          className="next"
          onClick={incrementStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Steps;
