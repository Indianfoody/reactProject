import { useState } from 'react';
import viteLogo from '/vite.svg';
import Login from './components/Login';
import Navbar from './components/Navbar';
import About from './pages/About';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Footer from './components/footer';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  return (
   <>
  <Router>
          <Navbar/>
      <Routes>
       {/*  <Route path="/" element={<Login />} /> */}
  
        {/* <Route path="/Navbar" element={<Navbar />} /> */}
         <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education/>}/>
        <Route path="/Contact" element={<Contact/>}/>
       </Routes>
       <Footer/>
    </Router> 
   </>
  );
}

export default App;