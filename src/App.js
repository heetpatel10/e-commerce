import './assets/css/style.css';
import {Route, Routes } from 'react-router-dom';
import Login from './components/layouts/Login';
import Home from './components/layouts/Home';
import Register from './components/layouts/Register';
import React from 'react';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
