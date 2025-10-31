import { useState } from 'react';
import viteLogo from '/vite.svg';
import Navbar from './components/navbar';
import Home from './components/home';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Home/>
    </>
  )
}

export default App
