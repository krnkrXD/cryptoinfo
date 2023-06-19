import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from './app/store';
// import React from "react";
// import ReactDOM from "react-dom";
// import App from './App.js'; 
// import './App.css';
// import { Layout, Typography, Space } from 'antd';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar,Footer, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from "./components";

// ReactDOM.render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>,
//     document.getElementById('root')
// );
const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
  root.render(
      <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>  
      </BrowserRouter>
  );