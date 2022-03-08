import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Plan from './Components/Plan';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path='/plan/:plan' element={<Plan />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
