import React, { Dispatch, useEffect } from 'react';
import { createStore } from 'redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Plan from './Components/Plan';
import { Provider } from 'react-redux';
import Fetcher from './Components/Fetcher';
import { rootReducer } from './stores/rootReducers';

const store = createStore(rootReducer, {});

function App() {
  return (
    <Provider store={store}>
      <Fetcher />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />}/>
            <Route path='/plan/:plan' element={<Plan />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
