import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import Homescreen from "./pages/Homescreen";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
