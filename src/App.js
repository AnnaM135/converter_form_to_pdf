import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/Home';
import { CvFields } from './pages/CvFields';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/fields" element={<CvFields />} />
          </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
