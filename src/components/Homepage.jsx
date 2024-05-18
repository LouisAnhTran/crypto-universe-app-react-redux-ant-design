import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import 'millify';

import { useGetCryptosQuery } from "../services/cryptoAPI";
import Spinner from "./Spinner";
import Crytocurrencies from "./Crytocurrencies";
import News from "./News";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats=data?.data?.stats;

  console.log(data);
  console.log(globalStats);

  return (
    <>
      <Typography.Title level={2} className="heading">
        Global Crypto States
      </Typography.Title>

      {isFetching ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Spinner></Spinner>
        </div>
        
      ) : (
        <Row>
          <Col span={12}>
            <Statistic title="Total Cryptocurrencies" value={globalStats.total}></Statistic>
          </Col>

          <Col span={12}>
            <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}></Statistic>
          </Col>

          <Col span={12}>
            <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic>
          </Col>

          <Col span={12}>
            <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}></Statistic>
          </Col>

          <Col span={12}>
            <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}></Statistic>
          </Col>
        </Row>
      )}

      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Typography.Title>

        <Typography.Title level={3} className="show-more">
          {!isFetching && <Link to="/cryptocurrencies">Show more</Link>}
        </Typography.Title>
      </div>

      <Crytocurrencies simplified></Crytocurrencies>

      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>

        <Typography.Title level={3} className="show-more">
            {!isFetching && <Link to="/news">Show more</Link>}
        </Typography.Title>
      </div>

      <News simplified></News>


    </>
  );
};

export default Homepage;
