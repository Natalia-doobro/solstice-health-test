import React from 'react'
import { lazy } from "react";

import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

const Home = lazy(() =>
  import("./views/Home" /*webpackChunkName: "Home" */)
);

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" exact='true' element={<Home />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
