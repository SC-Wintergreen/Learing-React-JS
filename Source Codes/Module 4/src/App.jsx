import React, { useState } from "react";
import "../src/App.css";
import Header from "./Components/Header/Header";
import Inputs from "./Components/Inputs/Inputs";
import CricketerList from "./Components/CricketerList/CricketerList";

const App = () => {
  const [cricketers, setCricketers] = useState([]);

  const handleAddCricketers = function (cricketerData) {
    setCricketers((cricketers) => [...cricketers, cricketerData]);
  };
  return (
    <>
      <Header content="Cricketer Data App" />
      <Inputs onAddCricketers={handleAddCricketers} />
      <CricketerList cricketers={cricketers} />
    </>
  );
};

export default App;
