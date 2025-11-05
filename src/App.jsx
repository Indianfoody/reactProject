import { useState } from 'react';
import viteLogo from '/vite.svg';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';


function App() {
  return (
   <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;