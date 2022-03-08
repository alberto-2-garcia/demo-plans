import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path='/about' element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
