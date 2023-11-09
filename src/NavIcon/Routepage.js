import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Linkpage from './Linkpage';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function Routepage() {
  return (
    <div>
      <BrowserRouter>
        <Linkpage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
