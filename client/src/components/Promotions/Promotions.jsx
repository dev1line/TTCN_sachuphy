import React from "react";
import styles from "./Promotions.module.css";
import { Row, Col } from "antd";

const Promotions = (props) => {
  const data = [
    {
      img:
        "https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg",
    },
    {
      img:
        "https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg",
    },
    {
      img:
        "https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg",
    },
  ];
  return (
    <Row justify="space-between" align="middle" gutter={[32, 32]}>
      {data.map((data, i) => (
        <Col
          lg={{ span: 8 }}
          xs={{ span: 24 }}
          key={i}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img className={styles.img} alt="img" src={data.img}></img>
        </Col>
      ))}
    </Row>
  );
};

export default Promotions;
