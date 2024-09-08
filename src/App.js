import './assets/css/style.css';
import {Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Product from './components/trial/Product';
import { useState } from 'react';
import Login from './components/layouts/Login';
import Home from './components/layouts/Home';
import Register from './components/layouts/Register';

function App() {

  let [textShow, setTextShow] = useState("Show More");

  const onChangeHandle = (event) => {
    console.log(event.target.value);
    setTextShow(event.target.value)
  } ;


  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
      {/* <Header onChangeHandle={onChangeHandle} ></Header> */}
      {/* <Product></Product> */}
    </div>
  );
}

export default App;
