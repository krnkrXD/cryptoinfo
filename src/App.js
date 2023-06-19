import React from 'react'
import {Routes, Route,} from 'react-router-dom';
import { Layout} from 'antd';
import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, News, Footer } from "./components";
import "./App.css";
import 'antd/dist/antd.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                    <Routes>
                        <Route path="/home" element={<Homepage />} />
                        <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
                        <Route path="crypto/:coinId" element={<CryptoDetails />} /> 
                        <Route path="news" element={<News />} />    
                    </Routes>
                    </div>
                </Layout>
                <Footer/>
            </div>
        </div>
    )
}

export default App
