import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Footer,
  Signin,
  Signup
} from "./components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import 'antd/dist/antd.min.css';

// AIzaSyBlcxtBYpgp-mcRhAqao6dRJlzZQasgIyo


const App = () => {
  const [isSignin, setSignin] = useState(false);
  return (
    <div className="app">
      <div className="navbar">
        <Navbar isSignin={isSignin} setSignin={setSignin} />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="main">
        { 
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage isSignin={isSignin}/>} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
                <Route path="/signin" element={<Signin isSignin={isSignin} setSignin={setSignin}/>} />
                <Route path="/signup" element={<Signup />} />
              </Routes> 
            </div>
          </Layout>
        }
        <Footer />
      </div>
    </div>
  );
};

export default App;
