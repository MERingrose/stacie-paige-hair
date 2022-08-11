import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Gallery from '../pages/Gallery.jsx';
import Weddings from '../pages/Weddings.jsx';

export default function Main() {
   return <div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/weddings' element={<Weddings />} />
        </Routes>
    </BrowserRouter>
    </div>
}