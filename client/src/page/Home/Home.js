import React from "react";
import "animate.css";
import { Row, Col } from "antd";
import {
  PromotionsCarousel,
  CommentsCarousel,
  Promotions,
  Shopping,
  Brands,
} from "../../components";

const Home = (props) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Row span={24} gutter={[0, 80]}>
        <Col span={24}>
          <PromotionsCarousel />
        </Col>
        <Col offset={1}></Col>
        <Col span={22}>
          <Promotions />
        </Col>
        <Col offset={1}></Col>
        <Col span={24}>
          <Shopping />
        </Col>
        <Col span={24}>
          <Brands />
        </Col>
        <Col span={24}>
          <CommentsCarousel />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
