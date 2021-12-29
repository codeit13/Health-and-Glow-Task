import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

import Home from './components/Home';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Offers from './components/Offers';
import Login from './components/Login';
import Register from './components/Register';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/offers" element={<Offers />}></Route>
      <Route path="/carousel" element={<Carousel />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
