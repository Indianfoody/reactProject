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
import JokeGenerator from './components/JokeGenerator';
import HindiJokeGenerator from './components/HindiJokeGenerator';


function App() {
  return (
   <>
  <Router>
          <Navbar/>
          <HindiJokeGenerator />
          <JokeGenerator />
        
      <Routes>
       {/*  <Route path="/" element={<Login />} /> */}
  
        {/* <Route path="/Navbar" element={<Navbar />} /> */}
         <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education/>}/>
        <Route path="/Contact" element={<Contact/>}/>
       </Routes>
       {/* <FreelanceNotificationForm/> */}
       <Footer/>
    </Router> 
   </>
  );
}

export default App;