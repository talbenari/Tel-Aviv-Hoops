import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Info from "./components/Info";
import FullSchedule from "./components/schedule/FullSchedule";
import GetGamesData from "./components/schedule/GetGamesData";
import {
  ThemeProvider,
  createTheme,
  Typography,
  withTheme,
} from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";

function App() {
  const mainTheme = createTheme({
    typography: {
      color: withTheme,
      fontFamily: "Comic sans Ms",
      fontSize: 40,
    },
  });
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <NavBar />
        <br />

        <GetGamesData />
        <br />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
