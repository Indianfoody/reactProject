import { useState } from 'react';
import viteLogo from '/vite.svg';
import Login from './components/Login';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  return (
   <>
   
  <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router> 
   </>
  );
}

export default App;