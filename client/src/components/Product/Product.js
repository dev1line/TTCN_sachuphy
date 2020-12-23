import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { formatPrice } from "../../help/formatPrice";
import { ShoppingOutlined, InfoCircleOutlined } from "@ant-design/icons";
import styles from "./Product.module.css";

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
      className={styles.card}
      style={{ position: "relative", cursor: "pointer" }}
      cover={
        <img
          alt="example"
          src="https://hanoicomputercdn.com/media/product/52023_17z90n_v_ah75a5.png"
        />
      }
    >
      <Row className={styles.actions}>
        <Col offset={2} span={22}>
          <Row>
            <Col offset={3} className={styles["options"]}>
              {props.options.length
                ? `${props.options.length} cấu hình đề xuất`
                : ""}
            </Col>
          </Row>
          <Row>
            <Col offset={8} className={styles.shopping}>
                <ShoppingOutlined
                  onClick={() => props.onClick(product)}
                  style={{ fontSize: "40px", color: "#636363" }}
                />
            </Col>
          </Row>
          <Row>
            <Col offset={8} className={styles["see-details"]}>
                <Link to={`/product/${props.slug}`}>
                  <InfoCircleOutlined
                    onClick={scrollToTop}
                    style={{ fontSize: "40px", color: "#636363" }}
                  />
                </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0 70%)",
            position: "absolute",
            width: "20%",
            top: 0,
            right: 0,
            background: "rgb(255,50,50)",
          }}
        >
          <Row
            style={{
              height: "100%",
              padding: "10px 0 20px",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#fff",
            }}
            justify="center"
          >
            -{props.discount}%
          </Row>
        </Col>
      </Row>
      <Row style={{ position: "relative" }}>
        <h3
          style={{
            position: "absolute",
            top: "-60px",
            textShadow: "5px 5px 5px #dbdbdb",
          }}
        >
          {props.name}
        </h3>
        <p>
          <span style={{ fontWeight: "500", fontSize: "20px" }}>
            {formatPrice((props.price * (100 - props.discount)) / 100)}
          </span>{" "}
          <span style={{ textDecoration: "line-through", color: "#636363" }}>
            {formatPrice(props.price)}
          </span>
        </p>
        <p>{props.ram}</p>
        {/* <Button
          onClick={() => props.onClick(product)}
          size="large"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            display: "block",
            width: "100%",
          }}
        >
          Thêm vào giỏ hàng
        </Button>
        <Button
          size="large"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            display: "block",
            width: "100%",
          }}
          onClick={scrollToTop}
        >
          <Link to={`/product/${props.slug}`}>Chi tiết sản phẩm</Link>
        </Button> */}
      </Row>
    </Card>
  );
};
export default Product;
