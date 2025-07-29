import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import BookRide from './pages/BookRide';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookRide />} /> {/* ✅ Fixed */}
      </Routes>
    </Router>
  );
}

export default App;
