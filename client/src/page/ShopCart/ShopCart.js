import React from "react";
import { Row, Col } from "antd";
import FormInfo from "../../components/FormInfo";

const ShopCart = (props) => {
  return (
    <Row>
      <Col span={24}>
        <FormInfo></FormInfo>
      </Col>
    </Row>
  );
};

export default ShopCart;
