// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SeriesPage from './pages/SeriesPage'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/cadastrar" element={<SeriesPage />} /> 
            <Route path="/listar" element={<SeriesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;