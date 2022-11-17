import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "../Homepage/Index";
import Movies from "../Movies/index";
import Series from "../Series/index";


export default function Rotas() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
      </Routes>
    </Router>
  );
}
