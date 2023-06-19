import React from 'react'
import { Menu, Typography, Avatar } from "antd";
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined,MenuOutlined } from '@ant-design/icons';
import { Dropdown} from 'antd';
import icon from "../images/icon.png";

const menu = (
    <Menu
      items={[
        {
          label: <Link to="/">Home</Link>,
          key: '0',
        },
        {
            type: 'divider',
        },
        {
          label: <Link to="/cryptocurrencies">CryptoCurrencies</Link>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <Link to="/news">News</Link>,
          key: '3',
        },
        {
            type: 'divider',
        },
        {
            label: <Link to="/about">About</Link>,
            key: '5',
        },
      ]}
    />
  );


const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoInfo</Link>
                </Typography.Title>
                <div className="mobile">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a href onClick={e => e.preventDefault()}>
                            <MenuOutlined style={{ fontSize: '32px', textAlign:"right" } }/>
                        </a>
                    </Dropdown>
                </div>
            </div>
            <div className="laptop">
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">CryptoCurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/about">About</Link>
                    </Menu.Item>
                </Menu>
            </div>
            
        </div>
    );
}

export default Navbar