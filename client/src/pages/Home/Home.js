import React from "react";
import "animate.css";
import { Row, Col } from "antd";
// import { Banner2, Banner3 } from "../../components/Banner";
// import { BeginCmt, BodyCmt, EndCmt } from "../../components/Comments/Comments";
import {
  PromotionsCarousel,
  Promotions,
  Shopping,
  Brands,
  Comments,
} from "../../components";

const Home = (props) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Row span={24} gutter={[0, 32]}>
        <Col span={24}>
          <PromotionsCarousel />
        </Col>
        <Col offset={1} span={22}>
          <Row>
            <Col span={24}>
              <Promotions />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Shopping />
        </Col>
        <Col span={24}>
          <Brands />
        </Col>
        <Col span={24}>
          <Comments />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
