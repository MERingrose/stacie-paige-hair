import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Weddings from './pages/Weddings';
import Contact from './pages/Contact';


ReactDOM.render(
  < BrowserRouter >
    <Routes>
      <Route path="/" element={(<App />)}>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="weddings" element={<Weddings />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter >, document.getElementById("root")
);

