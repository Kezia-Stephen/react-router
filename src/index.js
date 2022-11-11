import React, {createElement, Component, useState,useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Settings from './pages/Settings/Settings';
import { stateContext } from './Context/StateContext';
import {stateReducer, initialState} from './Context/Reducer';
//react-redux wrap
import {Provider} from "react-redux";
import {store} from "./Context/store";
import About from "./pages/About/About";
import reportWebVitals from './reportWebVitals';

//till session 22
function Routers(){
  // const [state, dispatch] = useReducer(stateReducer, initialState);
  // console.log("Reducer State", state);
  return (

    // Wrap using provider --> react-redux
    <Provider store ={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="profile" element={<Profile/>}></Route> */}
          {/*Params */}
          {/* <Route path="profile/:id" element={<Profile/>}></Route> */}
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="settings" element={<Settings/>}></Route>
          {/* Any number of params can be passed */}
          {/* <Route path="profile/:id/:name/:services" element={<Profile/>}></Route> */}
          <Route path="about" element={<About/>}></Route>
          {/* To navigate to pages not defined in Route/unmatched route */}
          {/* <Route path="*" element={<div>Oops! Page Not found!</div>}></Route> */}
          {/* Or you can direct back the user to the initial page */}
          <Route path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    // <stateContext.Provider value ={{state, dispatch}}>
   
  // </stateContext.Provider>
  )
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// wrapping the current router function inside the stateContext using .Provider
// pass a attribute using value

  <Routers/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
