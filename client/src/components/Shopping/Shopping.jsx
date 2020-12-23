import React from "react";
import styles from "./Shopping.module.css";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

const Shopping = (props) => {
  return (
    <Row justify="space-around" align="middle" className={styles.shopping}>
      <Col offset={1} span={22}>
        <Row gutter={[32, 0]} justify="center" align="middle">
          <Col
            lg={{ span: 18 }}
            xs={{ span: 24 }}
            className={styles.content}
            style={{ textAlign: "center" }}
          >
            Bạn còn chần chờ gì nữa? Mua sắm ngay với Sachuphy nào!
          </Col>
          <Col
            lg={{ span: 6 }}
            xs={{ span: 24 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link to="/product">
              <Button className={styles.btn}>ĐẾN CỬA HÀNG</Button>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Shopping;
