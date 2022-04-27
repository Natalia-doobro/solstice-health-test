import React from 'react'
import {
  lazy, 
  Suspense, 
  // useEffect 
} from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'
// import authOperations from "./redux/auth/auth-operations";
// import authSelectors from "./redux/auth/auth-selectors";
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
  // const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsCurrentUser);

  // useEffect(() => {
  //   dispatch(authOperations.refreshCurrentUser());
  // }, [dispatch]);

  return (
    // !isFetchingCurrentUser && ()
      <Suspense fallback={<Loader/>}>
        <Header/>
      
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" replace/>}/>
          <Route path="/login" element={<Ligin/>} />
          <Route path="/sign-up" element={<Signup/>} />
          <Route path="/reset-password" element={<ResetPasswordPage/>} />
        </Routes>
       
        <Footer/>
      </Suspense> 
  );
}

export default App;
