import "./App.css";
import React from "react";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import GetGamesData from "./components/tableFeatures/GetGamesData"


function App() {
  return (
    <div className="App">
      <NavBar />
      <GetGamesData/>
      <Footer />
    </div>
  );
}

export default App;

