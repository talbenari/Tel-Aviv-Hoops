import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Info from "./components/Info";
import FullSchedule from "./components/schedule/FullSchedule";import GetGamesData from "./components/tableFeatures/GetGamesData"
import GetGamesData from "./components/schedule/GetGamesData";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />

      <GetGamesData />
      <br />
      <Footer />
     
    </div>
  );
}

export default App;
