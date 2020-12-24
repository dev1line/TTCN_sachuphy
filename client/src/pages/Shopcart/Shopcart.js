import React from "react";
import "animate.css";
import { Row, Col } from "antd";
import FormInfo from "../../components/FormInfo";

const Shopcart = (props) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Row>
        <Col span={24}>
          <FormInfo></FormInfo>
        </Col>
      </Row>
    </div>
  );
};

export default Shopcart;
