import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homescreen from "./pages/Homescreen";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
