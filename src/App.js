import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import GetGamesData from "./components/tableFeatures/GetGamesData";

function App() {
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
