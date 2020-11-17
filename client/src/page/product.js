import React from "react";
import { Row, Col } from "antd";
import { LeftContent } from "../components/LeftContent";
import { RightContent, ListItem } from "../components/RightContent";
import { MapShow } from "../components/Map";
import Header from '../components/Header/Header';
// import Footer from '../components/Footer/Footer';

const Product = (props) => {
  return (
    <Row>
      <Col span={24}><Header/></Col>
      <Col span={4}>
        <LeftContent></LeftContent>
      </Col>
      <Col span={20}>
        <Col style={{ marginLeft: "30px", marginRight: "30px" }}>
          <RightContent></RightContent>
          <ListItem></ListItem>
        </Col>
        <Col style={{ marginLeft: "30px", marginRight: "30px" }}>
          <MapShow></MapShow>
        </Col>
      </Col>
    </Row>
  );
};

export default Product;
