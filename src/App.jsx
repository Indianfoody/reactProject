import { useState } from 'react';
import viteLogo from '/vite.svg';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>




      <Routes>


        <Route path="/test" element={<Test />} />



      </Routes>




    </BrowserRouter>
  );
}

export default App;