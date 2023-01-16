import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Info from "./components/Info";
import {
  ThemeProvider,
  createTheme,
  Typography,
  withTheme,
} from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";

import FullSchedule from "./components/tableFeatures/FullSchedule";
import GetGamesData from "./components/tableFeatures/GetGamesData";

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
     
     
      <Footer />
    </div>
  );
}

export default App;
