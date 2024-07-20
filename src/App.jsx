import React from 'react'
import Header from './Header';

import Home from './Home';
import About from './About';
import Journal from './Journal';
import Support from './Support';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="journal" element={<Journal />} />
          <Route path="support" element={<Support />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App