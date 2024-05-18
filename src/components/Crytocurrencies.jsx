import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoAPI";
import Spinner from "./Spinner";
import SpinnerAnother from "./SpinnerAnother";

const Crytocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptoList, search]);

  console.log("nana ", cryptoList?.data?.coins);

  return (
    <>
      {!isFetching && !simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Crytocurrency"
            onChange={(e) => setSearch(e.target.value)}
          ></Input>
        </div>
      )}

      {/* render list section */}
      <Row gutter={[32, 32]} className="cryto-card-container">
        {isFetching ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner></Spinner>
          </div>
        ) : (
          // cryptoList?.data?.coins?.map((currency) => (
          cryptos?.map((currency) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.uuid}
            >
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank} ${currency.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={currency.iconUrl}
                      alt={currency.name}
                    ></img>
                  }
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market cap: {millify(currency.marketcap)}</p>
                  <p>Daily change: {millify(currency.change)} %</p>
                </Card>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default Crytocurrencies;
