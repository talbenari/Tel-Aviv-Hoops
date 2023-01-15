import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Info from "./components/Info";

import GetGamesData from "./components/tableFeatures/GetGamesData";
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
    <div className="App">
      <NavBar />
      <br />
      <GetGamesData />
      <br />
      <Footer />
      {/* <Routes>
        <Route path="*" element={<NavBar />} />
        <Route path="*" element={<GetGamesData />} />
        <Route path="*" element={<Footer />} />    
      </Routes> */}
    </div>
  );
}

export default App;
