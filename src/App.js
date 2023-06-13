import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import { NavBar } from './Components/NavBar/NavBar';
import { Footer } from "./Components/Footer/Footer";
import {routes} from './Routes'


function App() {

  return (
    <BrowserRouter basename='/'>
      <NavBar />

      <Routes>
        { routes.map(route=> <Route {...route} key={route.path} />) }
      </Routes>

      <Footer text="Copyright © Geovanny Valladares 2023"/>
    </BrowserRouter>
  );
}

export default App;
