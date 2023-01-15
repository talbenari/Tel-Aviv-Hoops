import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import GetGamesData from "./components/tableFeatures/GetGamesData";
// import {
//   createTheme,
//   withTheme,
// } from "@mui/material";

function App() {
  // const mainTheme = createTheme({
  //   typography: {
  //     color: withTheme,
  //     fontFamily: "Comic sans Ms",
  //     fontSize: 40,
  //   },
  // });
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
