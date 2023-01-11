import "./App.css";
import React from "react";
import CustomizedTables from "./components/schedule/schedule";
import GetGamesData from "./components/schedule/GetGamesData";

function App() {
  return (
    <div className="App">
      <GetGamesData />
    </div>
  );
}

export default App;
