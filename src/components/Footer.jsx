import React from 'react'
import { Typography, Space } from 'antd';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
<<<<<<< HEAD
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023 &#160;
=======
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023
>>>>>>> d39d55cdf0987d82e841872cb80b3c86e1861dbc
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
