import { useState } from 'react';
import viteLogo from '/vite.svg';
import Navbar from './components/navbar';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    </>
  )
}

export default App
