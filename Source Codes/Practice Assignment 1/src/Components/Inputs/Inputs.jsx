import React, { useState } from "react";

const formats = [
  { id: 1, name: "Test" },
  { id: 2, name: "ODI" },
  { id: 3, name: "T20I" },
  { id: 4, name: "Ranji Trophy" },
  { id: 5, name: "SMA Trophy" },
  { id: 6, name: "Duleep Trophy" },
  { id: 7, name: "Deodhar Trophy" },
];

const Inputs = ({ onAddCricketers }) => {
  const [cricketerName, setCricketerName] = useState("");
  const [formatName, setFormatName] = useState("Test");
  const [runs, setRuns] = useState("");
  const [playerID, setPlayerID] = useState(1);

  const handleSubmit = function (event) {
    event.preventDefault();

    if (!cricketerName || !formatName || !runs) {
      console.log("Either Of The Fields Cannot Be Blank");
      return;
    }

    const cricketerData = new Object({
      id: playerID,
      cricketerName,
      formatName,
      runs: parseInt(runs),
      marked: false,
    });

    console.log(cricketerData);
    onAddCricketers(cricketerData);

    setPlayerID(playerID + 1);
    setCricketerName("");
    setFormatName("Test");
    setRuns("");
  };
  return (
    <>
      <form className="container  py-2 my-2" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col d-flex flex-row align-items-center justify-content-between">
            <span className="mx-2">
              <label className="mr-4 fw-semibold">Name Of Cricketer</label>
              <input
                style={{ outline: "none" }}
                placeholder="Enter Cricketer Name"
                className="outline-none"
                value={cricketerName}
                onChange={(event) => setCricketerName(event.target.value)}
              />
            </span>
            <span className="mx-2">
              <label className="mr-4 fw-semibold">Format</label>
              <select
                value={formatName}
                onChange={(event) => setFormatName(event.target.value)}
              >
                {formats.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </span>
            <span className="mx-2">
              <label className="mr-4 fw-semibold">Runs</label>
              <input
                style={{ outline: "none" }}
                value={runs}
                placeholder="Runs Scored"
                className="outline-none"
                onChange={(event) => setRuns(event.target.value)}
              />
            </span>

            <span>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default Inputs;
