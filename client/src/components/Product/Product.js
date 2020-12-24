import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { formatPrice } from "../../help/formatPrice";
import { ShoppingOutlined, InfoCircleOutlined } from "@ant-design/icons";
import styles from "./Product.module.css";
import config from "../../config";

const Product = (props) => {
  const product = props.product;
  function scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Card
      bordered={false}
      className={styles.card}
      hoverable
      style={{ position: "relative", cursor: "pointer" }}
      cover={
        <div
          style={{
            position: "relative",
            paddingTop: "75%",
            overflow: "hidden",
          }}>
          <img
            style={{ position: "absolute", top: 0, left: 0, height: "100%" }}
            alt="example"
            src={`http://${config.HOST}:${config.PORT}/api/v1/images/${props.img[0]}`}
          />
        </div>
      }>
      <Row className={styles.actions}>
        <Col span={24}>
          <Row justify="center">
            <Col className={styles.shopping}>
              <ShoppingOutlined
                onClick={() => props.onClick(product)}
                style={{ fontSize: "40px", color: "#636363" }}
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col className={styles["see-details"]}>
              <Link to={`/product/${props.slug}`}>
                <InfoCircleOutlined
                  onClick={scrollToTop}
                  style={{ fontSize: "36px", color: "#636363" }}
                />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className={styles.sale}>
          <Row
            style={{
              height: "100%",
              padding: "10px 0 10px",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#fff",
            }}
            justify="center">
            -{props.discount}%
          </Row>
        </Col>
      </Row>
      <Row style={{ position: "relative" }}>
        <h3
          style={{
            position: "absolute",
            top: "-10%",
            textShadow: "5px 5px 5px #dbdbdb",
          }}>
          {props.name}
        </h3>
        <p style={{ paddingTop: "20%" }}>
          <span style={{ fontWeight: "500", fontSize: "20px" }}>
            {formatPrice((props.price * (100 - props.discount)) / 100)}
          </span>{" "}
          <span style={{ textDecoration: "line-through", color: "#636363" }}>
            {formatPrice(props.price)}
          </span>
        </p>
        <p>{props.ram}</p>
      </Row>
    </Card>
  );
};
export default Product;
