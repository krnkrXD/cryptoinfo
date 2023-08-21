import React from 'react'
import { Typography, Space } from 'antd';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023
          <Link to="/">
            CryptoInfo Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/cryptoinfo">Home</Link>
          <Link to="/cryptocurrencies">CryptoCurrencies</Link>
          <Link to="/news">News</Link>
          <Link to="/about">About</Link>
        </Space>
    </div>
  )
}

export default Footer
