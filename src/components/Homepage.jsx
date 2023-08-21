import React from 'react'
import millify from 'millify';
import { Button, Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = ({isSignin}) => {

    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    if (isFetching) return <Loader/>;
    // console.log(data);
    return (
        <>
        {
            !isSignin ?
            <div style={{width:"100%", height:"500px", display:"flex", justifyContent:"center", alignItems:"center", columnGap:"20px"}}>
                <Button href='/signin'> SignIn</Button>
                <Button href='signup'> SignUp</Button>
            </div>
            :
            <div>
                <Title level={2} className="heading"> Global Crypto Stats</Title>      
                <Row>
                    <Col span={12}><Statistic title = "Total Cryptocurrencies" value={millify(globalStats.total)}/></Col>
                    <Col span={12}><Statistic title = "Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                    <Col span={12}><Statistic title = "Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                    <Col span={12}><Statistic title = "Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                    <Col span={12}><Statistic title = "Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
                </Row>
                <div className="home-heading-container">
                    <Title className='home-title' level={2}>Top 10 Cryptocurrencies in the world</Title>
                    <Title className='show-more' level={3}><Link to='cryptocurrencies'>Show More</Link></Title>
                </div>
                <Cryptocurrencies simplified />
                <div className="home-heading-container">
                    <Title className='home-title' level={2}>Latest New Of Crypto</Title>
                    <Title className='show-more' level={3}><Link to='news'>Show More</Link></Title>
                </div>
                <News simplified/>
            </div>
            }
        </>
    )
}

export default Homepage