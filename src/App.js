import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Countries from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import Navbar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/DetailsPage" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
