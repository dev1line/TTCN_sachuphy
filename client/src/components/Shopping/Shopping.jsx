import React from "react";
import styles from "./Shopping.module.css";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

const Shopping = (props) => {
  return (
    <Row justify="space-around" align="middle" className={styles.shopping}>
      <Col offset={1} span={22}>
        <Row gutter={[32,0]}>
          <Col lg={{ span: 18 }} xs={{ span: 24 }} className={styles.content} style={{textAlign: "center", paddingBottom: "10px"}}>
            What are you still waiting for? Choose your own lovely laptop now!
          </Col>
          <Col lg={{ span: 6}} xs={{ span: 24 }} style={{display:"flex", justifyContent:"center"}}>
            <Link to="/product">
              <Button className={styles.btn}>SHOPPING NOW</Button>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Shopping;
