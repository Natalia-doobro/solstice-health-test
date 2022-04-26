import React from 'react'
import { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'
import './App.css';

const Ligin = lazy(() =>
  import("./views/Login" /*webpackChunkName: "Ligin" */)
);
const Signup = lazy(() =>
  import("./views/Signup" /*webpackChunkName: "Signup" */)
);
const ResetPasswordPage = lazy(() =>
  import("./views/ResetPasswordPage" /*webpackChunkName: "ResetPasswordPage" */)
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
      <Header/>
      
        <Routes>
          <Route path="/login" element={<Ligin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
       
      <Footer/>
      </Suspense> 
    </div>
  );
}

export default App;
