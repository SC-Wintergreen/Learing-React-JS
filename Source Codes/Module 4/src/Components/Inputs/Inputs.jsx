import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Button from "../Buttons/Button";

const formats = [
  "Test",
  "ODI",
  "T20I",
  "IPL",
  "Ranji Trophy",
  "SMA Trophy",
  "Duleep Trophy",
];

const Inputs = ({ onAddCricketers }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [runs, setRuns] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name || !runs) return;

    const cricketerData = new Object({
      name,
      runs,
      category,
      id: new Date(),
    });

    console.log(cricketerData);
    onAddCricketers(cricketerData);

    setName("");
    setRuns("");
  };

  return (
    <>
      <section className="container-xl mt-2 ">
        <div className="row">
          <form
            className="col mx-auto d-flex flex-row justify-content-between border rounded-2"
            onSubmit={handleFormSubmit}
          >
            <span className=" d-flex flex-row gap-2 py-2 align-items-center">
              <label htmlFor="name-input" className="fw-bold ">
                Name of Cricketer
              </label>
              <input
                type="text"
                id="name-input"
                placeholder="Insert Cricketer Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="off"
              />
            </span>

            <span className=" d-flex flex-row gap-2 py-2 align-items-center">
              <label htmlFor="category-input" className="fw-bold ">
                Category
              </label>
              <select
                className=""
                id="category input"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {formats.map((format) => (
                  <option key={formats.indexOf(format) + 1} value={`${format}`}>
                    {format}
                  </option>
                ))}
              </select>
            </span>
            <span className=" d-flex flex-row gap-2 py-2 align-items-center">
              <label htmlFor="runs-input" className="fw-bold ">
                Runs
              </label>
              <input
                type="text"
                id="runs-input"
                placeholder="Insert Runs"
                value={runs}
                onChange={(event) => setRuns(event.target.value)}
                autoComplete="off"
              />
            </span>

            <span className="d-flex flex-row gap-2 py-2">
              <Button type="submit" color="btn-success" content="Submit" />
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default Inputs;
