import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header/Header";
import Inputs from "./Components/Inputs/Inputs";
import Display from "./Components/Display/DIsplay";
import DisplayData from "./Components/DisplayData/DisplayData";

const App = () => {
  const [cricketers, setCricketers] = useState([]);

  const handleAddCricketers = function (cricketerData) {
    setCricketers((cricketers) => [...cricketers, cricketerData]);
  };

  const handleDeleteCricketers = function (id) {
    console.log(id);
    setCricketers((cricketers) =>
      cricketers.filter((cricketer) => cricketer.id != id)
    );
  };

  const handleHighlightToggle = function (id) {
    console.log(id);

    setCricketers((cricketers) =>
      cricketers.map((cricketer) =>
        cricketer.id === id
          ? { ...cricketer, marked: !cricketer.marked }
          : cricketer
      )
    );
  };
  return (
    <>
      <div className="container-xl border rounded-1 mt-3 p-2">
        <Header />
        <Inputs onAddCricketers={handleAddCricketers} />
        <Display />
        <DisplayData
          cricketers={cricketers}
          onDeleteCricketers={handleDeleteCricketers}
          onHighlightToggle={handleHighlightToggle}
        />
      </div>
    </>
  );
};

export default App;
