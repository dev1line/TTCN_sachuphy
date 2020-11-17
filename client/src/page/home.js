import React from "react";
import CarouselImage from "../components/Carousel";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Row, Col } from "antd";
import { Banner1, Banner2, Banner3 } from "../components/Banner";
import { BeginCmt, BodyCmt, EndCmt } from "../components/Comment";
import { MapShow } from "../components/Map";

const Home = (props) => {
  return (
    <Row>
      <Col span={24}><Header/></Col>
      <Col span={24}>
        <CarouselImage></CarouselImage>
      </Col>
      <Col span={24}>
        <Banner1></Banner1>
      </Col>
      <Col span={24}>
        <Banner2></Banner2>
      </Col>
      <Col span={24}>
        <Banner3></Banner3>
      </Col>
      <Col span={24}>
        <BeginCmt></BeginCmt>
      </Col>
      <Col span={24}>
        <BodyCmt></BodyCmt>
      </Col>
      <Col span={24}>
        <EndCmt></EndCmt>
      </Col>
      <Col span={24}>
        <MapShow></MapShow>
      </Col>
    </Row>
  );
};

export default Home;
