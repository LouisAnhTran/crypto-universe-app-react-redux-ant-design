import React from "react";
import { Switch, Route, Link, Router, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import Navbar from "./components/Navbar";
import "./App.css";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Crytocurrencies";
import Cryptodetails from "./components/Cryptodetails";
import Exchanges from "./components/Exchanges";
import News from "./components/News";
import Makecrypto from "./components/Makecrypto";

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar></Navbar>
        </div>

        <div className="main">
            <Layout>
                <div className="routes">

                    <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/exchanges" element={<Exchanges />} />
                    <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                    <Route path="/crypto/:coinId" element={<Cryptodetails />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/make-crypto" element={<Makecrypto />} />
                    </Routes>

                </div>
            </Layout>

            <div className="footer" >
                <Typography.Title level={5} style={{color: "white",textAlign: 'center'}}>
                    Crypytoverse <br></br>
                    All right reserved
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>

        </div>
        
    </div>
  );
};

export default App;
