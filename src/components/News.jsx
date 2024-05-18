import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";
import Spinner from "./Spinner";
import { CopyTwoTone } from "@ant-design/icons";
import { Select, Space } from "antd";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [cate, setCate] = useState("latest");

  const { data: cryptoNews, isFetching } = useGetCryptosNewsQuery({
    params: {
      lr: "en-US",
    },
    cate:cate,
  });

  const [news, setNews] = useState([]);

  useEffect(() => {
    if (cryptoNews) {
      if (simplified) {
        console.log("Hello simplified");
        setNews(cryptoNews.items.slice(0, 6));
      } else {
        console.log("simplfied: ", simplified);
        console.log("Hello no simplified");
        setNews(cryptoNews.items);
      }
    }
  }, [cryptoNews]);

  console.log("crypto news: ", cryptoNews);
  console.log("news :", news);
  console.log("cate: ",cate)
  return (
    <>
      {isFetching ? (
        <Spinner></Spinner>
      ) : (
        <div>
          {!simplified && (
            <Space wrap style={{marginBottom: "20px"}}>
              <Select
                defaultValue={cate}
                style={{
                  width: 120,
                }}
                onChange={value=>setCate(value)}
                options={[
                  {
                    value: "latest",
                    label: "Latest",
                  },
                  {
                    value: "entertainment",
                    label: "Entertainment",
                  },
                  {
                    value: "world",
                    label: "World",
                  },
                  {
                    value: "business",
                    label: "Business",
                  },
                  {
                    value: "health",
                    label: "Health",
                  },
                  {
                    value: "science",
                    label: "Science",
                  },
                  {
                    value: "technology",
                    label: "Technology",
                  }
                ]}
              />

            </Space>
          )}
          <Row gutter={[24, 24]}>
            {news?.map((news, i) => (
              <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className="news-card">
                  <a href={news.newsUrl} target="_blank" rel="noreferrer">
                    <div className="news-image-container">
                      <Title className="news-title" level={4}>
                        {news.title}
                      </Title>
                      <img
                        style={{ maxWidth: "200px", maxHeight: "100px" }}
                        src={news?.images?.thumbnailProxied || demoImage}
                        alt=""
                      />
                    </div>
                    <p>
                      {news.snippet.length > 100
                        ? `${news.snippet.substring(0, 100)}...`
                        : news.description}
                    </p>
                    <div className="provider-container">
                      <div>
                        <Avatar src={demoImage} alt="" />
                        <Text className="provider-name">{news.publisher}</Text>
                      </div>
                      <Text>
                        {moment(news.datePublished).startOf("ss").fromNow()}
                      </Text>
                    </div>
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default News;
