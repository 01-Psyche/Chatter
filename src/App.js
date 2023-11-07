import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

// COMPONENTS IMPORTS
import Startup from "./components/startup/Startup.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Startup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
