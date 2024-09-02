import './assets/css/style.css';
import {Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Product from './components/trial/Product';
import { useState } from 'react';

function App() {

  let [textShow, setTextShow] = useState("Show More");

  const onChangeHandle = (event) => {
    console.log(event.target.value);
    setTextShow(event.target.value)
  } ;


  return (
    <div>
      {/* <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes> */}
      <Header onChangeHandle={onChangeHandle} ></Header>
      <Product></Product>
      <p>{textShow}</p>
    </div>
  );
}

export default App;
